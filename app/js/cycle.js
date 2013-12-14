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

autoCycle();
var counter=setInterval(autoCycle, 1000);

function cycleUp(square){
  clearInterval(counter);
  var x = cycle.shift();
  while(x !== square.className){
    cycle.push(x);
    x = cycle.shift();
  }
  cycle.push(x);
  square.className = cycle[0];
}

function cycleDown(square){
  clearInterval(counter);
  var x = cycle.shift();
  while(x !== square.className){
    cycle.push(x);
    x = cycle.shift();
  }
  cycle.push(x);
  square.className = cycle[6];
}

function autoCycle(){
  var rand = cycle[Math.floor(Math.random()*cycle.length)];
  s1.className = rand;
  rand = cycle[Math.floor(Math.random()*cycle.length)];
  s2.className = rand;
  rand = cycle[Math.floor(Math.random()*cycle.length)];
  s3.className = rand;
  rand = cycle[Math.floor(Math.random()*cycle.length)];
  s4.className = rand;
}