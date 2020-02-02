/**
 * Created by Adam Bohannon - 2020
 * https://github.com/abohannon
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'emotion-theming'
import { theme } from './theme'
import './index.css'
import App from './components/App'

const WrappedApp = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)

ReactDOM.render(<WrappedApp />, document.getElementById('root'))
