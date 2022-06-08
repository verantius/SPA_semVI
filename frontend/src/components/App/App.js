import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Dashboard from '../Dashboard/Dashboard'
import Preferences from '../Preferences/Preferences'
import Login from '../Login/Login'
//

function App() {
  
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    
    <Router>
    <div className='container'>
    <h1>Aplikacja</h1>
      
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/preferences' element={<Preferences />} />
        <Route path='/Login' element={<Login />} />
      </Routes>

      </div>
      </Router>
        
        )
      }
      
      export default App;
      
      // <Route path='/login' element={<Login />} />