/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx, css } from '@emotion/core'

const root = css`
  background-color: orangered;
`

const Listing = props => {
  return <div css={root}>LISTING</div>
}

Listing.propTypes = {}

export default Listing
