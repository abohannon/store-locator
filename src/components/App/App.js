import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Map from '../Map'
import Sidebar from '../Sidebar'
import Icon from '../Icon'
import {
  createMap,
  addMarkers,
  loadMap,
  loadGeocoder,
  createGeoJson,
} from '../../vendor/mapbox'
import { shops } from '../../locationData'
import 'mapbox-gl/dist/mapbox-gl.css'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
import './app.css'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  @media (max-width: 420px) {
    flex-direction: column;
  }
`

const App = () => {
  const [locations, setLocations] = useState(undefined)
  const [activeLocation, setActiveLocation] = useState(null)
  const [map, setMap] = useState(null)

  const fetchLocations = async () => {
    const locations = await createGeoJson()
    setLocations(locations)
    setMap(createMap('map-container'))
  }

  useEffect(() => {
    fetchLocations()
  }, [])

  useEffect(() => {
    if (locations) {
      const callback = () => {
        addMarkers(locations, map, Icon, setActiveLocation)
      }

      loadMap(locations, map, callback)
      loadGeocoder(locations, map, setLocations)
    }
  }, [map])

  return (
    <Wrapper id="app" class="app">
      <Sidebar
        title="Participating shops"
        map={map}
        locations={locations && locations.features}
        activeLocation={activeLocation}
        setActiveLocation={setActiveLocation}
      />
      <Map map={map} />
    </Wrapper>
  )
}

export default App
