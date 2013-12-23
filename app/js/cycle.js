// up arrows
var u1 = document.getElementById("arrow-up-1");
var u2 = document.getElementById("arrow-up-2");
var u3 = document.getElementById("arrow-up-3");
var u4 = document.getElementById("arrow-up-4");

// down arrows
var d1 = document.getElementById("arrow-down-1");
var d2 = document.getElementById("arrow-down-2");
var d3 = document.getElementById("arrow-down-3");
var d4 = document.getElementById("arrow-down-4");

// squares
var s1 = document.getElementById("square-1");
var s2 = document.getElementById("square-2");
var s3 = document.getElementById("square-3");
var s4 = document.getElementById("square-4");

var cycle = ["round-rect round-rect-pink", "round-rect round-rect-red",
             "round-rect round-rect-orange", "round-rect round-rect-yellow",
             "round-rect round-rect-light_green", "round-rect round-rect-green",
             "round-rect round-rect-blue", "round-rect round-rect-purple"];

u1.onclick=function() {cycleUp(s1)};
u2.onclick=function() {cycleUp(s2)};
u3.onclick=function() {cycleUp(s3)};
u4.onclick=function() {cycleUp(s4)};

d1.onclick=function() {cycleDown(s1)};
d2.onclick=function() {cycleDown(s2)};
d3.onclick=function() {cycleDown(s3)};
d4.onclick=function() {cycleDown(s4)};

randomize_colors();
var counter=setInterval(randomize_colors, 1000);

// changes color of square to next color
function cycleUp(square){
  clearInterval(counter);
  var x = cycle.shift();
  while(x !== square.className){
    cycle.push(x);
    x = cycle.shift();
  }
  cycle.push(x);
  square.className = cycle[0];
  updateSubmitButton();
}

// changes color of square to prev color
function cycleDown(square){
  clearInterval(counter);
  var x = cycle.shift();
  while(x !== square.className){
    cycle.push(x);
    x = cycle.shift();
  }
  cycle.push(x);
  square.className = cycle[6];
  updateSubmitButton();
}

// randomizes all 4 colors
function randomize_colors(){
  var rand = cycle[Math.floor(Math.random()*cycle.length)];
  s1.className = rand;
  rand = cycle[Math.floor(Math.random()*cycle.length)];
  s2.className = rand;
  rand = cycle[Math.floor(Math.random()*cycle.length)];
  s3.className = rand;
  rand = cycle[Math.floor(Math.random()*cycle.length)];
  s4.className = rand;
}

// gets code corresponding to the configuration of colors in the 4
// squares
function getColorCode(){
  var key = { 'pink' : '1',
              'red' : '2',
              'orange' : '3',
              'yellow' : '4',
              'light_green' : '5',
              'green' : '6',
              'blue' : '7',
              'purple' : '8' };
  var a = s1.className.split('-');
  var digit1 = key[a.pop()];
  var b = s2.className.split('-');
  var digit2 = key[b.pop()];
  var c = s3.className.split('-');
  var digit3 = key[c.pop()];
  var d = s4.className.split('-');
  var digit4 = key[d.pop()];
  return digit1 + digit2 + digit3 + digit4;
}

// updates the link within submit-button according to the current
// color combination
function updateSubmitButton() {
  var submitButton = document.getElementById("submit-button");
  submitButton.outerHTML = '<a href="#/' + CryptoJS.SHA1(getColorCode()) + '" type="button" class="btn btn-success" id="submit-button">Enter</a>';
}
