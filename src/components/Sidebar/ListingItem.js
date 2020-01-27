import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  background-color: ${({ activeLocation, locationId }) => {
    return activeLocation === locationId ? '#f8f8f8' : '#fff'
  }};
  display: block;
  border-bottom: 1px solid #eee;
  padding: 10px;
  text-decoration: none;
`

const Name = styled.a`
  display: block;
  color: ${props => props.theme.gray300};
  font-weight: 700;
`

const ListingItem = ({
  properties: { name, address, city, id, distance },
  activeLocation,
  onClick,
}) => {
  let roundedDistance
  if (distance) {
    roundedDistance = Math.round(distance * 100) / 100
  }

  return (
    <Wrapper locationId={id} activeLocation={activeLocation}>
      <Name href="#" onClick={onClick}>
        {name}
      </Name>
      <div>{address}</div>
      <div>{city}</div>
      {distance && (
        <p>
          <strong>{`${roundedDistance} miles away`}</strong>
        </p>
      )}
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
