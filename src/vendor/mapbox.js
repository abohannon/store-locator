import mapboxgl from 'mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
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

    var geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken, // Set the access token
      mapboxgl, // Set the mapbox-gl instance
      marker: true, // Use the geocoder's default marker style
      bbox: [-77.210763, 38.803367, -76.853675, 39.052643], // Set the bounding box coordinates
    })

    map.addControl(geocoder, 'top-left')

    cb()
  })
}
