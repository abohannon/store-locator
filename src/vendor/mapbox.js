import mapboxgl from 'mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import * as turf from '@turf/turf'
import React from 'react'
import ReactDOM from 'react-dom'
import { MAPBOX_PUBLIC_ACCESS_TOKEN, MAPBOX_STYLE_URL } from '../constants'

export const flyToLocation = (currentLocation, map) => {
  if (typeof map !== 'undefined') {
    map.flyTo({
      center: currentLocation.geometry.coordinates,
      zoom: 15,
    })
  }
}

export const createPopup = (currentLocation, map, Popup) => {
  const popUps = document.getElementsByClassName('mapboxgl-popup')
  /** Check if there is already a popup on the map and if so, remove it */
  if (popUps[0]) popUps[0].remove()

  const el = document.createElement('div')
  ReactDOM.render(
    <Popup
      key={currentLocation.properties.name}
      name={currentLocation.properties.name}
      address={currentLocation.properties.address}
    />,
    el,
  )

  const popup = new mapboxgl.Popup({ closeButton: false })
    .setLngLat(currentLocation.geometry.coordinates)
    .setDOMContent(el)
    .addTo(map)
}

export const addMarkers = (locations, map, Icon, setActiveLocation) => {
  locations.features.forEach(function(marker) {
    var el = document.createElement('div')
    ReactDOM.render(
      <Icon marker={marker} map={map} setActiveLocation={setActiveLocation} />,
      el,
    )

    new mapboxgl.Marker(el, { offset: [0, -23] })
      .setLngLat(marker.geometry.coordinates)
      .addTo(map)
  })
}

export const createMap = container => {
  mapboxgl.accessToken = MAPBOX_PUBLIC_ACCESS_TOKEN

  const map = new mapboxgl.Map({
    container,
    style: MAPBOX_STYLE_URL,
    center: [-77.034084, 38.909671],
    zoom: 14,
  })

  return map
}

export const loadMap = (locations, map, callback) => {
  map.on('load', function(e) {
    /* Add the data to your map as a layer */
    map.addSource('places', {
      type: 'geojson',
      data: locations,
    })

    callback()
  })
}

export const loadGeocoder = (locations, map, setLocations) => {
  map.addControl(initGeocoder(), 'top-left')

  function initGeocoder() {
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl,
      marker: true,
      bbox: [-77.210763, 38.803367, -76.853675, 39.052643],
    })

    geocoder.on('result', function(ev) {
      var searchResult = ev.result.geometry
      var options = { units: 'miles' }
      locations.features.forEach(location => {
        Object.defineProperty(location.properties, 'distance', {
          value: turf.distance(searchResult, location.geometry, options),
          writable: true,
          enumerable: true,
          configurable: true,
        })
      })

      const sorted = sortLocationsByDistance()

      setLocations({
        type: 'FeatureCollection',
        features: sorted,
      })

      const bbox = getBox(locations, 0, searchResult)

      map.fitBounds(bbox, {
        padding: 100,
      })
    })

    return geocoder
  }

  function sortLocationsByDistance() {
    return locations.features.sort(function(a, b) {
      if (a.properties.distance > b.properties.distance) {
        return 1
      }
      if (a.properties.distance < b.properties.distance) {
        return -1
      }
      return 0
    })
  }

  function getBox(sortedLocations, locationIdentifier, searchResult) {
    const lats = [
      sortedLocations.features[locationIdentifier].geometry.coordinates[1],
      searchResult.coordinates[1],
    ]

    const lons = [
      sortedLocations.features[locationIdentifier].geometry.coordinates[0],
      searchResult.coordinates[0],
    ]

    const sortedLons = lons.sort(sortDistance)
    const sortedLats = lats.sort(sortDistance)

    return [
      [sortedLons[0], sortedLats[0]],
      [sortedLons[1], sortedLats[1]],
    ]

    function sortDistance(a, b) {
      if (a > b) return 1
      if (a.distance < b.distance) return -1
      return 0
    }
  }
}
