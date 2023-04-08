import React from "react";
import myImg from "../../imagenes/about.jpg"
import style from './About.module.css'

export default function About(){
    return(
        <div className={style.div}>
            <h2>Acerca del Proyecto</h2>
            <div>
                <img src={myImg } alt="Luis Carlos" />
                <div className={style.div2}>
                <p> Proyecto individual "foods" hecho por Luis Carlos Bastidas Trejo</p>
                </div>
            </div>
        </div>
    )
}