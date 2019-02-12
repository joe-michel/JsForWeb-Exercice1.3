
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

document.querySelector(".display").addEventListener("click", ()  => {
	let name = document.querySelector(".name").value;
	let power = document.querySelector(".power").value;
	let motivation = document.querySelector(".motivation").value;
	let plan = document.querySelector(".plan").value;
   	document.querySelector(".yourVilain").innerText ="Your super Vilain is " + name + ". He can " + power + " and his motivation is: " + motivation + ". To achieve his goal, his plan is: " + plan + ".";
   	document.querySelector(".yourVilain").style.width = "900px";
   	document.querySelector(".inputs").innerText = "";

});

document.querySelector(".reset").addEventListener("click", ()  => {
	document.querySelector(".name").value ="";
	document.querySelector(".power").value ="";
	document.querySelector(".motivation").value ="";
	document.querySelector(".plan").value ="";
});