import { useState } from 'react'
import { Dashboard } from './components/Dashboard'
import NavBar from './components/NavBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Dashboard/>
    </>
  )
}

export default App
