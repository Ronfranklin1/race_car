// syntax - document.selector.actions = "value"

// we want to change the innerHTML/content of #headingText on click of #headingText

// document.getElementById("btnContent").onclick = function(){
// 	document.getElementById("headingText").innerHTML = "Bagong Value"
// }

// document.querySelector("#btnContent").onclick = function(){
// 	document.querySelector("#headingText").innerHTML = "Bagong Value"
// }

//addEventListerner Method
//we attach the addEventListener Method to a selector(querySelector,getElementById) so that it can 
//execute/run the manipulation upon the trigger of an event indicated

// basic syntax:
// document.selector.AddEventListerner("event", function(){
// 		function to be excecuted upon trigger of the indicated event
//})

	document.querySelector("#btnContent").addEventListener("click",function(){
	document.querySelector("#headingText").innerHTML = "bagong Value"
})

// add/remove classes 
// classList property returns the list of classes for that selected element

console.log(document.querySelector("#headingText").classList)

// the add method adds the class indicated in its parameter
// we want to add a class called newClass

document.querySelector("#btnStyle").addEventListener("click", function(){
	document.querySelector("#headingText").classList.add("newClass")
	// document.querySelector("#headingText").classList.remove("newClass")
	console.log(document.querySelector("#headingText").classList)
})

// // the remove method remove the class indicated in its parameters
// document.querySelector("#btnStyle").addEventListener("mouseover", function(){
// 	console.log("You can double clicked the button")
// })

	document.querySelector("#btnStyle").addEventListener("dblclick", function(){
		document.querySelector("#headingText").classList.remove("newClass")
	})
