
// let buttons = document.querySelectorAll(".btn");
 
// for(let i = 0 ; i < buttons.length; i++)
// buttons[i].addEventListener("click", function(){
//  alert("hi!")
// })
 
/*
jQuery basic syntax
document.querySelector/All      $()
document.querySelector.action   $().action()
this                            $(this)
document.querySelector.value    $().val()
.style							.css
.style.fontWeight = 'bold'		.css('font-weight', bold)
.innerHTML						.html()
.innerHTML = 'new value'		.html('new value')
.style.display = 'none'			.hide()
.style.display = 'block'		.show()
*/
 
$(".btn").click(function(){
    // alert("hi!")
    //this will fefer to the element that triggered the event
    console.log($(this))
    // gets the value of the element that triggered the event
    console.log($(this).val())

    $(this).css('border', '2px solid black');
    $(this).css('font-weight', 'bold');
    
    $(this).html('clicked');


})


// $("#btn3").click(function(){
// 	$("h1").hide()
// })

// $("#btn2").dblclick(function(){
// 	$("h1").show()
// })


//toggle method toggles between show and hide method
$("#btn3").click(function(){
	// $("h1").toggle()
	$("h1").toggle(500)//this is 0.5s
	// $("h1").hide()//this is 0.5s
	// $("h1").show()//this is 0.5s
})

$('li').mouseenter(function(){
	$(this).css('font-weight', 'bold')
})

$('li').mouseleave(function(){
	$(this).css('font-weight', 'normal')
})


$(".hello").click(function(){
	$(this).animate({
		'left' : '100px',
		'button' : '100px',
		'font-size' : '24px'
	})
})

// vanilla JS: selector.classList.add('classToBeAdded')
// jQuery: selector.addClass('classTobeAdded')

// $("li").click(function(){
// 	$(this).addClass('done')

// })

// vanilla JS: selector.classList.remove('classToBeRemoved')
// jQuery: selector.removeClass('classTobeRemoved')

$("li").click(function(){
	$(this).addClass('done')
})

$("li").dblclick(function(){
	$(this).removeClass('done')
})

// selector.toggleClass("className")
// $("li").click(function(){
// 	$(this).toggleClass("done")
// })