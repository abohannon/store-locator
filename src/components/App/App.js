/** @jsx jsx */
import React, { useEffect } from 'react'
import { jsx, css } from '@emotion/core'
import Map from '../Map'
import Sidebar from '../Sidebar'
import { createMap, map } from '../../vendor/mapbox'
import { shops } from '../../test-data'
import 'mapbox-gl/dist/mapbox-gl.css'

const root = css`
  display: flex;
  flex-direction: row;
  height: 100%;
`

const App = () => {
  useEffect(() => {
    createMap('map-container')
  }, [])

  return (
    <div id="app" css={root}>
      <Sidebar locations={shops.features} />
      <Map />
    </div>
  )
}

export default App
