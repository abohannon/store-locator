import mapboxgl from 'mapbox-gl'
import { shops } from '../test-data'

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

export const createMap = container => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYWJvaGFubm9uIiwiYSI6ImNrNWVkMmkzcjI1dzYzZW4wM2ZqdzkwbDIifQ.Rw64L1g9NgOoqW1FwJtslA'
  const style = 'mapbox://styles/abohannon/ck5ep1nzk0vxp1io6otxr6u0c'

  const map = new mapboxgl.Map({
    container,
    style,
    center: [-77.034084, 38.909671],
    zoom: 14,
  })

  map.on('load', function(e) {
    /* Add the data to your map as a layer */
    map.addLayer({
      id: 'locations',
      type: 'symbol',
      /* Add a GeoJSON source containing place coordinates and information. */
      source: {
        type: 'geojson',
        data: shops,
      },
      layout: {
        'icon-image': 'restaurant-15',
        'icon-allow-overlap': true,
      },
    })
  })

  return map
}
