import React, { Component } from 'react';

class Perfil extends Component {
  constructor(props){
    super(props);
  this.state={
    display:"none"
  }
  }

  verDetalle= (mostrar)=> {
    this.setState({
        display: mostrar
    })
  
    }

render(){
  console.log(this.props)
  const props = this.props
return (

    <div className="Perfil" id={this.props.infoPersona.login.uuid} key={props.key}> 


<h2> {props.infoPersona.name.first}</h2>


<img className="imgPerfil" src={props.infoPersona.picture.medium} alt={props.infoPersona.picture.medium}/>

{/* <p> location:{props.mostrarPerfil.location}  </p> */}
    <p> Email:{props.infoPersona.email}  </p>
<p> date: {props.infoPersona.dob.date}</p>
<p> edad: {props.infoPersona.dob.age}</p>
<button  onClick= {(event)=>this.verDetalle("block")}> VER DETALLE </button>
<div  style={{display: this.state.display}}>
                    <p>Calle y Número:  {this.props.infoPersona.location.street.number}  {this.props.infoPersona.location.street.name} </p>
                    <p>Ciudad y Estado:  {this.props.infoPersona.location.city} <br></br>
                    {this.props.infoPersona.location.state}</p>
                    <p>País: {this.props.infoPersona.location.country}</p>
                    <p>Codigo Postal: {this.props.infoPersona.location.postcode}</p>
                    <p>Registrado:{this.props.infoPersona.registered.date}</p>
                    <p>Teléfono: {this.props.infoPersona.phone}</p>
                </div>

                <button
                onClick= {this.props.onDelete.bind(this, this.props.id)}
                >BORRAR</button>
    </div>
)

}





}

  //function Perfil (props) {


    
    
    
  
  export default Perfil; 