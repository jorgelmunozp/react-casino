import logo from './images/logo.png';
import './App.css';

import React, { useState } from 'react';

import Juego1 from './Juego1';
import Juego2 from './Juego2';

import { FaCoins,FaMoneyBillAlt } from 'react-icons/fa';

import datos from './datos/datos.json';
import { Request } from 'node-fetch';


const fetch = require('node-fetch');                //Libreria fetch para leer API JSON  de la base de datos
fetch('./datos/datos.json')                       //Leer API REST tabla INVENTARIO objeto JSON Base de datos
    .then(response => response.json())
    .then(data => console.log(data))

export const users = {
      "nombre": "Mariana",
      "credito": 3000000,
      "acumulado":500,
      "sietes": {
        "apuesta": 0,
        "ganancia": 0
      }, 
      "videopoker": {
        "apuesta": 0,
        "ganancia": 0
      }
};


new Request('./datos/datos.json', {
  method: 'PUT',
  headers: {
    'Accept': 'application/json',
    "Content-type": "application/json"
  },
  body: JSON.stringify({
      "nombre": "Mariana",
      "credito": 3000000,
      "acumulado":500,
      "sietes": {
        "apuesta": 0,
        "ganancia": 0
      }, 
      "videopoker": {
        "apuesta": 0,
        "ganancia": 0
      }
  })
})
// .then(response => response.json())
// .then(response => console.log('Success:', response));


const juegoopcion = 1;
const dinero = datos.credito;
const dineroAcumulado = datos.acumulado;


function App() {
  const [juego, setJuego] = useState(juegoopcion);

  const [credito,setCredito] = useState(dinero);
  const [acumulado,setAcumulado] = useState(dineroAcumulado);  

  const formatterPeso = new Intl.NumberFormat('es-CO', {   //Formato moneda $ pesos Colmbianos
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className='App-header-div'>
          <table className='App-tabla-credito'>
            <tbody>
              <tr>
                <td><h1><FaMoneyBillAlt className='iconoBilleteTablero'/>{formatterPeso.format(credito)}</h1></td>
                <td><h1><FaCoins className='iconoMonedaTablero'/> {formatterPeso.format(acumulado)}</h1></td>
              </tr>
            </tbody>
          </table>
          <table className='App-tabla-logo'>
            <tbody>
              <tr>
                <td><img src={logo} className="App-logo" alt="logo" /></td>
                <td>&nbsp;</td>
                <td><h1 id='titulo'>Casino</h1></td>
              </tr>
            </tbody>
          </table>
          <nav className='App-nav'>
            <button onClick={() => setJuego(1)} className='App-nav-item'>póker</button>
            <button onClick={() => setJuego(2)} className='App-nav-item'>frutas</button>
          </nav>
        </div>
      </header>
      <body className="App-body">
        <Juego juego={juego} credito={credito} setCredito={setCredito} acumulado={acumulado} setAcumulado={setAcumulado}/>
      </body>
    </div>
  );
}


const Juego = ({juego,credito,setCredito,acumulado,setAcumulado}) => {        //Componente para elegir juego a renderizar
  if(juego === 1){
    return <Juego1 credito={credito} setCredito={setCredito} acumulado={acumulado} setAcumulado={setAcumulado}/>;
  }else if(juego === 2){
    return <Juego2 credito={credito} setCredito={setCredito} acumulado={acumulado} setAcumulado={setAcumulado}/>;
  }
}




export default App;


