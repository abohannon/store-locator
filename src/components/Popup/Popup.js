import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'
import styled from '@emotion/styled'
import { theme } from '../../theme'

const Wrapper = styled.div`
  padding: ${props => props.theme.spacing(1)};
  color: ${props => props.theme.gray200};
`

const Name = styled.div`
  background: ${props => props.theme.gray300};
  color: ${props => props.theme.white};
  padding: ${props => props.theme.spacing(1)};
  font-size: 1.2rem;
  min-width: 120px;
`

const Address = styled.div`
  color: ${props => props.theme.gray200};
`

const Popup = ({
  name,
  address,
  city,
  state,
  country,
  phone,
  googleMapsUrl,
  instagramUrl,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Name>{name}</Name>
      <Wrapper>
        <Address>{address}</Address>
        <div>{`${city} ${state} ${country}`}</div>
        <div>{phone}</div>
        <div>
          <a href={googleMapsUrl} target="_blank">
            Directions
          </a>
        </div>
        {instagramUrl && (
          <div>
            <a href={instagramUrl} target="_blank">
              Instagram
            </a>
          </div>
        )}
      </Wrapper>
    </ThemeProvider>
  )
}

Popup.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
}

export default React.memo(Popup)
