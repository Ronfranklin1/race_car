// the DOM (Document Object model) treats HTML elements, which are basically words, as objects
// This means that it has properties and methods that we can SELECT and use to MANIPULATE the 
// elements.

// Basic syntax
// document - will refer to the HTML file that this js file is linked
console.log(document)

// DOM SELECTORS
// getElementsByTagName()
// getElementsByClass()
// getElementByID()
// querySelector()

// SELECTOR - The element you want to select inside the elements
// console.log(document.getElementById("firstTag"))

const headingSelector = document.getElementById("firstTag")
headingSelector.onclick = function (){
	headingSelector.innerHTML = "Ronfranklin Del Pilar"
	headingSelector.style.backgroundColor = "indianred"
	alert("Nag Alert ako onclick")
	console.log("nag log ako sa console onclick")
} 
// event listener/action - the trigger that execute the manipulation you want to execute

// .innerHTML to change the innder content of elements
// .style - to apply CSS changes
// document.getElementById("firstTag").innerHTML="Ronfranklin Del Pilar"
// or you can assign it to an event so that it won't execute on load
// document.getElementById("firstTag").onclick = function(){
// 	document.getElementById("firstTag").innerHTML = "Ronfranklin Del Pilar"
// }

// JS can also change styles

// hide all elements inside #all
document.getElementById("btnHide").onclick = function(){
	document.getElementById("all").style.display = "none"
}

// show all elements inside #all
document.getElementById("btnShow").onclick = function(){
	document.getElementById("all").style.display = "block"
	document.getElementById("all").style.backgroundColor = "#f4f4f4";
	document.querySelector("#all").style.color = "blue"
}

// js can change attribute values

document.getElementById("btnHeight").onclick = function(){
	alert("Changing the height of the image")
	document.getElementById("attr").height = 194
}

document.getElementById("btnImg").onclick = function(){
	console.log("changing the profile picture..")
	document.getElementById("attr").src = "./assets/images/img2.jpeg"
}

// js can get and manipulate values
document.getElementById("btnSum").onclick = function(){
	console.log("Computing Sum")
	console.log('This is the value of input1 '+ document.getElementById("input1").value)
	let x = document.getElementById("input1").value
	let y = document.getElementById("input2").value
	let total = parseInt(x) + parseInt(y)
	console.log('adding ' + x + ' adding ' + y)
	console.log(total)
	document.getElementById("sum").innerHTML = total
}