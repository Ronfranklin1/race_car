document.querySelector("#checker").addEventListener("blur", function(){
	// alert("Hello")
	num = parseInt(document.querySelector('#checker').value)
	console.log(num)

	if(!isNaN(num)){
		if (num %2 === 0 ){
			console.log(num + " is even")
			document.querySelector("#output").innerHTML = `<h2> ${num} is even </h2>`
		}else{
			console.log(num + " is odd")
			document.querySelector("#output").innerHTML = `<h2> ${num} is odd </h2>`
		} 
	}

	// template literals
	// document.querySelector("#output").innerHMTL = `<h2> ${num} is even`

	else{
			document.querySelector("#output").innerHTML =  "<h2>" + "input a number" + "</h2>"
		}

})




