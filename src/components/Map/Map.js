import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { flyToLocation, createPopup } from '../../vendor/mapbox'

const Wrapper = styled.div`
  background-color: goldenrod;
  border-left: 1px solid #fff;
  position: absolute;
  left: 33.3333%;
  width: 66.6666%;
  top: 0;
  bottom: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`

const Map = ({ map }) => {
  const handleMapClick = e => {
    /* Determine if a feature in the "locations" layer exists at that point. */
    const features = map.querySourceFeatures('places')
    console.log(e)
    console.log(features)
    if (features.length) {
      const clickedPoint = features[0]
      flyToLocation(clickedPoint, map)
      createPopup(clickedPoint, map)
    }
  }

  useEffect(() => {
    if (map) {
      map.on('click', handleMapClick)
    }
  }, [map])

  return <Wrapper id="map-container"></Wrapper>
}

Map.propTypes = {
  map: PropTypes.object,
}

export default Map
