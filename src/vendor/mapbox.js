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

export const createPopup = (currentLocation, map) => {
  const popUps = document.getElementsByClassName('mapboxgl-popup')
  /** Check if there is already a popup on the map and if so, remove it */
  if (popUps[0]) popUps[0].remove()

  const popup = new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat(currentLocation.geometry.coordinates)
    .setHTML(
      `<h3>${currentLocation.properties.name}</h3>` +
        `<h4>${currentLocation.properties.address}</h4>`,
    )
    .addTo(map)
}

export const addMarkers = (ReactEl, options) => {
  const { locations, map, props } = options
  console.log('locations', locations)
  locations.features.forEach(function(marker) {
    var el = document.createElement('div')
    ReactDOM.render(<ReactEl marker={marker} map={map} {...props} />, el)

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

export const onMapLoad = (locations, map, cb) => {
  map.on('load', function(e) {
    /* Add the data to your map as a layer */
    map.addSource('places', {
      type: 'geojson',
      data: locations,
    })

    map.addControl(initGeocoder(), 'top-left')
    sortLocationsByDistance()
    cb()
  })

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
    })

    return geocoder
  }

  function sortLocationsByDistance() {
    locations.features.sort(function(a, b) {
      if (a.properties.distance > b.properties.distance) {
        return 1
      }
      if (a.properties.distance < b.properties.distance) {
        return -1
      }
      return 0
    })
  }
}
