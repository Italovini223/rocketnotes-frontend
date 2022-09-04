import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from 'styled-components'
import { SignUp } from './pages/SingUp'

import GlobalStyle from './styles/global'

import theme from './styles/theme'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> 
      <GlobalStyle />
      <SignUp />
    </ThemeProvider>
  </React.StrictMode> 
)
