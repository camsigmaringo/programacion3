
import './App.css';
import Header from './Components/Header' ;
import Footer from './Components/Footer';
// import Perfil from './components/Perfil';
import React, {Component} from "react";

class App extends Component {

  constructor (props){
    super(props);
    this.state={
      listaPersonas: [],

    }
  }
componentDidMount(){
fetch ("https://randomuser.me/api/?results=20")
  .then (r=> r.json())
  .then ((resultado) => {
    console.log(resultado)
    this.setState({listaPersonas: resultado})
    
  })



}

render(){
console.log(this.state.listaPersonas.results[])
 return (//<></>
  <p>{this.state.listaPersonas[0].name.first}</p>
    // <div className="App">
    //   <header className="App-header">

    //     <p>
    //      Users 
    //     </p>
    
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //     </a>
    //   </header>

    // </div>
  
//Foto del contacto.
// Apellido
// Nombre del contacto.
// Email.
// Fecha de nacimiento y edad entre paréntesis.

//   <div className="App">
//        <Header/>
//        <div className="tarjetas">
   
//     </div>
//         <Footer/>
//     </div>
   );
  
}// llave de la clase





}
export default App;
