import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

let who = ['El perro', 'Un ladrón', 'un policía', 'mi abuela'];
let action = ['quemó', 'perdió', 'se comió', 'rompió'];
let what = ['mi tarea', 'mi notebook', 'mi celular'];
let when = ['mientras me bañaba', 'cuando estaba durmiendo', 'mientras yo almorzaba', 'mientras yo estaba en el cine', 'mientras yo compraba desayuno'];

let whorandom= Math.floor (Math.random () * 4);
let actionrandom= Math.floor (Math.random () * 4);
let whatrandom= Math.floor (Math.random () * 3);
let whenrandom= Math.floor (Math.random () * 5);

let excuse = `${who[whorandom]} ${action[actionrandom]} ${what[whatrandom]} ${when[whenrandom]}`

document.getElementById("excuse").innerHTML= excuse;}