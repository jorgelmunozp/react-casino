import mp3Mayor from './audio/mayor.mp3';
import mp3Triple from './audio/triple.mp3';
import mp3Cuadruple from './audio/cuadruple.mp3';
import mp3Coin from './audio/coin.mp3';
import './juego1.css';

import React, { useState } from 'react';

import { FaCoins,FaMoneyBillAlt } from 'react-icons/fa';
import { GiTwoCoins } from 'react-icons/gi';
import { RiCoinFill } from 'react-icons/ri';

const bet = 10;
const colorWin = 'rgb(255,255,255,0.9)';

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
  //function Juego1({credito,setCredito,acumulado,setAcumulado}) {
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
          <table border="1" className='tablaCredito'>
            <tbody>
            <tr>
                <td>crédito <FaCoins className='iconoMonedaTablero'/></td>
                <td>{formatterMiles.format(credito/10)}</td>
                <td>apuesta <RiCoinFill className='iconoMonedaTablero'/></td>
                <td>{<input onChange={(e) => {apuesta=e.target.value; setApuesta(apuesta)}} type={'number'} defaultValue={apuesta} min={10} max={100} step={10} autoComplete='off'/>}</td>
                <td>ganancia <GiTwoCoins className='iconoMonedaTablero'/></td>
                <td>{formatterMiles.format(ganancia)}</td>
                <td>acumulado <FaCoins className='iconoMonedaTablero'/></td>
                <td>{formatterMiles.format(acumulado)}</td>
                <td><FaMoneyBillAlt className='iconoBilleteTablero'/></td>
                <td>{formatterPeso.format(credito)}</td>
              </tr>
            </tbody>
          </table> 
        </div>
        <div id='videopoker' className='App-body-divJuego'>
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
          <br/>
          <button type='button' className='Boton-jugar-videopoker' onClick={() => itemAleatorio(cartas,carta,setCarta,credito,setCredito,apuesta,ganancia,setGanancia,acumulado,setAcumulado,colorItemWin,setColorItemWin,audioMayor,audioCuadruple,audioTriple,audioCoin)}>JUGAR</button>
        </div>

        {/*     
          <li><input type="checkbox" value="juego1" checked={checkedjuego1} onChange={(e) => setCheckedjuego1(checkJuego(e.target.checked,e.target.value))} /></li>
          <li><input type="checkbox" value="juego2" checked={checkedjuego2} onChange={(e) => setCheckedjuego2(checkJuego(e.target.checked,e.target.value))} /></li>
          <li><input type="checkbox" value="juego3" checked={checkedjuego3} onChange={(e) => setCheckedjuego3(checkJuego(e.target.checked,e.target.value))} /></li>
        */}
    </div>
  );
}


function itemAleatorio(cartas,carta,setCarta,credito,setCredito,apuesta,ganancia,setGanancia,acumulado,setAcumulado,colorItemWin,setColorItemWin,audioMayor,audioCuadruple,audioTriple,audioCoin,item0,item1,item2,item3,item4) {
  if(credito > 0 && credito >= (apuesta*10)){
    credito = credito - (apuesta*10);
    setCredito(credito);
    audioCoin();

    for(let i=0;i<5;i++){                   //Llena todas las posiciones con items de la lista con posiciones al azar
        carta[i] = cartas[Math.floor(Math.random()*cartasLista.length)][Math.floor(Math.random()*cartasLista[0].length)];
        colorItemWin[i]= '#fff';   //Items con fondo transparente
    }

    setCarta([carta[0],carta[1],carta[2],carta[3],carta[4]]);

    //------------------- Poker (4 cartas iguales) -------------------//
    if(carta[0][0] === carta[1][0] && carta[1][0] === carta[2][0] && carta[2][0] === carta[3][0]){
      gananciaPoker(credito,setCredito,apuesta,ganancia,setGanancia,acumulado,setAcumulado,colorWin,colorItemWin,setColorItemWin,audioCuadruple,0,1,2,3);
    }
    else if(carta[0][0] === carta[1][0] && carta[1][0] === carta[2][0] && carta[2][0] === carta[4][0]){
      gananciaPoker(credito,setCredito,apuesta,ganancia,setGanancia,acumulado,setAcumulado,colorWin,colorItemWin,setColorItemWin,audioCuadruple,0,1,2,4);
    }
    else if(carta[0][0]=== carta[1][0] && carta[1][0] === carta[3][0] && carta[3][0] === carta[4][0]){
      gananciaPoker(credito,setCredito,apuesta,ganancia,setGanancia,acumulado,setAcumulado,colorWin,colorItemWin,setColorItemWin,audioCuadruple,0,1,3,4);
    }
    else if(carta[0][0] === carta[2][0] && carta[2][0]=== carta[3][0] && carta[3][0] === carta[4][0]){
      gananciaPoker(credito,setCredito,apuesta,ganancia,setGanancia,acumulado,setAcumulado,colorWin,colorItemWin,setColorItemWin,audioCuadruple,0,2,3,4);
    }
    else if(carta[1][0] === carta[2][0] && carta[2][0] === carta[3][0] && carta[3][0] === carta[4][0]){
      gananciaPoker(credito,setCredito,apuesta,ganancia,setGanancia,acumulado,setAcumulado,colorWin,colorItemWin,setColorItemWin,audioCuadruple,1,2,3,4);
    }
    //------------------- Ternas (3 cartas iguales)  -------------------//
    else if((carta[0][0] === carta[1][0] && carta[1][0] === carta[2][0])||
            (carta[0][0] === carta[1][0] && carta[1][0] === carta[3][0])||
            (carta[0][0] === carta[1][0] && carta[1][0] === carta[4][0])){
              gananciaTerna(credito,setCredito,apuesta,ganancia,setGanancia,acumulado,setAcumulado,colorWin,colorItemWin,setColorItemWin,audioTriple,0,1,4)
    }
    //------------------- Mayor (10JQKA)  -------------------//
    if(carta[0][0] === '10' && carta[1][0] === 'J' && carta[2][0] === 'Q' && carta[1][0] === 'K' && carta[2][0] === 'A'){
      colorItemWin[0]= colorWin;
      colorItemWin[1]= colorWin;
      colorItemWin[2]= colorWin;
      colorItemWin[3]= colorWin;
      colorItemWin[4]= colorWin;
      
      alert('Mayor');

      ganancia = apuesta * 40;
      credito = credito + ganancia;
      acumulado = acumulado + (ganancia/10);
      
      setColorItemWin(colorItemWin);
      setAcumulado(acumulado);
      setGanancia(ganancia);
      setCredito(credito);
    }
    //------------------- Flush (Palo igual)  -------------------//
    if(carta[0][1] === carta[1][1] && carta[1][1] === carta[2][1] && carta[2][1] === carta[3][1] && carta[3][1] === carta[4][1] ){
      colorItemWin[0]= colorWin;
      colorItemWin[1]= colorWin;
      colorItemWin[2]= colorWin;
      colorItemWin[3]= colorWin;
      colorItemWin[4]= colorWin;
      
      alert('Flush');

      ganancia = apuesta * 5;
      credito = credito + ganancia;
      acumulado = acumulado + (ganancia/10);
      
      setColorItemWin(colorItemWin);
      setAcumulado(acumulado);
      setGanancia(ganancia);
      setCredito(credito);
    }
  }
}

//------------------- Poker (4 cartas iguales) -------------------//
function gananciaPoker(credito,setCredito,apuesta,ganancia,setGanancia,acumulado,setAcumulado,colorWin,colorItemWin,setColorItemWin,audioCuadruple,item0,item1,item2,item3){
  colorItemWin[item0]= colorWin;
  colorItemWin[item1]= colorWin;
  colorItemWin[item2]= colorWin;
  colorItemWin[item3]= colorWin;

  audioCuadruple();
  alert('Poker');

  ganancia = apuesta * 10;
  credito = credito + ganancia;
  acumulado = acumulado + (ganancia/10);
 
  setColorItemWin(colorItemWin);
  setAcumulado(acumulado);
  setGanancia(ganancia);
  setCredito(credito);
};
//------------------- Ternas (3 cartas iguales)  -------------------//
function gananciaTerna(credito,setCredito,apuesta,ganancia,setGanancia,acumulado,setAcumulado,colorWin,colorItemWin,setColorItemWin,audioTriple,item0,item1,item2){
  colorItemWin[item0]= colorWin;
  colorItemWin[item1]= colorWin;
  colorItemWin[item2]= colorWin;

  audioTriple();
  alert('Terna');

  ganancia = apuesta * 3;
  credito = credito + ganancia;
  acumulado = acumulado + (ganancia/10);

  setColorItemWin(colorItemWin);
  setAcumulado(acumulado);
  setGanancia(ganancia);
  setCredito(credito);
};



export default Juego1;