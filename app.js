'use strict'
let readmore =document.getElementsByClassName("read-more");
let divAbout=document.getElementById("div-about");
let mainAbout =document.getElementsByClassName("main-about");

readmore[0].addEventListener('click',keydownfun);

function keydownfun(event){
event.preventDefault();
readmore[0].innerHTML = ""

let parg=document.createElement('p');
parg.textContent="Restaurants are a profession of trouble, but the passion gave us to this work and prompted us to continue and grow, and after extrapolation and our spread and coverage of most regions of the Kingdom, and because of our love for this work , and the beginning was again by opening our first branches under Name (Alia Central) on the late Wasfi Al-Tal Street and we joined other branches"
divAbout.appendChild(parg)
let less=document.createElement('a');
less.href=""
less.textContent=" read less...";
parg.appendChild(less);
mainAbout[0].style.height = '30vh';

}