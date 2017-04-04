window.addEventListener( "load", afterLoad );

function afterLoad() {

  var button = document.getElementById("superbutton");

  button.addEventListener("click", onButtonClick);

  window.addEventListener("mousemove", onMouseMove);

  var canvas = document.getElementById("canvas")

	for(var i = 0; i < 200; i++) {

		var el = document.createElement("div");
    el.classList.add("canvasDiv");


		if(i % 2 == 0) {
			el.classList.add("bluediv");
		} 

    else {
			el.classList.add("reddiv")
		}


		canvas.appendChild( el );
	}
}

function onButtonClick(e) {
  e.preventDefault();

  //adding class "clicked to "canvas" div
  document.getElementById("canvas").classList.add('clicked');

  var divs = document.getElementsByClassName("canvasdiv");

  var rotateBy = Math.random() * 360;
  var scaleBy = Math.random() * 2;
  
  for(var i = 0; i < divs.length; i++) {
    var currentDiv = divs[i];
    currentDiv.style.transform = "rotate(" + rotateBy + "deg) scale(" + scaleBy + "," + scaleBy + ")";
  }
}

function onMouseMove(e) {
  e.preventDefault();

  // remove class "clicked" to "canvas" div

  document.getElementById("canvas").classList.remove('clicked');

  var divs = document.getElementsByClassName("canvasdiv");

  var rotateBy = e.clientY * -1;
  var scaleBy = e.clientX / 500 % -4 - Math.sin(16);

  console.log ("rotate: " + rotateBy);

  console.log ("scale: " + scaleBy);
  
  for(var i = 0; i < divs.length; i++) {
    var currentDiv = divs[i];
    currentDiv.style.transform = "rotate(" + rotateBy + "deg) scale(" + scaleBy + "," + scaleBy + ")";
  }
}


