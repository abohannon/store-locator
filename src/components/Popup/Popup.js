import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'
import styled from '@emotion/styled'
import { theme } from '../../theme'

const Name = styled.div`
  background: ${props => props.theme.blue100};
  color: ${props => props.theme.gray300};
  padding: ${props => props.theme.spacing(1)};
  font-size: 1.2rem;
  min-width: 120px;
`

const Address = styled.div`
  padding: ${props => props.theme.spacing(1)};
  color: ${props => props.theme.gray200};
`

const Popup = ({ name, address }) => {
  return (
    <ThemeProvider theme={theme}>
      <Name>{name}</Name>
      <Address>{address}</Address>
    </ThemeProvider>
  )
}

Popup.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
}

export default React.memo(Popup)
