
import Header from "../layout/Header";
import { useState } from "react";

function Home({login}) {


    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    
    const handlerSubmit = (ev)=>{
        ev.preventDefault();
        const data = { email, contraseña: password }; 
        login(data);
    };

    return (
        
        <>

        <div className="login">
            <section className='header-section'>      
            </section>

            <form className='login-section'>
            <img className="login__img" src="src/images/rotas.png" alt="logo-rotas" />
            <h1 className='header-section__h1'>
                    Bienvenid@ a Rotas 🖤✨
                </h1>
                <p className='login-section__parrafo'>Accede a tu perfil de usuario y recupera tu clase siempre que puedas</p>

                <label htmlFor="nombre">E-Mail:</label>
                <input className='login-section__user-data' type="text" id="nombre" name="nombre" placeholder="ejemplo@gmail.com" />

                <label htmlFor="passwort">Contraseña:</label>
                <input className='login-section__user-data' type="password" id="contraseña" name="contraseña" placeholder="*****" value={contraseña}/>

                <input className='login-section__login-btn' type='submit' onSubmit={handlerSubmit}/>
               

            </form>
        </div>
        </>
    )
}

export default Home;