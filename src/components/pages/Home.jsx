
import Header from "../layout/Header";
import { Link } from "react-router";
import { useState } from "react";

function Home({ login, user, setUset, logout, data }) {


    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');

    const handlerSubmit = (ev) => {
        ev.preventDefault();
        login({ email, contraseña });

    };



    return (

        <>
            <div className="login">
                <section className='header-section'>
                </section>

                <form className='login-section' onSubmit={handlerSubmit}>
                    <img className="login__img" src="src/images/rotas.png" alt="logo-rotas" />

                    {user ?
                        <h1 className='header-section__h1'> Bienvenid@ {user.nombre} 🖤✨ </h1>
                        :
                        <h1 className='header-section__h1'> Bienvenid@ a Rotas 🖤✨ </h1>
                    }

                    {user ? <p className='login-section__parrafo'>Volver a tu perfil</p>
                        :
                        <p className='login-section__parrafo'>Accede a tu perfil de usuario y recupera tu clase siempre que puedas</p>
                    }

                    {user ?
                        
                        <button className='login-section__login-btn'>
                            <Link className="header__nav-link" to="/Alumnas">Recuperar clase</Link>
                        </button>
                        :

                        <>
                        <label htmlFor="nombre">E-Mail:</label>
                        <input className='login-section__user-data' type="text" id="nombre" name="nombre" placeholder="ejemplo@gmail.com" onChange={(e) => setEmail(e.target.value)}/>

                        <label htmlFor="passwort">Contraseña:</label>
                         <input className='login-section__user-data' type="text" id="contraseña" name="contraseña" placeholder="*****"onChange={(e) => setContraseña(e.target.value)}/>

                        <input className='login-section__login-btn' type='submit' valur="Iniciar Sesión"/></>

                    }


                </form>
            </div>
        </>
    )
}

export default Home;