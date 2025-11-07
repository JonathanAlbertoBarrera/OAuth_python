import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Welcome from './components/Welcome'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
