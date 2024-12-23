// EVENT LISTENER

document.querySelector("button").addEventListener("click", handleButtonClick);

function handleButtonClick() {
  console.log("hello world");
}

// anonymous
// document.querySelector("button").addEventListener("click", function () {
//   console.log("hey");
// });

var buttons = document.querySelectorAll(".drum");

for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        console.log("clicked:");
    });
}

var crashSound = new Audio("/sounds/crash.mp3");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    crashSound.play();
  });
}
