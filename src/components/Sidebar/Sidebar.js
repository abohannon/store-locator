import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import ListingItem from './ListingItem'
import Popup from '../Popup'
import { flyToLocation, createPopup } from '../../vendor/mapbox'

const Wrapper = styled.div`
  width: 33.3333%;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  border-right: 1px solid rgba(0, 0, 0, 0.25);
  @media (max-width: 420px) {
    height: 100%;
    width: 100%;
    top: 66.66666%;
  }
`

const Heading = styled.div`
  background: ${props => props.theme.gray300};
  border-bottom: 1px solid ${props => props.theme.gray100};
  line-height: 40px;
  padding: 8px;
  font-size: 1.5rem;
  color: ${props => props.theme.white};
`

const Listings = styled.div`
  height: 100%;
  overflow: auto;
  padding-bottom: 60px;
  box-sizing: border-box;
  line-height: 24px;
  color: ${props => props.theme.gray200};
`

const Sidebar = ({
  title,
  map,
  locations = [],
  activeLocation,
  setActiveLocation,
}) => {
  const onListingItemClick = currentLocation => {
    flyToLocation(currentLocation, map)
    createPopup(currentLocation, map, Popup)
    setActiveLocation(currentLocation.id)
  }

  return (
    <Wrapper>
      <Heading>{title}</Heading>
      <Listings>
        {locations.map((location, i) => {
          return (
            <ListingItem
              key={location.properties.name}
              activeLocation={activeLocation}
              properties={location.properties}
              locationId={location.id}
              onClick={() => onListingItemClick(location)}
            />
          )
        })}
      </Listings>
    </Wrapper>
  )
}

Sidebar.propTypes = {
  locations: PropTypes.array,
}

Sidebar.defaultProps = {
  locations: [],
}

export default Sidebar
