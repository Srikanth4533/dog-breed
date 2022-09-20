

import { Container } from 'App.css'
import { GlobalStyles } from 'App.styles'
import { Home } from 'pages'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from 'utils'

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Container>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App