import React from 'react'
import styled from '@emotion/styled'
import icon from '../../no-means-no.png'

const Wrapper = styled.div`
  background: url(${icon}) no-repeat;
  background-size: 42px;
  border: none;
  cursor: pointer;
  height: 56px;
  width: 56px;
  background-color: rgba(0, 0, 0, 0);
`

const Icon = ({ marker }) => {
  const handleClick = () => {
    console.log(marker)
  }

  return <Wrapper onClick={handleClick} />
}

export default Icon
