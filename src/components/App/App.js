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

  // const createPopup = () => {
  //   const popUps = document.getElementsByClassName('mapboxgl-popup')
  //   /** Check if there is already a popup on the map and if so, remove it */
  //   if (popUps[0]) popUps[0].remove()

  //   const popup = new mapboxgl.Popup({ closeOnClick: false })
  //     .setLngLat(currentFeature.geometry.coordinates)
  //     .setHTML(
  //       `<h3>${currentFeature.properties.name}</h3>` +
  //         `<h4>${currentFeature.properties.address}</h4>`,
  //     )
  //     .addTo(map)
  // }

  return (
    <div id="app" css={root}>
      <Sidebar locations={shops.features} />
      <Map />
    </div>
  )
}

export default App
