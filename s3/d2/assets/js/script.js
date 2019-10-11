const buttons = document.getElementsByClassName("btn")
// const boxes = document.getElementsByClassName("box")

//ideally this should work but does not

// buttons.addEventListener("click". function(){
// 	alert("Hi")
// })

console.log(buttons)

// buttons[0].addEventListener("click", function(){
// 	alert("Hi")
// })

// buttons[1].addEventListener("click", function(){
// 	alert("You clicked the second button")
// })

// buttons[2].addEventListener("dblclick", function(){
// 	alert("You clicked the twice!")
// })

// for(let x=0; x<buttons.length; x++){
// 	buttons[x].addEvesntListener("click", function(){
// 		alert("Hi!")
// 	})
// }
//QUERY SELECTOR ALL
const boxes = document.querySelectorAll(".box")
// nodeList and HTML collection are both collection of nodes. HTML
// collection is more specific since JS is sure that you are selecting elements via
// class while querySelectorAll can select different type of nodes like
// a tag, attribute, etc


console.log(boxes)
const colors = ['red', 'orange', 'yellow', 'green', 'violet', 'indigo', 'blue']


// for(let x=0; x > boxes.length; x--){
// 	boxes[x].style.backgroundColor = "#7ef9ff"
// 	boxes[x].innerHTML = "Boxes"
// }

// for(let i = 0; i < boxes.length; i++){
// 	boxes[i].style.backgroundColor = colors[colors.length - i - 1]

// }
// const = document.querySelectorAll(".text")

// for(let y=0; y<text)
// while loop
// let count = 0
// while (count < boxes.length ){
// 	boxes[count].style.backgroundColor = colors[colors.length - count - 1]
// 	boxes[count].style.width = 50 + (10 * count) + "px"
// 	boxes[count].style.height = 50 + (10 * count) + "px"
// 	count++

// }

// for each
let count = 0

boxes.forEach(function(box){
	box.innerHTML = colors[count]
	box.style.backgroundColor = colors[count]
	box.style.width = 50 + (10 * count) + "px"
 	box.style.height = 50 + (10 * count) + "px"
	count++
})








