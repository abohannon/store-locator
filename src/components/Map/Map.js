import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  border-left: 1px solid #fff;
  position: absolute;
  left: 33.3333%;
  width: 66.6666%;
  top: 0;
  bottom: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  @media (max-width: 420px) {
    width: 100%;
    bottom: 33.33333%;
    border-left: unset;
    left: 0;
  }
`

const Map = () => <Wrapper id="map-container"></Wrapper>

export default Map
