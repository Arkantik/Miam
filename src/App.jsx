import { useState } from 'react'
// import reactLogo from '/assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from '/src/components/Navbar.jsx'
import RecipeCard from '/src/components/RecipeCard.jsx'
import Login from '/src/components/Login.jsx'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <RecipeCard />
      <Login />
    </div>
  )
}

export default App
