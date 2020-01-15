/** @jsx jsx */
import React, { useEffect } from 'react'
import { jsx, css } from '@emotion/core'
import Map from '../Map'
import Listing from '../Listing'
import 'mapbox-gl/dist/mapbox-gl.css'

const root = css`
  display: flex;
  flex-direction: row;
`

const App = () => {
  return (
    <div id="app" css={root}>
      <Listing />
      <Map />
    </div>
  )
}

export default App
