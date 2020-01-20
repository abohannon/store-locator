import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Map from '../Map'
import Sidebar from '../Sidebar'
import Icon from '../Icon'
import { createMap, addMarkers, onMapLoad } from '../../vendor/mapbox'
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
  const [activeLocation, setActiveLocation] = useState(null)
  const [map, setMap] = useState(null)

  useEffect(() => {
    setMap(createMap('map-container'))
  }, [])

  useEffect(() => {
    if (map) {
      const options = {
        map,
        locations: shops,
        props: {
          setActiveLocation,
        },
      }

      onMapLoad(shops, map, () => addMarkers(Icon, options))
    }
  }, [map])

  return (
    <Wrapper id="app">
      <Sidebar
        map={map}
        locations={shops.features}
        activeLocation={activeLocation}
        setActiveLocation={setActiveLocation}
      />
      <Map map={map} />
    </Wrapper>
  )
}

export default App
