import mp3Mayor from './audio/mayor.mp3';
import mp3Triple from './audio/triple.mp3';
import mp3Cuadruple from './audio/cuadruple.mp3';
import mp3Coin from './audio/coin.mp3';
import './juego1.css';

import React, { useState } from 'react';

import { FaCoins,FaMoneyBillAlt } from 'react-icons/fa';
import { GiTwoCoins } from 'react-icons/gi';
import { RiCoinFill } from 'react-icons/ri';

const bet = 10;                                                        // Apuesta inicial
const colorWin = 'rgb(255,255,255,0.7)';
const alertaInicial = "apuesta y buena suerte!";                       // Alerta para los mensajes del juego
const timeout = 2000;                                                  // Tiempo de reactivación de los controles después de una ganancia

const cartasLista =[[['A','♠','black'],['2','♠','black'],['3','♠','black'],['4','♠','black'],['5','♠','black'],['6','♠','black'],['7','♠','black'],['8','♠','black'],['9','♠','black'],['10','♠','black'],['J','♠','black'],['Q','♠','black'],['K','♠','black']],
                    [['A','♥','red'],['2','♥','red'],['3','♥','red'],['4','♥','red'],['5','♥','red'],['6','♥','red'],['7','♥','red'],['8','♥','red'],['9','♥','red'],['10','♥','red'],['J','♥','red'],['Q','♥','red'],['K','♥','red']],
                    [['A','♣','black'],['2','♣','black'],['3','♣','black'],['4','♣','black'],['5','♣','black'],['6','♣','black'],['7','♣','black'],['8','♣','black'],['9','♣','black'],['10','♣','black'],['J','♣','black'],['Q','♣','black'],['K','♣','black']],
                    [['A','♦','red'],['2','♦','red'],['3','♦','red'],['4','♦','red'],['5','♦','red'],['6','♦','red'],['7','♦','red'],['8','♦','red'],['9','♦','red'],['10','♦','red'],['J','♦','red'],['Q','♦','red'],['K','♦','red']]]; 

const formatterPeso = new Intl.NumberFormat('es-CO', {   //Formato moneda $ pesos Colmbianos
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0
});
const formatterMiles = new Intl.NumberFormat('es-CO', {   //Formato miles para cantidades
  style: 'decimal',
  minimumFractionDigits: 0
});


const Juego1 = ({credito,setCredito,acumulado,setAcumulado}) => {  
  const [ganancia,setGanancia] = useState(0);
  let [apuesta,setApuesta] = useState(bet);

  const [checkedjuego1, setCheckedjuego1] = useState(false);
  const [checkedjuego2, setCheckedjuego2] = useState(false);
  const [checkedjuego3, setCheckedjuego3] = useState(false);

  const [cartas,setCartas] = useState(cartasLista);
  const [carta,setCarta] = useState([cartas[Math.floor(Math.random()*cartasLista.length)][Math.floor(Math.random()*cartasLista[0].length)],
                                     cartas[Math.floor(Math.random()*cartasLista.length)][Math.floor(Math.random()*cartasLista[0].length)],
                                     cartas[Math.floor(Math.random()*cartasLista.length)][Math.floor(Math.random()*cartasLista[0].length)],
                                     cartas[Math.floor(Math.random()*cartasLista.length)][Math.floor(Math.random()*cartasLista[0].length)],
                                     cartas[Math.floor(Math.random()*cartasLista.length)][Math.floor(Math.random()*cartasLista[0].length)]]);
                                         

  const [colorItemWin,setColorItemWin] = useState([['transparent','transparent','transparent','transparent','transparent']]);
  const [alerta, setAlerta] = useState(alertaInicial);                  // Alert message
  const [disabled, setDisabled] = useState(false);                      // Disabled button 

  let sonidoMayor = new Audio(mp3Mayor);
  let sonidoTriple = new Audio(mp3Triple);
  let sonidoCuadruple = new Audio(mp3Cuadruple);
  let sonidoCoin = new Audio(mp3Coin);
  const audioMayor = () => {
    sonidoMayor.play();
  };
  const audioTriple = () => {
    sonidoTriple.play();
  };
  const audioCuadruple = () => {
    sonidoCuadruple.play();
  };
  const audioCoin = () => {
    sonidoCoin.play();
  };

  return (
    <div className="App">
        <div className='App-body-divTablero'>
          <table border="1" className='tabla-credito'>
            <tbody>
              <tr>
                <td>bote <FaMoneyBillAlt className='iconoBilleteTablero'/> {formatterPeso.format(credito)}</td>
                <td>acumulado <FaCoins className='iconoMonedaTablero'/> {formatterMiles.format(acumulado)}</td>
              </tr>
            </tbody>
          </table> 
        </div>
        <div id='videopoker' className='App-body-divJuego'>
          <div className="container-juego">
            <div className="container">
              <table className='Tabla-juego'>
                <tbody>
                  <tr>
                    <td className='itemVideopoker' style={{'backgroundColor': colorItemWin[0],'color':carta[0][2],'textAlign':'left'}}>{carta[0][0]}</td>
                    <td className='espacio'></td>
                    <td className='itemVideopoker' style={{'backgroundColor': colorItemWin[1],'color':carta[1][2],'textAlign':'left'}}>{carta[1][0]}</td>
                    <td className='espacio'></td>
                    <td className='itemVideopoker' style={{'backgroundColor': colorItemWin[2],'color':carta[2][2],'textAlign':'left'}}>{carta[2][0]}</td>
                    <td className='espacio'></td>
                    <td className='itemVideopoker' style={{'backgroundColor': colorItemWin[3],'color':carta[3][2],'textAlign':'left'}}>{carta[3][0]}</td>
                    <td className='espacio'></td>
                    <td className='itemVideopoker' style={{'backgroundColor': colorItemWin[4],'color':carta[4][2],'textAlign':'left'}}>{carta[4][0]}</td>
                  </tr>
                  <tr>
                    <td className='itemVideopoker' style={{'backgroundColor': colorItemWin[0],'color':carta[0][2]}}>{carta[0][1]}</td>
                    <td className='espacio'></td>
                    <td className='itemVideopoker' style={{'backgroundColor': colorItemWin[1],'color':carta[1][2]}}>{carta[1][1]}</td>
                    <td className='espacio'></td>
                    <td className='itemVideopoker' style={{'backgroundColor': colorItemWin[2],'color':carta[2][2]}}>{carta[2][1]}</td>
                    <td className='espacio'></td>
                    <td className='itemVideopoker' style={{'backgroundColor': colorItemWin[3],'color':carta[3][2]}}>{carta[3][1]}</td>
                    <td className='espacio'></td>
                    <td className='itemVideopoker' style={{'backgroundColor': colorItemWin[4],'color':carta[4][2]}}>{carta[4][1]}</td>
                  </tr>
                  <tr>
                    <td className='itemVideopoker' style={{'backgroundColor': colorItemWin[0],'color':carta[0][2],'textAlign':'right'}}>{carta[0][0]}</td>
                    <td className='espacio'></td>
                    <td className='itemVideopoker' style={{'backgroundColor': colorItemWin[1],'color':carta[1][2],'textAlign':'right'}}>{carta[1][0]}</td>
                    <td className='espacio'></td>
                    <td className='itemVideopoker' style={{'backgroundColor': colorItemWin[2],'color':carta[2][2],'textAlign':'right'}}>{carta[2][0]}</td>
                    <td className='espacio'></td>
                    <td className='itemVideopoker' style={{'backgroundColor': colorItemWin[3],'color':carta[3][2],'textAlign':'right'}}>{carta[3][0]}</td>
                    <td className='espacio'></td>
                    <td className='itemVideopoker' style={{'backgroundColor': colorItemWin[4],'color':carta[4][2],'textAlign':'right'}}>{carta[4][0]}</td>
                  </tr>
                </tbody>
              </table> 
            </div>
          </div>
          <br/>
          <table border="1" className='tabla-credito'>
            <tbody>
              <tr>
                <td>crédito <FaCoins className='iconoMonedaTablero'/> {formatterMiles.format(credito/10)}</td>
                <td>apuesta <RiCoinFill className='iconoMonedaTablero'/> {<input onChange={(e) => {apuesta=e.target.value; setApuesta(apuesta)}} type={'number'} defaultValue={apuesta} min={10} max={100} step={10} autoComplete='off'/>}</td>
                <td>ganancia <GiTwoCoins className='iconoMonedaTablero'/> {formatterMiles.format(ganancia)}</td>
              </tr>
            </tbody>
          </table> 
          <table border="1" className='Tabla-apuesta'>
            <tbody>
              <tr>
                <td className='tabla-credito'><label className='cuadro-alerta'>{alerta}</label></td>
                <td className='espacio'></td>
                <td className='tabla-credito'><button type='button' className='boton-jugar' onClick={() => itemAleatorio(cartas,carta,setCarta,credito,setCredito,apuesta,ganancia,setGanancia,acumulado,setAcumulado,setAlerta,setDisabled,colorItemWin,setColorItemWin,audioMayor,audioCuadruple,audioTriple,audioCoin)} disabled={disabled} autoFocus={true}>Jugar</button></td>
                </tr>
            </tbody>
          </table> 
        </div>
    </div>
  );
}


function itemAleatorio(cartas,carta,setCarta,credito,setCredito,apuesta,ganancia,setGanancia,acumulado,setAcumulado,setAlerta,setDisabled,colorItemWin,setColorItemWin,audioMayor,audioCuadruple,audioTriple,audioCoin,item0,item1,item2,item3,item4) {
  if(credito > 0 && credito >= (apuesta*10)){
    credito = credito - (apuesta*10);
    setCredito(credito);
    setAlerta(alertaInicial);
    setGanancia(0);
    audioCoin();

    for(let i=0;i<5;i++){                   //Llena todas las posiciones con items de la lista con posiciones al azar
        carta[i] = cartas[Math.floor(Math.random()*cartasLista.length)][Math.floor(Math.random()*cartasLista[0].length)];
        colorItemWin[i]= '#fff';            //Items con fondo transparente
    }
    setCarta([carta[0],carta[1],carta[2],carta[3],carta[4]]);

    //------------------- Poker (4 cartas iguales) -------------------//
    if(carta[0][0] === carta[1][0] && carta[1][0] === carta[2][0] && carta[2][0] === carta[3][0]){
            gananciaPoker(credito,setCredito,apuesta,ganancia,setGanancia,acumulado,setAcumulado,setAlerta,setDisabled,colorWin,colorItemWin,setColorItemWin,audioCuadruple,0,1,2,3);
    }
    else if(carta[0][0] === carta[1][0] && carta[1][0] === carta[2][0] && carta[2][0] === carta[4][0]){
            gananciaPoker(credito,setCredito,apuesta,ganancia,setGanancia,acumulado,setAcumulado,setAlerta,setDisabled,colorWin,colorItemWin,setColorItemWin,audioCuadruple,0,1,2,4);
    }
    else if(carta[0][0]=== carta[1][0] && carta[1][0] === carta[3][0] && carta[3][0] === carta[4][0]){
            gananciaPoker(credito,setCredito,apuesta,ganancia,setGanancia,acumulado,setAcumulado,setAlerta,setDisabled,colorWin,colorItemWin,setColorItemWin,audioCuadruple,0,1,3,4);
    }
    else if(carta[0][0] === carta[2][0] && carta[2][0]=== carta[3][0] && carta[3][0] === carta[4][0]){
            gananciaPoker(credito,setCredito,apuesta,ganancia,setGanancia,acumulado,setAcumulado,setAlerta,setDisabled,colorWin,colorItemWin,setColorItemWin,audioCuadruple,0,2,3,4);
    }
    else if(carta[1][0] === carta[2][0] && carta[2][0] === carta[3][0] && carta[3][0] === carta[4][0]){
            gananciaPoker(credito,setCredito,apuesta,ganancia,setGanancia,acumulado,setAcumulado,setAlerta,setDisabled,colorWin,colorItemWin,setColorItemWin,audioCuadruple,1,2,3,4);
    }
    //------------------- Ternas (3 cartas iguales)  -------------------//
    else if(carta[0][0] === carta[1][0] && carta[1][0] === carta[2][0]){
            gananciaTerna(credito,setCredito,apuesta,ganancia,setGanancia,acumulado,setAcumulado,setAlerta,setDisabled,colorWin,colorItemWin,setColorItemWin,audioTriple,0,1,2)
    }
    else if(carta[0][0] === carta[1][0] && carta[1][0] === carta[3][0]){
            gananciaTerna(credito,setCredito,apuesta,ganancia,setGanancia,acumulado,setAcumulado,setAlerta,setDisabled,colorWin,colorItemWin,setColorItemWin,audioTriple,0,1,3)
    }
    else if(carta[0][0] === carta[1][0] && carta[1][0] === carta[4][0]){
            gananciaTerna(credito,setCredito,apuesta,ganancia,setGanancia,acumulado,setAcumulado,setAlerta,setDisabled,colorWin,colorItemWin,setColorItemWin,audioTriple,0,1,4)
    }
    else if(carta[1][0] === carta[2][0] && carta[2][0] === carta[3][0]){
            gananciaTerna(credito,setCredito,apuesta,ganancia,setGanancia,acumulado,setAcumulado,setAlerta,setDisabled,colorWin,colorItemWin,setColorItemWin,audioTriple,1,2,3)
    }
    else if(carta[1][0] === carta[2][0] && carta[2][0] === carta[4][0]){
            gananciaTerna(credito,setCredito,apuesta,ganancia,setGanancia,acumulado,setAcumulado,setAlerta,setDisabled,colorWin,colorItemWin,setColorItemWin,audioTriple,1,2,4)
    }
    else if(carta[2][0] === carta[3][0] && carta[3][0] === carta[4][0]){
            gananciaTerna(credito,setCredito,apuesta,ganancia,setGanancia,acumulado,setAcumulado,setAlerta,setDisabled,colorWin,colorItemWin,setColorItemWin,audioTriple,2,3,4)
    }
    //------------------- Royal Flush (10JQKA)  -------------------//
    if(((carta[0][0] === '10' || carta[1][0] === '10' || carta[2][0] === '10' || carta[3][0] === '10' || carta[4][0] === '10' ) && 
        (carta[0][0] === 'J' || carta[1][0] === 'J' || carta[2][0] === 'J' || carta[3][0] === 'J' || carta[4][0] === 'J') && 
        (carta[0][0] === 'Q' || carta[1][0] === 'Q' || carta[2][0] === 'Q' || carta[3][0] === 'Q' || carta[4][0] === 'Q') && 
        (carta[0][0] === 'K' || carta[1][0] === 'K' || carta[2][0] === 'K' || carta[3][0] === 'K' || carta[4][0] === 'K') && 
        (carta[0][0] === 'A' || carta[1][0] === 'A' || carta[2][0] === 'A' || carta[3][0] === 'A' || carta[4][0] === 'A')) &&
       (carta[0][1] === carta[1][1] && carta[1][1] === carta[2][1] && carta[2][1] === carta[3][1] && carta[3][1] === carta[4][1])){
      colorItemWin[0]= colorWin;
      colorItemWin[1]= colorWin;
      colorItemWin[2]= colorWin;
      colorItemWin[3]= colorWin;
      colorItemWin[4]= colorWin;

      audioMayor();

      ganancia = apuesta * 40;
      credito = credito + ganancia;
      acumulado = acumulado + (ganancia/10);
      
      setAlerta("Royal Flush! ganáste " + ganancia + " créditos")
      setColorItemWin(colorItemWin);
      setAcumulado(acumulado);
      setGanancia(ganancia);
      setCredito(credito);
      setDisabled(true);
      setTimeout(() => {
        setDisabled(false);
      }, timeout);
    }
    //------------------- Flush (Palo igual)  -------------------//
    if(carta[0][1] === carta[1][1] && carta[1][1] === carta[2][1] && carta[2][1] === carta[3][1] && carta[3][1] === carta[4][1]){
      colorItemWin[0]= colorWin;
      colorItemWin[1]= colorWin;
      colorItemWin[2]= colorWin;
      colorItemWin[3]= colorWin;
      colorItemWin[4]= colorWin;

      audioCuadruple();

      ganancia = apuesta * 5;
      credito = credito + ganancia;
      acumulado = acumulado + (ganancia/10);
 
      setAlerta("Flush! ganáste " + ganancia + " créditos")
      setColorItemWin(colorItemWin);
      setAcumulado(acumulado);
      setGanancia(ganancia);
      setCredito(credito);
      setDisabled(true);
      setTimeout(() => {
        setDisabled(false);
      }, timeout);
    }
  }
}
// **************************** GANANCIAS ****************************// 
//------------------- Poker (4 cartas iguales) -------------------//
function gananciaPoker(credito,setCredito,apuesta,ganancia,setGanancia,acumulado,setAcumulado,setAlerta,setDisabled,colorWin,colorItemWin,setColorItemWin,audioCuadruple,item0,item1,item2,item3){
  colorItemWin[item0]= colorWin;
  colorItemWin[item1]= colorWin;
  colorItemWin[item2]= colorWin;
  colorItemWin[item3]= colorWin;

  audioCuadruple();

  ganancia = apuesta * 10;
  credito = credito + ganancia;
  acumulado = acumulado + (ganancia/10);
 
  setAlerta("Poker! ganáste " + ganancia + " créditos")
  setColorItemWin(colorItemWin);
  setAcumulado(acumulado);
  setGanancia(ganancia);
  setCredito(credito);
  setDisabled(true);
  setTimeout(() => {
    setDisabled(false);
  }, timeout);
};
//------------------- Ternas (3 cartas iguales)  -------------------//
function gananciaTerna(credito,setCredito,apuesta,ganancia,setGanancia,acumulado,setAcumulado,setAlerta,setDisabled,colorWin,colorItemWin,setColorItemWin,audioTriple,item0,item1,item2){
  colorItemWin[item0]= colorWin;
  colorItemWin[item1]= colorWin;
  colorItemWin[item2]= colorWin;

  audioTriple();

  ganancia = apuesta * 3;
  credito = credito + ganancia;
  acumulado = acumulado + (ganancia/10);

  setAlerta("Terna! ganáste " + ganancia + " créditos")
  setColorItemWin(colorItemWin);
  setAcumulado(acumulado);
  setGanancia(ganancia);
  setCredito(credito);
  setDisabled(true);
  setTimeout(() => {
    setDisabled(false);
  }, timeout);
};



export default Juego1;