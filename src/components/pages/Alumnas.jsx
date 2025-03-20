import React, { useState } from "react";
import avatar from "../../images/avatar-alumnas.jpg";
import { Form, Link } from "react-router";
import Formrecuperar from "../Formrecuperar";


function Alumnas({ user, showForm, setShowForm, handlerRecuperar, login, logout }) {

    return (

        <>
            <div className="hero">

            </div>

            <div className="alumnas">
                <img className="alumnas__avatar" src={avatar} alt="avatar-alumnas" />
                {user && <h2 className="alumnas__h2">{user.nombre} {user.apellidos}</h2>}
                {user &&  <p className="alumnas__text">{user.email}</p>}
            </div>

            <div className="horario-section">
            <h3 className="horario-section__h3">Día/s:</h3>
            {user &&  <p className="alumnas__text">{user.dia}</p>}

            {user && <h3 className="horario-section__h3">Horario:</h3>}
            {user &&  <p className="alumnas__text">{user.horario}</p>}

            </div>

            {<Formrecuperar user={user}/>}
        </>



    );
}

export default Alumnas;