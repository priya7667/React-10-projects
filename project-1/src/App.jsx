import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navigation/>
        <Hero/>
        
      
        </div>
    </>
  )
}

export default App
