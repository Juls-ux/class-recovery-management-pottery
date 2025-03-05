
import Header from "../layout/Header";

function Home() {
    return (
        
        <> <Header/>

        <div className="login">
            <section className='header-section'>
          
            
             
            </section>

            <section className='login-section'>
            <h1 className='header-section__h1'>
                    ¡Bienvenid@ a Rotas!
                </h1>
                <p className='login-section__parrafo'>Accede a tu perfil de usuario y recupera tu clase siempre que puedas</p>

                <label htmlFor="nombre">E-Mail:</label>
                <input className='login-section__user-data' type="text" id="nombre" name="nombre" placeholder="ejemplo@gmail.com" />

                <label htmlFor="passwort">Contraseña:</label>
                <input className='login-section__user-data' type="text" id="passwort" name="passwort" placeholder="*****" />

                <input className='login-section__login-btn' type='submit' />
                <img className="login__img" src="src/images/logo-paq-2.png" alt="logo-ceramica" />

            </section>
        </div>
        </>
    )
}

export default Home;