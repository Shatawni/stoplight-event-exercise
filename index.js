var redButton = document.getElementById("stopButton");
var yellowButton = document.getElementById("slowButton");
var greenButton = document.getElementById("goButton");

var redLight = document.getElementById("stopLight");
var yellowLight = document.getElementById("slowLight");
var greenLight = document.getElementById("goLight");

// YOUR CODE HERE
var greenClicks = 0;
var redClicks = 0;
var yellowClicks = 0;

redButton.addEventListener("click", function () {
  if (redClicks % 2 === 0) {
    redLight.style.background = "red";
    console.log("bulb on");
  } else {
    redLight.style.backgroundColor = "black";
    console.log("bulb off");
  }
  redClicks++;
});
redButton.addEventListener("mouseenter", function () {
  console.log("Entered <textContent> button");
});
redButton.addEventListener("mouseleave", function () {
  console.log("Left <textContent> button");
});

yellowButton.addEventListener("click", function () {
  if (yellowClicks % 2 === 0) {
    yellowLight.style.background = "yellow";
    console.log("bulb on");
  } else {
    yellowLight.style.backgroundColor = "black";
    console.log("bulb off");
  }
  yellowClicks++;
});
yellowButton.addEventListener("mouseenter", function () {
  console.log("Entered <textContent> button");
});
yellowButton.addEventListener("mouseleave", function () {
  console.log("Left <textContent> button");
});

greenButton.addEventListener("click", function () {
  if (greenClicks % 2 === 0) {
    greenLight.style.background = "green";
    console.log("bulb on");
  } else {
    greenLight.style.backgroundColor = "black";
    console.log("bulb off");
  }
  greenClicks++;
});
greenButton.addEventListener("mouseenter", function () {
  console.log("Entered <textContent> button");
});
greenButton.addEventListener("mouseleave", function () {
  console.log("Left <textContent> button");
});
