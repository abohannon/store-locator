import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

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

const Map = props => {
  return <Wrapper id="map-container"></Wrapper>
}

Map.propTypes = {}

export default Map
