import React from 'react'
import styled from '@emotion/styled'
import { flyToLocation, createPopup } from '../../vendor/mapbox'
import icon from '../../no-means-no.png'

const Wrapper = styled.div`
  background: url(${icon}) no-repeat;
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
    createPopup(marker, map)
    setActiveLocation(marker.properties.id)
    e.stopPropagation()
  }

  return <Wrapper onClick={handleClick} />
}

export default Icon
