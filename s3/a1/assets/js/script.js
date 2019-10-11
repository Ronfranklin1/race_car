function clear(){
	document.querySelector("#first").innerHTML =  ""
	document.querySelector("#second").innerHTML =  ""
	document.querySelector("#third").innerHTML =  ""
	document.querySelector("#fourth").innerHTML =  ""


}

document.querySelector("#compute").addEventListener("click", function(){
let first = parseInt(document.querySelector('#input1').value)
let second = parseInt(document.querySelector('#input2').value)
let third = parseInt(document.querySelector('#input3').value)
let fourth = parseInt(document.querySelector('#input4').value)



console.log("The Student\'s first quater grade is " + first)
console.log("The Student\'s second quater grade is " + second)
console.log("The Student\'s third quater grade is " + third)
console.log("The Student\'s fourth quater grade is " + fourth)



	let grade = (first + second + third + fourth)/4

	if (!isNaN(grade)) {
		console.log("The average grade is " + grade)
	}else{
		console.log("NOT A NUMBER")
	}

clear()
document.querySelector("#average").innerHTML =  "<h3>" + grade + "</h3>"

if (grade >= 0 && grade <= 55) {
	// console.log("The QPI is: 5.0 and the student\'s status is fail")
	document.querySelector("#pof").innerHTML =  "<h3>" + "Fail" + "</h3>"
	document.querySelector("#qpi").innerHTML =  "<h3>" + "5.0" + "</h3>"

} else if (grade >= 55 && grade <= 60) {
	// console.log("The QPI is: 4.0 and the student\'s status is fail")
	document.querySelector("#pof").innerHTML =  "<h3>" + "Fail" + "</h3>"
	document.querySelector("#qpi").innerHTML =  "<h3>" + "4.0" + "</h3>"


} else if (grade >= 60 && grade <= 65) {
	// console.log("The QPI is: 3.0 and the student\'s status is fail")
	document.querySelector("#pof").innerHTML =  "<h3>" + "Fail" + "</h3>"
	document.querySelector("#qpi").innerHTML =  "<h3>" + "3.0" + "</h3>"

} else if (grade >= 65 && grade <= 70) {
	// console.log("The QPI is: 2.75 and the student\'s status is pass")
	document.querySelector("#pof").innerHTML =  "<h3>" + "Pass" + "</h3>"
	document.querySelector("#qpi").innerHTML =  "<h3>" + "2.75" + "</h3>"

} else if (grade >= 70 && grade <= 75) {
	// console.log("The QPI is: 2.5 and the student\'s status is pass")
	document.querySelector("#pof").innerHTML =  "<h3>" + "Pass" + "</h3>"
	document.querySelector("#qpi").innerHTML =  "<h3>" + "2.5" + "</h3>"

} else if (grade >= 75 && grade <= 80) {
	console.log("The QPI is: 2.25 and the student\'s status is pass")
	document.querySelector("#pof").innerHTML =  "<h3>" + "Pass" + "</h3>"
	document.querySelector("#qpi").innerHTML =  "<h3>" + "2.25" + "</h3>"

} else if (grade >= 80 && grade <= 84) {
	console.log("The QPI is: 2 and the student\'s status is pass")
	document.querySelector("#pof").innerHTML =  "<h3>" + "Pass" + "</h3>"
	document.querySelector("#qpi").innerHTML =  "<h3>" + "2.00" + "</h3>"

} else if (grade >= 84 && grade <= 87) {
	// console.log("The QPI is: 1.75 and the student\'s status is pass")
	document.querySelector("#pof").innerHTML =  "<h3>" + "Pass" + "</h3>"
	document.querySelector("#qpi").innerHTML =  "<h3>" + "1.75" + "</h3>"

} else if (grade >= 87 && grade <= 90) {
	// console.log("The QPI is: 1.5 and the student\'s status is pass")
	document.querySelector("#pof").innerHTML =  "<h3>" + "Pass" + "</h3>"
	document.querySelector("#qpi").innerHTML =  "<h3>" + "1.5" + "</h3>"

} else if (grade >= 90 && grade <= 93) {
	// console.log("The QPI is: 1.25 and the student\'s status is pass")
	document.querySelector("#pof").innerHTML =  "<h3>" + "Pass" + "</h3>"
	document.querySelector("#qpi").innerHTML =  "<h3>" + "1.25" + "</h3>"

} else if (grade >= 93 && grade <= 100) {
	// console.log("The QPI is: 1 and the student\'s status is pass")
	document.querySelector("#pof").innerHTML =  "<h3>" + "Pass" + "</h3>"
	document.querySelector("#qpi").innerHTML =  "<h3>" + "1.00" + "</h3>"

} else if (grade >= 100){
	console.log("out of bounds")
	alert("Out of Bounds")

} else if (grade <= 0 ){
	console.log("out of bounds")
	alert("Out of Bounds")


} else{
	alert("Out of bounds")
}


	
})





// document.querySelector("#compute").addEventListener("click", function(){
// 	let grade ()
// })

// let grade = (first + second + third + fourth)/4

// if (!isNaN(grade)) {
// 	console.log("The average grade is " + grade)
// } else{
// 	console.log("NOT A NUMBER")
// }



// if (grade >= 0 && grade <= 55) {
// 	console.log("The QPI is: 5.0 and the student\'s status is fail")

// } else if (grade >= 55 && grade <= 60) {
// 	console.log("The QPI is: 4.0 and the student\'s status is fail")

// } else if (grade >= 60 && grade <= 65) {
// 	console.log("The QPI is: 3.0 and the student\'s status is fail")

// } else if (grade >= 65 && grade <= 70) {
// 	console.log("The QPI is: 2.75 and the student\'s status is pass")

// } else if (grade >= 70 && grade <= 75) {
// 	console.log("The QPI is: 2.5 and the student\'s status is pass")

// } else if (grade >= 75 && grade <= 80) {
// 	console.log("The QPI is: 2.25 and the student\'s status is pass")

// } else if (grade >= 80 && grade <= 84) {
// 	console.log("The QPI is: 2 and the student\'s status is pass")

// } else if (grade >= 84 && grade <= 87) {
// 	console.log("The QPI is: 1.75 and the student\'s status is pass")

// } else if (grade >= 87 && grade <= 90) {
// 	console.log("The QPI is: 1.5 and the student\'s status is pass")

// } else if (grade >= 90 && grade <= 93) {
// 	console.log("The QPI is: 1.25 and the student\'s status is pass")

// } else if (grade >= 93 && grade <= 100) {
// 	console.log("The QPI is: 1 and the student\'s status is pass")

// } else if (grade >= 100){
// 	console.log("out of bounds")
// } else if (grade <= 0 ){
// 	console.log("out of bounds")
// }