import React, { useState } from "react";
import avatar from "../../images/avatar-alumnas.jpg";
import { Form, Link } from "react-router";
import Formrecuperar from "../Formrecuperar";


function Alumnas({ loggedUser, showForm, setShowForm, handlerRecuperar }) {


    return (

        <>
            <div className="hero">

            </div>

            <div className="alumnas">
                <img className="alumnas__avatar" src={avatar} alt="avatar-alumnas" />
                <h2 className="alumnas__h2">{loggedUser.nombre} {loggedUser.apellidos}</h2>
                <p className="alumnas__text">{loggedUser.email}</p>
            </div>

            <div className="horario-section">
                <h3 className="horario-section__h3">Día/s:</h3>
                <p className="alumnas__text">Lunes</p>

                <h3 className="horario-section__h3">Horario:</h3>
                <p className="alumnas__text">17:00 h - 19:00 h</p>



            </div>

            <section className="recupera">
                <button
                    className="recupera__btn"
                    onClick={handlerRecuperar}
                >
                    Recupera una clase 🖤
                </button>
            </section>

            {/* Condicional para mostrar el formulario */}
            {showForm && <Formrecuperar />}
        </>



    );
}

export default Alumnas;