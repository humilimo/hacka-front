import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecolheFlow from './pages/register/register'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RecolheFlow />
    </>
  )
}

export default App
