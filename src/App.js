
import './App.css';
import Header from './Components/Header' ;
import Footer from './Components/Footer';
import Perfil from './Components/Perfil';
import React, {Component} from "react";

class App extends Component {

  constructor (props){
    super(props);
    this.state={
      listaPersonas: [],

    }
  }
componentDidMount(){
fetch ("https://randomuser.me/api/?results=2")
  .then (r=> r.json())
  .then ((resultado) => {
    console.log(resultado)
    this.setState({listaPersonas: resultado.results})
    
  })
 

}

agregarTarjeta(){
  var cantidad = document.getElementById("cantidadTarjetas").value
 fetch('https://randomuser.me/api/?results='+ cantidad )
 .then(result=> result.json())
 .then(data=>{
  var nuevaLista= this.state.listaPersonas.concat(data.results)
  console.log(nuevaLista)
 this.setState({
   listaPersonas: nuevaLista})
  } )
 }

 borrarPersona(id){
   
  let listaNueva= this.state.listaPersonas.filter(persona=> persona.id !== id)
  
    this.setState({
  listaPersonas: listaNueva
    })
    }

    filtrarNombre(){
      var filtronombre = document.getElementById("nombreFiltro").value
     let resultado= this.state.listaPersonas.filter(persona=> persona.name.first === filtronombre)
    
    this.setState({
    listaPersonas: resultado
     })
    }

    filtrarApellido(){
      var filtroapellido = document.getElementById("apellidoFiltro").value
     let resultado= this.state.listaPersonas.filter(info=> info.name.last === filtroapellido)
    
    this.setState({
    listaPersonas: resultado
     })
   
      }
      filtrarEdad(){
        var filtroedad = document.getElementById("edadFiltro").value
        let resultado= this.state.listaPersonas.filter((info)=>{
          let infoString= info.dob.age.toString()
          return infoString === filtroedad})
      
      this.setState({
      listaPersonas: resultado
       })
      }
render(){
  const listaPersonas = this.state.listaPersonas
  if(listaPersonas.length > 0){
    console.log(this.state.listaPersonas[0].name.first)
  }
    
 return (
<div className='contenido'> 

    
    <input  class="uk-button uk-button-default " id='cantidadTarjetas' placeholder='Ingresa la cantidad deseada'/>
    <button onClick= {(event)=> this.agregarTarjeta()}>Agregar Personas</button>


    <div className="uk-inline">
    {/* <button type="button" style={{margin: "5px"}}>FILTRAR</button> */}
    <div uk-dropdown="pos: right-center">
        <ul className="" style={{listStyle: 'none', padding: 0}}>
            <li><input style={{marginBottom: 15}} id='nombreFiltro' placeholder='Ingresa el nombre'/> 
            <button style={{textAlign:'center'}} onClick= {(event)=> this.filtrarNombre()}>FILTRAR NOMBRE</button>
            </li>
            <li><input style={{marginBottom: 15}} id='apellidoFiltro' placeholder='Ingresa el apellido'/>
            <button style={{textAlign:'center'}} onClick= {(event)=> this.filtrarApellido()}>FILTRAR APELLIDO</button>
            </li>
            <li><input id='edadFiltro' placeholder='Ingresa la edad'/>
            <button style={{textAlign:'center'}} onClick= {(event)=> this.filtrarEdad()}>FILTRAR EDAD</button>
            </li>
          
        </ul>
    </div>
</div>
    {
        //La info del estado es la que se modifica, poreso uso this.state.infoJson
        this.state.listaPersonas.map((persona, idx)=>{
          return <Perfil 

          infoPersona = {persona} key={idx} 


        onDelete={this.borrarPersona.bind(this)} 
          id={persona.id} colorFondo='white'
                 />
        
        })
      }
</div>
  );
  
}// llave de la clase




}




export default App;
