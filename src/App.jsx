import { useState } from 'react'
import Routes from './routes/Routes'
import { ContextProvider } from './components/Context/Context'

function App() {

  return (
    <>
      <ContextProvider>
        <Routes/>
      </ContextProvider>
    </>
  )
}

export default App

