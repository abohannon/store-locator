import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Wrapper = styled.div`
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

const ListingItem = ({ properties: { name, address, city }, onClick }) => {
  return (
    <Wrapper>
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
