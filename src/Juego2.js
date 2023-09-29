import siete from './images/siete.png';
import bar from './images/bar.png';
import doblebar from './images/doblebar.png';
import triplebar from './images/triplebar.png';
import estrella from './images/estrella.png';
import cerezas from './images/cerezas.png';
import sandia from './images/sandia.png';
import limon from './images/limon.png';
import uvas from './images/uvas.png';
import naranja from './images/naranja.png';
import fresa from './images/fresa.png';
import banano from './images/banano.png';
import pera from './images/pera.png';
import arandano from './images/arandano.png';
import manzana from './images/manzana.png';
import trebol from './images/trebol.png';
import campana from './images/campana.png';
import mp3Mayor from './audio/mayor.mp3';
import mp3Triple from './audio/triple.mp3';
import mp3Cuadruple from './audio/cuadruple.mp3';
import mp3Coin from './audio/coin.mp3';
import './juego2.css';

import React, { useState, useEffect } from 'react';

import { FaCoins,FaMoneyBillAlt } from 'react-icons/fa';
import { GiTwoCoins } from 'react-icons/gi';
import { RiCoinFill } from 'react-icons/ri';

const bet = 10;
const colorWin = 'rgb(255,215,0,1)';

 const itemsLista = [<img src={siete} alt='7' className='itemSietes'/>,<img src={bar} alt='㍴' className='itemSietes'/>,<img src={doblebar} alt='㍴㍴' className='itemSietes'/>,<img src={triplebar} alt='㍴㍴㍴' className='itemSietes'/>,
                     <img src={estrella} alt='⭐' className='itemSietes'/>,<img src={cerezas} alt='🍒' className='itemSietes'/>,<img src={sandia} alt='🍉' className='itemSietes'/>,<img src={limon} alt='🍋' className='itemSietes'/>,
                     <img src={uvas} alt='🍇' className='itemSietes'/>,<img src={naranja} alt='🟠' className='itemSietes'/>,<img src={fresa} alt='🍓' className='itemSietes'/>,<img src={banano} alt='🍌' className='itemSietes'/>,
                     <img src={pera} alt='🍐' className='itemSietes'/>,<img src={arandano} alt='🫐' className='itemSietes'/>,<img src={manzana} alt='🍎' className='itemSietes'/>,
                     <img src={trebol} alt='🍀' className='itemSietes'/>,<img src={campana} alt='🔔' className='itemSietes'/>];

                     const formatterPeso = new Intl.NumberFormat('es-CO', {   //Formato moneda $ pesos Colmbianos
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0
});
const formatterMiles = new Intl.NumberFormat('es-CO', {   //Formato miles para cantidades
  style: 'decimal',
  minimumFractionDigits: 0
});


const Juego2 = ({credito,setCredito,acumulado,setAcumulado}) => {  
//function Juego2({credito,setCredito,acumulado,setAcumulado}) {
  const [ganancia,setGanancia] = useState(0);
  let [apuesta,setApuesta] = useState(bet);

  const [items,setItems] = useState(itemsLista);
  const [item,setItem] = useState([[items[Math.floor(Math.random()*itemsLista.length)],items[Math.floor(Math.random()*itemsLista.length)],items[Math.floor(Math.random()*itemsLista.length)],items[Math.floor(Math.random()*itemsLista.length)],items[Math.floor(Math.random()*itemsLista.length)]],
                                   [items[Math.floor(Math.random()*itemsLista.length)],items[Math.floor(Math.random()*itemsLista.length)],items[Math.floor(Math.random()*itemsLista.length)],items[Math.floor(Math.random()*itemsLista.length)],items[Math.floor(Math.random()*itemsLista.length)]],
                                   [items[Math.floor(Math.random()*itemsLista.length)],items[Math.floor(Math.random()*itemsLista.length)],items[Math.floor(Math.random()*itemsLista.length)],items[Math.floor(Math.random()*itemsLista.length)],items[Math.floor(Math.random()*itemsLista.length)]]]);

  const [colorItemWin,setColorItemWin] = useState([['transparent','transparent','transparent','transparent','transparent'],
                                                   ['transparent','transparent','transparent','transparent','transparent'],
                                                   ['transparent','transparent','transparent','transparent','transparent']]);

 
  const [startGiroItems,setStartGiroItems] = useState('paused');
  const [cantidadGiroItems,setCantidadGiroItems] = useState(3);

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





  let [translate, setTranslate] = useState(0);
  let [shouldTransition, setShouldTransition] = useState(true);

  function handleClick() {
    setShouldTransition(false);
    setTranslate(0);
    setStartGiroItems('paused');
  }

  useEffect(() => {
    if (translate === 0) {
      setShouldTransition(true);
      setTranslate(100);
      
    }
    setStartGiroItems('running');
  }, [translate]);

  return (
      <div className="App">


{/* <button onClick={handleClick}>Run animation</button>

<p style={{ transition: shouldTransition ? "all 0.5s" : "",
            transform: `translateX(${translate}px)`
  }}>
  Lorem ipsum
</p> */}



        <div className='App-body-divTablero'>
          <table border="1" className='tablaCredito'>
            <tbody>
              <tr>
                <td><FaCoins className='iconoMonedaTablero'/></td>
                <td>{formatterMiles.format(credito/10)}</td>
                <td><RiCoinFill className='iconoMonedaTablero'/></td>
                <td>{<input onChange={(e) => {apuesta=e.target.value; setApuesta(apuesta)}} type={'number'} defaultValue={apuesta} min={10} max={100} step={10} autoComplete='off'/>}</td>
                <td><GiTwoCoins className='iconoMonedaTablero'/></td>
                <td>{formatterMiles.format(ganancia)}</td>
                <td><FaCoins className='iconoMonedaTablero'/></td>
                <td>{formatterMiles.format(acumulado)}</td>
                <td><FaMoneyBillAlt className='iconoBilleteTablero'/></td>
                <td>{formatterPeso.format(credito)}</td>
              </tr>
            </tbody>
          </table> 
        </div>
        <div id='777' className='App-body-divJuego'>
          <div className="marquee-wrapper">
            <div className="container">
              <div className="marquee-block">
                <div className="marquee-inner to-bottom" style={{ 'animation-play-state':startGiroItems,'animation-iteration-count':cantidadGiroItems.toString(10)}}>
                  <span>
                    <div style={{'backgroundColor': colorItemWin[0][0]}} className="marquee-item">{item[0][0]}</div>
                    <div style={{'backgroundColor': colorItemWin[1][0]}} className="marquee-item">{item[1][0]}</div>
                    <div style={{'backgroundColor': colorItemWin[2][0]}} className="marquee-item">{item[2][0]}</div>
                  </span>
                  <span>
                    <div style={{'backgroundColor': colorItemWin[0][0]}} className="marquee-item">{item[0][0]}</div>
                    <div style={{'backgroundColor': colorItemWin[1][0]}} className="marquee-item">{item[1][0]}</div>
                    <div style={{'backgroundColor': colorItemWin[2][0]}} className="marquee-item">{item[2][0]}</div>
                  </span>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="marquee-block">
                <div className="marquee-inner to-bottom" style={{ 'animation-play-state':startGiroItems,'animation-iteration-count':(cantidadGiroItems+1).toString(10)}}>
                  <span>
                    <div style={{'backgroundColor': colorItemWin[0][1]}} className="marquee-item">{item[0][1]}</div>
                    <div style={{'backgroundColor': colorItemWin[1][1]}} className="marquee-item">{item[1][1]}</div>
                    <div style={{'backgroundColor': colorItemWin[2][1]}} className="marquee-item">{item[2][1]}</div>
                  </span>
                  <span>
                    <div style={{'backgroundColor': colorItemWin[0][1]}} className="marquee-item">{item[0][1]}</div>
                    <div style={{'backgroundColor': colorItemWin[1][1]}} className="marquee-item">{item[1][1]}</div>
                    <div style={{'backgroundColor': colorItemWin[2][1]}} className="marquee-item">{item[2][1]}</div>
                  </span>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="marquee-block">
                <div className="marquee-inner to-bottom" style={{ 'animation-play-state':startGiroItems,'animation-iteration-count':(cantidadGiroItems+2).toString(10)}}>
                  <span>
                    <div style={{'backgroundColor': colorItemWin[0][2]}} className="marquee-item">{item[0][2]}</div>
                    <div style={{'backgroundColor': colorItemWin[1][2]}} className="marquee-item">{item[1][2]}</div>
                    <div style={{'backgroundColor': colorItemWin[2][2]}} className="marquee-item">{item[2][2]}</div>
                  </span>
                  <span>
                    <div style={{'backgroundColor': colorItemWin[0][2]}} className="marquee-item">{item[0][2]}</div>
                    <div style={{'backgroundColor': colorItemWin[1][2]}} className="marquee-item">{item[1][2]}</div>
                    <div style={{'backgroundColor': colorItemWin[2][2]}} className="marquee-item">{item[2][2]}</div>
                  </span>
                </div>
              </div>
            </div> 
            <div className="container">
              <div className="marquee-block">
                <div className="marquee-inner to-bottom" style={{ 'animation-play-state':startGiroItems,'animation-iteration-count':(cantidadGiroItems+3).toString(10)}}>
                  <span>
                    <div style={{'backgroundColor': colorItemWin[0][3]}} className="marquee-item">{item[0][3]}</div>
                    <div style={{'backgroundColor': colorItemWin[1][3]}} className="marquee-item">{item[1][3]}</div>
                    <div style={{'backgroundColor': colorItemWin[2][3]}} className="marquee-item">{item[2][3]}</div>
                  </span>
                  <span>
                    <div style={{'backgroundColor': colorItemWin[0][3]}} className="marquee-item">{item[0][3]}</div>
                    <div style={{'backgroundColor': colorItemWin[1][3]}} className="marquee-item">{item[1][3]}</div>
                    <div style={{'backgroundColor': colorItemWin[2][3]}} className="marquee-item">{item[2][3]}</div>
                  </span>
                </div>
              </div>
            </div> 
            <div className="container">
              <div className="marquee-block">
                <div className="marquee-inner to-bottom" style={{ 'animation-play-state':startGiroItems,'animation-iteration-count':(cantidadGiroItems+4).toString(10)}}>
                  <span>
                    <div style={{'backgroundColor': colorItemWin[0][4]}} className="marquee-item">{item[0][4]}</div>
                    <div style={{'backgroundColor': colorItemWin[1][4]}} className="marquee-item">{item[1][4]}</div>
                    <div style={{'backgroundColor': colorItemWin[2][4]}} className="marquee-item">{item[2][4]}</div>
                  </span>
                  <span>
                    <div style={{'backgroundColor': colorItemWin[0][4]}} className="marquee-item">{item[0][4]}</div>
                    <div style={{'backgroundColor': colorItemWin[1][4]}} className="marquee-item">{item[1][4]}</div>
                    <div style={{'backgroundColor': colorItemWin[2][4]}} className="marquee-item">{item[2][4]}</div>
                  </span>
                </div>
              </div>
            </div> 
          </div>

          <button type='button' className='Boton-jugar-sietes' onClick={() => itemAleatorio(items,credito,setCredito,item,setItem,apuesta,ganancia,setGanancia,acumulado,setAcumulado,itemsLista[0],colorItemWin,setColorItemWin,audioMayor,audioCuadruple,audioTriple,audioCoin,startGiroItems,setStartGiroItems,cantidadGiroItems,setCantidadGiroItems)}>JUGAR</button>        
          
        </div>
   </div>
  );
}


function itemAleatorio(items,credito,setCredito,item,setItem,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorItemWin,setColorItemWin,audioMayor,audioCuadruple,audioTriple,audioCoin,startGiroItems,setStartGiroItems,cantidadGiroItems,setCantidadGiroItems) {
  if(credito > 0 && credito >= (apuesta*10)){
    credito = credito - (apuesta*10);
    setCredito(credito);
   
    startGiroItems = 'running';
    setStartGiroItems('running');
    audioCoin();

    for(let i=0;i<3;i++){                   //Llena todas las posiciones con items de la lista con posiciones al azar
      for(let j=0;j<5;j++){
        item[i][j] = items[Math.floor(Math.random()*itemsLista.length)];
        colorItemWin[i][j]= 'transparent';   //Items con fondo transparente
      }
    }

    setItem([item[0],item[1],item[2],item[3],item[4]]);
    
    //------------------- Quíntuples (5 en línea) -------------------//
    if((item[0][0] === item[0][1] && item[0][1] === item[0][2] && item[0][2] === item[0][3] && item[0][3] === item[0][4])){
      gananciaCincoItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioMayor,0,0,0,1,0,2,0,3,0,4);
    }
    else if((item[1][0] === item[1][1] && item[1][1] === item[1][2] && item[1][2] === item[1][3] && item[1][3] === item[1][4])){
      gananciaCincoItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioMayor,1,0,1,1,1,2,1,3,1,4);
    }
    else if((item[2][0] === item[2][1] && item[2][1] === item[2][2] && item[2][2] === item[2][3] && item[2][3] === item[2][4])){
      gananciaCincoItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioMayor,2,0,2,1,2,2,2,3,2,4);
    }
    else if((item[0][0] === item[1][1] && item[1][1] === item[2][2] && item[2][2] === item[1][3] && item[1][3] === item[0][4])){
      gananciaCincoItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioMayor,0,0,1,1,2,2,1,3,0,4);
    }
    else if((item[2][0] === item[1][1] && item[1][1] === item[0][2] && item[0][2] === item[1][3] && item[1][3] === item[2][4])){
      gananciaCincoItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioMayor,2,0,1,1,0,2,1,3,2,4);
    }
    else if((item[0][0] === item[1][1] && item[1][1] === item[1][2] && item[1][2] === item[1][3] && item[1][3] === item[2][4])){
      gananciaCincoItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioMayor,0,0,1,1,1,2,1,3,2,4);
    }
    else if((item[2][0] === item[1][1] && item[1][1] === item[1][2] && item[1][2] === item[1][3] && item[1][3] === item[0][4])){
      gananciaCincoItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioMayor,2,0,1,1,1,2,1,3,0,4);
    }
    else if((item[0][4] === item[1][3] && item[1][3] === item[2][2] && item[2][2] === item[1][1] && item[1][1] === item[2][0])){
      gananciaCincoItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioMayor,0,4,1,3,2,2,1,1,2,0);
    }
    else if((item[2][4] === item[1][3] && item[1][3] === item[0][2] && item[0][2] === item[1][1] && item[1][1] === item[0][0])){
      gananciaCincoItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioMayor,2,4,1,3,0,2,1,1,0,0);
    }
    else if((item[0][4] === item[1][3] && item[1][3] === item[1][2] && item[1][2] === item[1][1] && item[1][1] === item[2][0])){
      gananciaCincoItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioMayor,0,4,1,3,1,2,1,1,2,0);     
    }
    else if((item[2][4] === item[1][3] && item[1][3] === item[1][2] && item[1][2] === item[1][1] && item[1][1] === item[0][0])){
      gananciaCincoItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioMayor,2,4,1,3,1,2,1,1,0,0);
    }
    //------------------- Cuádruples (4 en línea) -------------------//
    else if((item[0][0] === item[0][1] && item[0][1] === item[0][2] && item[0][2] === item[0][3])){
      gananciaCuatroItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioCuadruple,0,0,0,1,0,2,0,3);
    }
    else if((item[1][0] === item[1][1] && item[1][1] === item[1][2] && item[1][2] === item[1][3])){
      gananciaCuatroItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioCuadruple,1,0,1,1,1,2,1,3);
    }
    else if((item[2][0] === item[2][1] && item[2][1] === item[2][2] && item[2][2] === item[2][3])){
      gananciaCuatroItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioCuadruple,2,0,2,1,2,2,2,3);
    }
    else if((item[0][0] === item[1][1] && item[1][1] === item[2][2] && item[2][2] === item[1][3])){
      gananciaCuatroItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioCuadruple,0,0,1,1,2,2,1,3);
    }
    else if((item[2][0] === item[1][1] && item[1][1] === item[0][2] && item[0][2] === item[1][3])){
      gananciaCuatroItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioCuadruple,2,0,1,1,0,2,1,3);
    }
    else if((item[0][0] === item[1][1] && item[1][1] === item[1][2] && item[1][1] === item[1][3])){
      gananciaCuatroItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioCuadruple,0,0,1,1,1,2,1,3);
    }
    else if((item[2][0] === item[1][1] && item[1][1] === item[1][2] && item[1][1] === item[1][3])){
      gananciaCuatroItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioCuadruple,2,0,1,1,1,2,1,3);
    }
    else if((item[0][4] === item[0][3] && item[0][3] === item[0][2] && item[0][2] === item[0][1])){
      gananciaCuatroItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioCuadruple,0,4,0,3,0,2,0,1);
    }
    else if((item[1][4] === item[1][3] && item[1][3] === item[1][2] && item[1][2] === item[1][1])){
      gananciaCuatroItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioCuadruple,1,4,1,3,1,2,1,1);
    }
    else if((item[2][4] === item[2][3] && item[2][3] === item[2][2] && item[2][2] === item[2][1])){
      gananciaCuatroItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioCuadruple,2,4,2,3,2,2,2,1);
    }
    else if((item[0][4] === item[1][3] && item[1][3] === item[2][2] && item[2][2] === item[1][1])){
      gananciaCuatroItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioCuadruple,0,4,1,3,2,2,1,1);
    }
    else if((item[2][4] === item[1][3] && item[1][3] === item[0][2] && item[0][2] === item[1][1])){
      gananciaCuatroItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioCuadruple,2,4,1,3,0,2,1,1);
    }
    else if((item[0][4] === item[1][3] && item[1][3] === item[1][2] && item[1][2] === item[1][1])){
      gananciaCuatroItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioCuadruple,0,4,1,3,1,2,1,1);
    }
    else if((item[2][4] === item[1][3] && item[1][3] === item[1][2] && item[1][2] === item[1][1])){
      gananciaCuatroItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioCuadruple,2,4,1,3,1,2,1,1);
    }
    //------------------- Triples (3 en línea) -------------------//
    else if((item[0][0] === item[0][1] && item[0][1] === item[0][2])){
      gananciaTresItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioTriple,0,0,0,1,0,2);
    }
    else if((item[1][0] === item[1][1] && item[1][1] === item[1][2])){
      gananciaTresItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioTriple,1,0,1,1,1,2);
    }
    else if((item[2][0] === item[2][1] && item[2][1] === item[2][2])){
      gananciaTresItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioTriple,2,0,2,1,2,2);
    }
    else if((item[0][0] === item[1][1] && item[1][1] === item[2][2])){
      gananciaTresItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioTriple,0,0,1,1,2,2);
    }
    else if((item[2][0] === item[1][1] && item[1][1] === item[0][2])){
      gananciaTresItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioTriple,2,0,1,1,0,2);
    }
    else if((item[0][0] === item[1][1] && item[1][1] === item[1][2])){
      gananciaTresItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioTriple,0,0,1,1,1,2);
    }
    else if((item[2][0] === item[1][1] && item[1][1] === item[1][2])){
      gananciaTresItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioTriple,2,0,1,1,1,2);
    }
    else if((item[0][4] === item[0][3] && item[0][3] === item[0][2])){
      gananciaTresItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioTriple,0,4,0,3,0,2);
    }
    else if((item[1][4] === item[1][3] && item[1][3] === item[1][2])){
      gananciaTresItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioTriple,1,4,1,3,1,2);
    }
    else if((item[2][4] === item[2][3] && item[2][3] === item[2][2])){
      gananciaTresItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioTriple,2,4,2,3,2,2);
    }
    else if((item[0][4] === item[1][3] && item[1][3] === item[2][2])){
      gananciaTresItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioTriple,0,4,1,3,2,2);
    }
    else if((item[2][4] === item[1][3] && item[1][3] === item[0][2])){
      gananciaTresItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioTriple,2,4,1,3,0,2);
    }
    else if((item[0][4] === item[1][3] && item[1][3] === item[1][2])){
      gananciaTresItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioTriple,0,4,1,3,1,2);
    }
    else if((item[2][4] === item[1][3] && item[1][3] === item[1][2])){
      gananciaTresItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioTriple,2,4,1,3,1,2);
    }
    else if((item[0][1] === item[0][2] && item[0][2] === item[0][3])){
      gananciaTresItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioTriple,0,1,0,2,0,3);
    }
    else if((item[1][1] === item[1][2] && item[1][2] === item[1][3])){
      gananciaTresItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioTriple,1,1,1,2,1,3);
    }
    else if((item[2][1] === item[2][2] && item[2][2] === item[2][3])){   
        gananciaTresItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioTriple,2,1,2,2,2,3);
    }
  }
}

//------------------- Quíntuples (5 en línea) -------------------//
function gananciaCincoItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioMayor,fil1,col1,fil2,col2,fil3,col3,fil4,col4,fil5,col5){
  colorItemWin[fil1][col1]= colorWin;
  colorItemWin[fil2][col2]= colorWin;
  colorItemWin[fil3][col3]= colorWin;
  colorItemWin[fil4][col4]= colorWin;
  colorItemWin[fil5][col5]= colorWin;

  if(item[fil1][col1] === siete){
    ganancia = (apuesta*10) * 10;
    audioMayor();
    alert('77777');
  }else{
    ganancia = (apuesta*10) * 5;

    audioMayor();
    alert('XXXXX');
  }
  credito = credito + ganancia;
  acumulado = acumulado + (ganancia/100);
  // setColorItemWin(colorItemWin);
  setAcumulado(acumulado);
  setGanancia(ganancia);
  setCredito(credito);
};
//------------------- Cuádruples (4 en línea) -------------------//
function gananciaCuatroItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioCuadruple,fil1,col1,fil2,col2,fil3,col3,fil4,col4){
  colorItemWin[fil1][col1]= colorWin;
  colorItemWin[fil2][col2]= colorWin;
  colorItemWin[fil3][col3]= colorWin;
  colorItemWin[fil4][col4]= colorWin;
  audioCuadruple();

  if(item[fil1][col1] === siete){
    ganancia = (apuesta*10) * 8;
    alert('7777');
  }else{
    ganancia = (apuesta*10) * 4;
    alert('XXXX');
  }
   credito = credito + ganancia;
   acumulado = acumulado + (ganancia/100);
   // setColorItemWin(colorItemWin);
   setAcumulado(acumulado);
   setGanancia(ganancia);
   setCredito(credito);
};
//------------------- Triples (3 en línea) -------------------//
function gananciaTresItems(credito,setCredito,item,apuesta,ganancia,setGanancia,acumulado,setAcumulado,siete,colorWin,colorItemWin,setColorItemWin,audioTriple,fil1,col1,fil2,col2,fil3,col3){
  colorItemWin[fil1][col1]= colorWin;
  colorItemWin[fil2][col2]= colorWin;
  colorItemWin[fil3][col3]= colorWin;
  audioTriple();

  if(item[fil1][col1] === siete){
      ganancia = (apuesta*10) * 6;
      alert('777');
  }else{
      ganancia = (apuesta*10) * 3;      
      alert('XXX');
  }
  credito = credito + ganancia;
  acumulado = acumulado + (ganancia/100);
 // setColorItemWin(colorItemWin);
  setAcumulado(acumulado);
  setGanancia(ganancia);
  setCredito(credito);
};


export default Juego2;