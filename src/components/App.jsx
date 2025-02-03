import { useState } from 'react'
import Home from './pages/Home';
import Alumnas from './pages/Alumnas';
import Enlaces from './layout/enlaces';
import {Routes, Route} from 'react-router';
import '../styles/App.scss'


function App() {


  return (
    <main>
      <div><Home></Home></div>

      <Routes>
        <Route path='Login' element={<section> <h3>Login</h3></section>}>  </Route>
        <Route path='Alumnas' element={<Alumnas/>}> </Route>
      
      </Routes>
    <div>   
      

      <div><Enlaces></Enlaces>
        </div>  
    </div>
    </main>


  )
}

export default App
