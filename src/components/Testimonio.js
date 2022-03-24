import React from 'react';
import '../stylesheets/Testimonio.css';

const Testimonio = (props)=>{
    return(
        <div className='contenedor-testimonio'>
            <img
                className='imagen-testimonio'
                src={require(`../img/person${props.imagen}.png`)}//Esta es una de las formas con las que nosotros importamos una imagen, con el metodo require.
                alt='Foto de Emma'
            />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'><b>{props.nombre}</b> en {props.pais}</p>
                <p className='cargo-testimonio'>{props.cargo} en <b>{props.empresa}</b></p>
                <p className='texto-testimonio'>"{props.testimonio}"</p>
            </div>
        </div>
    );
};

export default Testimonio;