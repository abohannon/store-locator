import mapboxgl from 'mapbox-gl'
import { shops } from '../test-data'

export let map = {}

export const createMap = container => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYWJvaGFubm9uIiwiYSI6ImNrNWVkMmkzcjI1dzYzZW4wM2ZqdzkwbDIifQ.Rw64L1g9NgOoqW1FwJtslA'
  const style = 'mapbox://styles/abohannon/ck5ep1nzk0vxp1io6otxr6u0c'

  map = new mapboxgl.Map({
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
}
