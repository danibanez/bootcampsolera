import React from 'react';
import './Main.css';
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import ScoreList from './ScoreList';

var menu= document.getElementById('menu');



function Main(){

return(


    <div className="container">

            <h1>SOLERA TEAMS. BOOTCAMP 4</h1>
   
        <div id='menu'>
        <div>
               
            
        <a href="/lista"><button class="team"><h3>EQUIPO AA</h3><h2> 0</h2></button></a> 
        <a href="/lista"> <button class="team"> <h3>ARENAL +</h3><h2> 0</h2></button></a>
        <a href="/lista"> <button class="team"> <h3>CRUCE DE BANDERAS</h3><h2> 0</h2></button></a>
        <a href="/lista"> <button class="team"> <h3>LUNERA</h3><h2> 0</h2></button></a>
        <a href="/lista"><button class="team"> <h3>DEGARA</h3><h2> 0</h2></button></a>
        </div>
        <div>
            <a href="/lista"> <button class="team"> <h3>CODEPIRINHA</h3><h2> 0</h2></button></a>
            <a href="/lista"> <button class="team"><h3>JS LOVERS</h3> <h2> 0</h2></button></a>
            <a href="/lista"><button class="team"><h3>BUGABIT</h3> <h2> 0</h2></button></a>
            <a href="/lista"> <button class="team"> <h3>LOS PIBES DEL FONDO</h3><h2> 0</h2></button></a>
            <a href="/lista"><button class="team"><h3>VALLE SILICONA</h3> <h2> 0</h2></button></a>
         </div>

        </div>


    </div>



);

}
export default Main;