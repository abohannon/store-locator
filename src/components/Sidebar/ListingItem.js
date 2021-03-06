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

const Name = styled.div`
  display: block;
  color: ${props => props.theme.gray300};
  font-weight: 700;
  cursor: pointer;
`

const Distance = styled.p`
  color: ${props => props.theme.gray200};
`

const ListingItem = ({
  properties: { name, address, city, state, country, distance },
  activeLocation,
  locationId,
  onClick,
}) => {
  let roundedDistance
  if (distance) {
    roundedDistance = Math.round(distance * 100) / 100
  }

  return (
    <Wrapper locationId={locationId} activeLocation={activeLocation}>
      <Name onClick={onClick}>{name}</Name>
      <div>{address}</div>
      <div>{`${city}, ${state} ${country}`}</div>
      {distance && (
        <Distance>
          <strong>{`${roundedDistance} miles away`}</strong>
        </Distance>
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
