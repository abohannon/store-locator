/** @jsx jsx */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { jsx, css } from '@emotion/core'
import { createMap, map } from '../../vendor/mapbox'

const root = css`
  background-color: goldenrod;
`

const Map = props => {
  useEffect(() => {
    createMap('map-container')
  }, [])

  return (
    <div id="map-container" css={root}>
      MAP
    </div>
  )
}

Map.propTypes = {}

export default Map
