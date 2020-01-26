import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Map from '../Map'
import Sidebar from '../Sidebar'
import Icon from '../Icon'
import {
  createMap,
  addMarkers,
  loadMap,
  loadGeocoder,
} from '../../vendor/mapbox'
import { shops } from '../../test-data'
import 'mapbox-gl/dist/mapbox-gl.css'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
import './app.css'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`

const App = () => {
  const [locations, setLocations] = useState(undefined)
  const [activeLocation, setActiveLocation] = useState(null)
  const [map, setMap] = useState(null)

  useEffect(() => {
    // TODO: Update with real data
    setTimeout(() => {
      setLocations(shops)
      setMap(createMap('map-container'))
    }, 2000)
  }, [])

  useEffect(() => {
    if (locations) {
      const callback = () => {
        addMarkers(addMarkersOptions)
      }

      const addMarkersOptions = {
        icon: Icon,
        map,
        locations,
        props: {
          setActiveLocation,
        },
      }

      loadMap(locations, map, callback)
      loadGeocoder(locations, map, setLocations)
    }
  }, [map])

  return (
    <Wrapper id="app">
      <Sidebar
        title="Participating shops"
        map={map}
        locations={locations && locations.features}
        activeLocation={activeLocation}
        setActiveLocation={setActiveLocation}
      />
      <Map map={map} />
    </Wrapper>
  )
}

export default App
