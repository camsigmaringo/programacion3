
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
render(){
  const listaPersonas = this.state.listaPersonas
  if(listaPersonas.length > 0){
    console.log(this.state.listaPersonas[0].name.first)
  }
    
 return (
<div className='contenido'> 

    <p>{"hola"}</p>
    <input  class="uk-button uk-button-default " id='cantidadTarjetas' placeholder='Ingresa la cantidad deseada'/>
    <button onClick= {(event)=> this.agregarTarjeta()}>Agregar Personas</button>



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
