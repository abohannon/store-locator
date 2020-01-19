import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  background-color: ${({ activeLocation, locationId }) => {
    return activeLocation === locationId ? '#eee' : '#fff'
  }};
  display: block;
  border-bottom: 1px solid #eee;
  padding: 10px;
  text-decoration: none;
`

const Name = styled.a`
  display: block;
  color: #00853e;
  font-weight: 700;
`

const ListingItem = ({
  properties: { name, address, city, id },
  activeLocation,
  onClick,
}) => {
  return (
    <Wrapper locationId={id} activeLocation={activeLocation}>
      <Name href="#" onClick={onClick}>
        {name}
      </Name>
      <div>{address}</div>
      <div>{city}</div>
    </Wrapper>
  )
}

ListingItem.propTypes = {
  properties: PropTypes.object,
}

ListingItem.defaultProps = {
  properties: {},
}

export default ListingItem
