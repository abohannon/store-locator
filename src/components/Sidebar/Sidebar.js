import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import ListingItem from './ListingItem'
import { flyToLocation, createPopup } from '../../vendor/mapbox'

const Wrapper = styled.div`
  width: 33.3333%;
  padding: 20px;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  border-right: 1px solid rgba(0, 0, 0, 0.25);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`

const Heading = styled.div`
  background: #fff;
  border-bottom: 1px solid #eee;
  height: 60px;
  line-height: 60px;
  padding: 0 10px;
`

const Listings = styled.div`
  height: 100%;
  overflow: auto;
  padding-bottom: 60px;
`

const Sidebar = ({ map, locations, activeLocation, setActiveLocation }) => {
  const onListingItemClick = currentLocation => {
    flyToLocation(currentLocation, map)
    createPopup(currentLocation, map)
    setActiveLocation(currentLocation.properties.id)
  }

  return (
    <Wrapper>
      <Heading>
        <h1>Participating shops</h1>
      </Heading>
      <Listings>
        {locations.map((location, i) => {
          return (
            <ListingItem
              key={location.properties.name}
              activeLocation={activeLocation}
              properties={location.properties}
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

Sidebar.propTypes = {
  locations: [],
}

export default Sidebar
