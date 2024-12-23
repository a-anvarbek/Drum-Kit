// 

// 
var buttons = document.querySelectorAll(".drum");

document.querySelector(".w").addEventListener("click", function(){
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
})

document.querySelector(".a").addEventListener("click", function(){
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
})

document.querySelector(".s").addEventListener("click", function(){
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
})

document.querySelector(".d").addEventListener("click", function(){
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
})

document.querySelector(".j").addEventListener("click", function(){
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
})

document.querySelector(".k").addEventListener("click", function(){
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
})

document.querySelector(".l").addEventListener("click", function(){
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
})


// var buttons = document.querySelectorAll(".drum");

// var wSound = new Audio("sound/crash.mp3");
// var aSound = new Audio("sound/kick-bass.mp3");
// var sSound = new Audio("sound/snare.mp3");
// var dSound = new Audio("sound/tom-1.mp3");
// var jSound = new Audio("sound/tom-2.mp3");
// var kSound = new Audio("sound/tom-3.mp3");
// var lSound = new Audio("sound/tom-4.mp3");

// var letters = [wSound, aSound, sSound, dSound, jSound, kSound, lSound];

// for(var i= 0; i < buttons.length; i++){
//     buttons[i].onclick = letters[i].play()
// }