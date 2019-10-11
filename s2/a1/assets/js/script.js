// upon clicking of #button1, get the value of #input1
// and assign in as innerHTML of #li


function reuse(num){
	let input = document.querySelector("#input" + num)
	document.querySelector("#li" + num).innerHTML = input.value
	input.value = ""

}

document.querySelector("#button1").addEventListener("click",function(){
	// document.querySelector("#li1").innerHTML = document.querySelector("#input1").value
	// document.querySelector("#input1").value = ""

	reuse(1)
})

document.querySelector("#button2").addEventListener("click",function(){
	// document.querySelector("#li2").innerHTML = document.querySelector("#input2").value
	// document.querySelector("#input2").value = ""
	
	reuse(2)
})

document.querySelector("#button3").addEventListener("click",function(){
	// document.querySelector("#li3").innerHTML = document.querySelector("#input3").value
	// document.querySelector("#input3").value = ""
	
	reuse(3)
})

document.querySelector("#button4").addEventListener("click",function(){
	// document.querySelector("#li4").innerHTML = document.querySelector("#input4").value
	// document.querySelector("#input4").value = ""
	
	reuse(4)
})

document.querySelector("#button5").addEventListener("click",function(){
	// document.querySelector("#li5").innerHTML = document.querySelector("#input5").value
	// document.querySelector("#input5").value = ""
	
	reuse(5)
})


// deleting 


document.querySelector("#li1").addEventListener("dblclick", function(){
	document.querySelector("#li1").innerHTML = " "
	document.querySelector("#li1").style.transition = "2s";
	document.querySelector("#li1").style.backgroundColor = "red";
	document.querySelector("#li1").classList.add = ("pulse");


})

document.querySelector("#li2").addEventListener("dblclick", function(){
	document.querySelector("#li2").innerHTML = " "
	document.querySelector("#li2").style.transition = "2s";
	document.querySelector("#li2").style.backgroundColor = "green";
	document.querySelector("#li2").classList.add = ("pulse");


})

document.querySelector("#li3").addEventListener("dblclick", function(){
	document.querySelector("#li3").innerHTML = " "
	document.querySelector("#li3").style.transition = "2s";
	document.querySelector("#li3").style.backgroundColor = "blue";
	document.querySelector("#li3").classList.add = ("pulse");

})

document.querySelector("#li4").addEventListener("dblclick", function(){
	document.querySelector("#li4").innerHTML = " "
	document.querySelector("#li4").style.transition = "2s";
	document.querySelector("#li4").style.backgroundColor = "orange";
	document.querySelector("#li4").classList.add = ("pulse");

})

document.querySelector("#li5").addEventListener("dblclick", function(){
	document.querySelector("#li5").innerHTML = " "
	document.querySelector("#li5").style.transition = "2s";
	document.querySelector("#li5").style.backgroundColor = "violet";
	document.querySelector("#li5").classList.add = ("pulse");

})