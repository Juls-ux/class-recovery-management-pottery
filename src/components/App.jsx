import { useState } from 'react'

import { Routes, Route } from 'react-router';

import Home from './pages/Home';
import GestionAlumnas from './pages/GestionAlumnas'
import Alumnas from './pages/Alumnas';
import Calendario from './pages/Calendario';
import Enlaces from './layout/enlaces';
import '../styles/App.scss'
import dataJson from '../data/alumnos.json'



function App() {  

  const [alumnas, setAlumnas]= useState(dataJson);

  return (
    <main>

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="GestionAlumnas" element={<GestionAlumnas alumnas={alumnas} />} />

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
