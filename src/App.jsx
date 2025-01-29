import ImagenFrontend from './images/frontend.webp';
import './styles/App.scss'

function traducir(mensaje, idioma) {
  if( idioma === 'en') {
    if( mensaje === 'Hola') {
      return 'Hello'
    }
    else if( mensaje === 'Registrate') {
      return 'Sign in'
    }
  }
  else if( idioma === 'ro' ) {
    if( mensaje === 'Hola') {
      return 'Hello'
    }
    else if( mensaje === 'Registrate') {
      return 'Sign in'
    }
  }
  return mensaje;
}


function App() {

  const textoSaludo = traducir('Hola', 'es');

  const titleText = 'Título';

  const header = <header>
    <h1>Este es el título del Header</h1>
  </header>;

  return (
    <div>
      {header}
      <h1>{titleText}</h1>
      <p>Párrafo</p>
      <p>{  traducir('Registrate', 'en')  }</p>
      <img src={ImagenFrontend} alt="Dibujo de una pantalla con un pincel" />

      <div className="main_image"></div>
    </div>
  )
}

export default App
