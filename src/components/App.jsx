import { useState } from 'react'

import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Alumnas from './pages/Alumnas';
import Enlaces from './layout/enlaces';
import '../styles/App.scss'


function App() {  
  return (
    <main>

      <Routes>
      <Route path="/" element={<Home />} />
        <Route path='Alumnas' element={<Alumnas />}> </Route>

      </Routes>
      <div>
         <div><Enlaces></Enlaces></div>
      </div>
    </main>


  )
}

export default App
