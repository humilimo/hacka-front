import { useState } from 'react'
import './App.css'
import RecolheFlow from './pages/register/register'
import Home from './pages/home/home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <RecolheFlow /> */}
      <Home />
    </>
  )
}

export default App
