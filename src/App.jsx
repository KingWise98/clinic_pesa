import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        {/* Main route for the ClinicPesa app */}
        <Route path="/" element={<Home />} />
        
        {/* Optional: Keep the original Vite+React demo at a different route */}
        <Route path="/demo" element={
          <>
            <div>
              <a href="https://vite.dev" target="_blank">
                <img src="/vite.svg" className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src="/react.svg" className="logo react" alt="React logo" />
              </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.jsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App