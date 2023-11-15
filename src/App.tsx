import React from 'react'
import './App.css'
import { MainComponentContextProvider } from './context/mainComponent.context'
import Dashboard from './modules/dashboard'

function App() {
  return (
    <MainComponentContextProvider>
      <div>
        <Dashboard />
      </div>
    </MainComponentContextProvider>
  )
}

export default App
