let back_mtn = document.getElementById("back-mtn");
let mid_mtn = document.getElementById("middle-mtn");
let front_mtn = document.getElementById("front-mtn");
let trees_back = document.getElementById("trees-back");
let left_pines = document.getElementById("left-pines");
let oak_right = document.getElementById("oak-right");
let grass = document.getElementById("grass");
let text = document.getElementById("home-div");
let header = document.querySelector("header");
let dino = document.getElementById("dino-runs");
let dino_container = document.getElementById("dino");
let dino_div = document.getElementById("dino-entrance");
let i = 0;

function disableScrolling(){
  var x=window.scrollX;
  var y=window.scrollY;
  window.onscroll=function(){window.scrollTo(x, y);};
}

window.addEventListener('scroll', function() {
  let scroll_value = window.scrollY;
  let window_height = window.innerHeight;
  let window_width = window.innerWidth;
  back_mtn.style.left = scroll_value * .4 + 'px';
  mid_mtn.style.right = scroll_value * .6 + 'px';
  front_mtn.style.left = scroll_value * .4 +'px';
  left_pines.style.right = scroll_value * .4 + 'px';
  oak_right.style.left = scroll_value * .4 + 'px';
  text.style.top = scroll_value * .4 +'px';
  document.querySelector("header").style.transform = `translateY(${scroll_value * .5}px)`;
  document.querySelector(".home-div").style.transform = `translateY(${scroll_value *
  .6}px)`;
  
  let dino_div_pos = dino_div.getBoundingClientRect();
  if (dino_div_pos.top > window_height/2 && dino_div_pos.top < window_height/2 + 50) {
    dino.style.visibility = "visible";
  }


  let moveInterval;
  console.log(dino.getBoundingClientRect.left);
  function moveRight() {
    moveInterval = setInterval(moveFunc, 100);
  }

  function moveFunc() {
    i += 1;
    dino.style.left = i + 'px';
  }

  function stopMoveRight() {
    clearInterval(moveInterval);
  }

  if (dino_div_pos.top < 20 && dino_div_pos.top > -20) {
    console.log("reached");
    moveRight();
  }
  if (dino.style.left > window_width/2) {
    stopMoveRight();
  }
})




const onScrollStop = (callback) => {
  let isScrolling;
  window.addEventListener(
    "scroll", 
  (e) => {
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
      callback();
    }, 300);
  },
  false
)}

onScrollStop(() => { 
  console.log("stopped");
})


document.onreadystatechange = function() {
  if (document.readyState != "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  }
  else {
    document.querySelector("body").style.visibility = "visible";
    document.querySelector("#loader").style.visibility = "hidden";
  }
}