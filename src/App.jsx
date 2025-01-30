import ImagenFrontend from './images/cabecera-mobile.jpg';


import './styles/App.scss'




function App() {

  return (
    
    <div>   
      <section className='header-section'> 
      <h1 className='header-section__h1'>
      ¡ENHORABUENA!
      </h1>
      <p className='header-section__parrafo'>Ya eres alumna de Rotas Ceramica</p>
      <img src="src/images/logo-paq-2.png" alt="logo-ceramica" />
      <section className='login-section'>
        <p className='login-section__parrafo'>Accede a tu perfil de usuario y recupera tu clase siempre que puedas</p>

        <label htmlFor="nombre">Nombre:</label>
        <input className='login-section__user-data' type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre"/>

        <label htmlFor="passwort">Contraseña:</label>
        <input className='login-section__user-data' type="text"id="passwort" name="passwort" placeholder="Ingresa tu contraseña" />

        <input className='login-section__login-btn' type='submit'  />
      
      </section>
      <a  className="enlaces-temporales" href="perfil-alumnas">Perfil alumnas</a>
      <a className="enlaces-temporales"  href="calendario">Calendario</a>
      </section>

   
    </div>

  )
}

export default App
