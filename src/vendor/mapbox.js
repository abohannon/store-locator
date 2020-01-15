import mapboxgl from 'mapbox-gl'

export let map = {}

export const createMap = container => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYWJvaGFubm9uIiwiYSI6ImNrNWVkMmkzcjI1dzYzZW4wM2ZqdzkwbDIifQ.Rw64L1g9NgOoqW1FwJtslA'
  const style = 'mapbox://styles/abohannon/ck5ep1nzk0vxp1io6otxr6u0c'

  map = new mapboxgl.Map({
    container,
    style,
  })
}
