/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import { jsx, css } from '@emotion/core'
import Map from '../Map'
import Sidebar from '../Sidebar'
import { createMap } from '../../vendor/mapbox'
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
