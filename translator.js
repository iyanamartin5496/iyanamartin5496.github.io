var alphabet = "abcdefghijklmnopqrstuvwxyz"; 
var letter_array = []; 
for(i = 0; i < alphabet.length; i++) {
	letter_array.push(alphabet[i]);
}

letter_array.forEach(make_a_div);

function make_a_div(el, ix) {
	//el is element
	//ix is numerical index
	var newdiv = document.createElement("div");
	newdiv.classList.add("letter", "dim");
	var image = document.createElement("img");

	image.src = "signImages/asl_" + el + ".gif"

	newdiv.id = el; 

	newdiv.appendChild(image);
	document.querySelector(".saranwrap").appendChild(newdiv);


}

// for (i = 0; i < 26; i++) {
// 	console.log(alphabet[i]);
// 	var newdiv = document.createElement("div");
// 	var image = document.createElement("img");

// 	image.src = "images/asl_" + "???" + ".gif"
// 	newdiv.appendChild(image);
// 	document.body.appendChild(newdiv);
// }



var textfield = document.querySelector("#enteredText");
var submitbutton = document.querySelector("#textSubmit");

submitbutton.addEventListener("click", do_stuff);

textfield.addEventListener("keydown", keyboard);

var letterboxes = document.querySelectorAll(".letter");

// for (var i = 0; 1 < letterboxes.length; i++) {
// 	console.log(letterboxes[i]);
// }





//tracking mouse



 letterboxes.forEach(
	function(element, index) {
// 		element.addEventListener("mousemove", log_x_and_y)
	element.addEventListener("mouseover", undim);
	element.addEventListener("mouseleave", redim);
	element.addEventListener("click", figure_out_letter);
 	});

 function figure_out_letter(event) {
 	var source = event.target.src;
 	var search = source.match(/asl_(.)/); 
 	the_wanted_letter = search[1];

 	event.target.parentElement.classList.add(the_wanted_letter);

 	document.querySelector(".output p.clickedletters").textContent += the_wanted_letter; 

 	console.log(the_wanted_letter);
 }



 function undim(event) {
 	var whichone = event.target.parentElement; 
 	whichone.classList.remove("dim");
 }

 function redim(event) {
 	var whichone = event.target; 
 	whichone.classList.add("dim");
 }

 




// function log_x_and_y(event){
// 	var	x = event.offsetX;
// 	var y = event.offsetY;

// 	document.querySelector(".output p.x").textContent = x;
// 	document.querySelector(".output p.y").textContent = y;
// 	document.querySelector(".output p.y").setAttribute("style","top:" + y + "px");

// 	}


var the_four_letters = [];

function keyboard(the_event){

	var input_string = textfield.value;

	for (var i = 0; i ,input_string.length; i++) {
		var found = document.querySelector("#" + input_string[i]);
		found.classList.remove("dim");
		// document.querySelector("")
	}

	// console.log(the_event.key);

	// var image_array=(document.querySelectorAll(".letter img"));

	// the_four_letters.push(the_event.key);

	// for (var i = 0; i < 4; i++) {
	// 	var the_file_i_want = "asl_" + the_four_letters[i] + ".gif";

	// 	if (typeof the_four_letters[i]=="undefined"){
	// 		image_array[i].classList.add("hidden");

	// 	}

		// console.log(image_array[i].classList.add);
		// image_array[i].src = "images/" + the_file_i_want;

		// console.log(the_file_i_want);
	}


function do_stuff() {
	var input_string = textfield.value;

	var the_four_letters = [];

	for (var counter = 0; counter < 4; counter++) {
		// console.log("this is loop #" + counter);
		the_four_letters.push(input_string.charAt(counter));
		// console.log(the_four_letters);
		// console.log("--- loop over! ---");
	}

	var image_array=(document.querySelectorAll(".letter img"));

	for (var i = 0; i < 4; i++) {
		var the_file_i_want = "asl_" + the_four_letters[i] + ".gif";

		image_array[i].src = "signImages/" + the_file_i_want;

		// console.log(the_file_i_want);
	}


	// console.log(the_four_letters);
	// console.log("-----------------");
	// console.log(input_string);	
	// console.log(input_string.charAt(0));

	
}