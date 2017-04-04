window.addEventListener("load", onLoad);

function onLoad() {
  console.log("hey there")
}

window.setTimeout(myOtherFunc, 2000);

function myOtherFunc() {
  console.log("2s has elapsed");
  var colors = ["red", "blue", "green", "purple", "yellow", "orange", "#90c7fa"];

  var forms = document.getElementsByClassName("form");

  for(var i = 0; i < forms.length; i++) {
    var currentElement = forms[i];
    currentElement.style.backgroundColor = colors[i];
  }
}

var sizes = [100, 50, 90, 300];
var timesWeveSeenTheInterval = 0;

window.setInterval(myIntervalFunc, 1000);

function myIntervalFunc() {
  var forms = document.getElementsByClassName("form");

  var scaleByFactor = sizes[ timesWeveSeenTheInterval ];

  for(var i = 0; i < forms.length; i++) {
    var element = forms[i];

    var moveDownBy = Math.random() * 400 + 20;

    element.style.marginTop = moveDownBy + "px";
    element.style.width = scaleByFactor + "px";
    element.style.height = scaleByFactor + "px";
  }

  if(timesWeveSeenTheInterval == 2) {
    timesWeveSeenTheInterval = 0;
  } else {
    timesWeveSeenTheInterval++;
  }
}



window.addEventListener("mousemove", onMouseMove)

function onMouseMove(e) {
  var positionX = e.clientX;
  var positionY = e.clientY;

  document.getElementById("mouseX").innerHTML = positionX;
  document.getElementById("mouseY").innerHTML = positionY;

  moveDivs(positionX, positionY);
}

function moveDivs(x,y) {
  var divs = document.getElementsByTagName("p");
  var height = window.innerHeight;

  for(var i = 0; i < divs.length; i++) {
    divs[i].style.transform =
      "rotate(" + (x - 2*i) + "deg)";

    divs[i].style.filter = 
      "opacity(" + (y * 2 / height * i) + "px)";
  }
}

function afterLoad() {

  var button = document.getElementById("superbutton");
  button.addEventListener("click", onButtonClick);

  // store a reference to the div with the ID "canvas"
  var canvas = document.getElementById("canvas")

  for(var i = 0; i < 200; i++) {

    var el = document.createElement("div");
    el.classList.add("canvasDiv");

    // add class bluediv to elements
    // whose position index is even
    if(i % 2 == 0) {
      el.classList.add("bluediv");
    // add class "reddiv" to odd-numbered elements
    } else {
      el.classList.add("reddiv")
    }

    // insert the current element into the div
    // with the ID "canvas"
    canvas.appendChild( el );
  }
}

function onButtonClick(e) {
  e.preventDefault();
  var divs = document.getElementsByClassName("canvasdiv");
  var rotateBy = Math.random() * 360;
  var scaleBy = Math.random() * 2;
  
  for(var i = 0; i < divs.length; i++) {
    var currentDiv = divs[i];
    currentDiv.style.transform = "rotate(" + rotateBy + "deg) scale(" + scaleBy + "," + scaleBy + ")";
  }
}


