import { useState } from 'react'

import { Routes, Route } from 'react-router';
import Header from './layout/Header';
import Home from './pages/Home';
import Alumnas from './pages/Alumnas';
import Calendario from './pages/Calendario';
import Enlaces from './layout/enlaces';
import '../styles/App.scss'


function App() {  
  return (
    <main>

      <Routes>
      <Route path="/" element={<Home />} />
        <Route path='Alumnas' element={<Alumnas />}> </Route>
        <Route path='Calendario' element={<Calendario />}> </Route>

      </Routes>

      <div>
         <div><Enlaces></Enlaces></div>
      </div>
    </main>


  )
}

export default App
