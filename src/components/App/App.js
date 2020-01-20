import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Map from '../Map'
import Sidebar from '../Sidebar'
import Icon from '../Icon'
import { createMap, addMarkers } from '../../vendor/mapbox'
import { shops } from '../../test-data'
import 'mapbox-gl/dist/mapbox-gl.css'

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
      map.on('load', function(e) {
        /* Add the data to your map as a layer */
        map.addSource('places', {
          type: 'geojson',
          data: shops,
        })

        const options = {
          map,
          locations: shops,
          props: {
            setActiveLocation,
          },
        }

        addMarkers(Icon, options)
      })
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
