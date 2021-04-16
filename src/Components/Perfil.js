import React, { Component } from 'react';



  function Perfil (props) {
return ( 

    <div className="Perfil">


<h2> {props.mostrarPerfil.name.last}</h2>
<img className="imgPerfil" alt={props.mostrarPerfil.image}/>
<h2> {props.mostrarPerfil.name.first}</h2>
<p> location:{props.mostrarPerfil.location}  </p>
    <p> Email:{props.mostrarPerfil.email}  </p>
<p> date: {props.mostrardate.dob.date}</p>
// DESPUES BORRAR EL DATE

    </div>
)

  }
  
  export default Perfil; 