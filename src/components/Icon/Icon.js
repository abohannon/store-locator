import React from 'react'
import styled from '@emotion/styled'
import Popup from '../Popup'
import { flyToLocation, createPopup } from '../../vendor/mapbox'

const Wrapper = styled.div`
  background: url(https://still-not-asking-for-it-shop-locator.s3-us-west-1.amazonaws.com/build/no-means-no-200.png)
    no-repeat;
  background-size: 42px;
  background-position: center;
  border: none;
  cursor: pointer;
  height: 56px;
  width: 56px;
  background-color: rgba(0, 0, 0, 0);
`

const Icon = ({ marker, map, setActiveLocation }) => {
  const handleClick = e => {
    flyToLocation(marker, map)
    createPopup(marker, map, Popup)
    setActiveLocation(marker.id)
    e.stopPropagation()
  }

  return <Wrapper onClick={handleClick} />
}

export default Icon
