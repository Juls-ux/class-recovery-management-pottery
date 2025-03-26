import { Link } from "react-router";
import { useState } from "react";
import image from "../../images/rotas.png"; // Rutas relativas dentro de src

function Home({ login, user, FormRecuperar, enviarSolicitud, mensaje, setMensaje, fechaSeleccionada, setFechaSeleccionada }) {
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');

    const handlerSubmit = (ev) => {
        ev.preventDefault();
        login({ email, contraseña });
    };

    return (
        <>
            <div className="login">
                <section className="header-section">
                    {/* Aquí podrías poner cualquier contenido relacionado con la cabecera */}
                </section>

                {user ? (
                    <form className="login-section" onSubmit={enviarSolicitud}>
                        <img className="login__img" src={image} alt="logo-rotas" />
                        
                        <section>
                            <h1 className="header-section__h1">
                                Bienvenid@ {user.nombre} 🖤✨
                            </h1>
                            <p className="alumnas__text">{user.clase_asignada?.dia} {user.clase_asignada?.horario}</p>
                            <p className="alumnas__text">{user.email}</p>
                        </section>

                        <Link to="/Alumnas" className="login-section__parrafo">
                            Tu perfil
                        </Link>

                        <FormRecuperar
                            user={user} 
                            enviarSolicitud={enviarSolicitud}
                            mensaje={mensaje}
                            setMensaje={setMensaje}
                            fechaSeleccionada={fechaSeleccionada}
                            setFechaSeleccionada={setFechaSeleccionada}
                        />
                    </form>
                ) : (
                    <form className="login-section" onSubmit={handlerSubmit}>
                        <img className="login__img" src={image} alt="logo-rotas" />

                        <label htmlFor="nombre">E-Mail:</label>
                        <input
                            className="login-section__user-data"
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="ejemplo@gmail.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label htmlFor="contraseña">Contraseña:</label>
                        <input
                            className="login-section__user-data"
                            type="password"
                            id="contraseña"
                            name="contraseña"
                            placeholder="*****"
                            onChange={(e) => setContraseña(e.target.value)}
                        />

                        <input
                            className="login-section__login-btn"
                            type="submit"
                            value="Iniciar Sesión"
                        />
                    </form>
                )}
            </div>
        </>
    );
}

export default Home;