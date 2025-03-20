
import FormRecuperar from "../Formrecuperar";
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
                        <section>
                            <h1 className='header-section__h1'> Bienvenid@ {user.nombre} 🖤✨ </h1>
                            <p className="alumnas__text">{user.email}</p>
                        </section>

                        :
                        <h1 className='header-section__h1'> Bienvenid@ a Rotas 🖤✨ </h1>
                    }

                    {user ? <Link to="/Alumnas" className='login-section__parrafo'>Tu perfil</Link>
                        :
                        <p className='login-section__parrafo'>Accede a tu perfil de usuario y recupera tu clase siempre que puedas</p>
                    }

                    {user ?
                        <section>

                            <FormRecuperar user={user} />
                        </section>
                        :

                        <>
                            <label htmlFor="nombre">E-Mail:</label>
                            <input className='login-section__user-data' type="text" id="nombre" name="nombre" placeholder="ejemplo@gmail.com" onChange={(e) => setEmail(e.target.value)} />

                            <label htmlFor="passwort">Contraseña:</label>
                            <input className='login-section__user-data' type="text" id="contraseña" name="contraseña" placeholder="*****" onChange={(e) => setContraseña(e.target.value)} />

                            <input className='login-section__login-btn' type='submit' valur="Iniciar Sesión" /></>

                    }


                </form>
            </div>
        </>
    )
}

export default Home;