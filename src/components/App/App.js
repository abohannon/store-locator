/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { jsx, css } from '@emotion/core'
import Map from '../Map'
import Sidebar from '../Sidebar'
import Icon from '../Icon'
import { createMap, addMarkers } from '../../vendor/mapbox'
import { shops } from '../../test-data'
import 'mapbox-gl/dist/mapbox-gl.css'

const root = css`
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

        const IconElement = props =>
          React.createElement(Icon, {
            setActiveLocation,
            ...props,
          })

        addMarkers(IconElement, shops, map)
      })
    }
  }, [map])

  return (
    <div id="app" css={root}>
      <Sidebar
        map={map}
        locations={shops.features}
        activeLocation={activeLocation}
        setActiveLocation={setActiveLocation}
      />
      <Map map={map} />
    </div>
  )
}

export default App
