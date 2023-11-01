
var numbers = document.querySelectorAll(".drum").length;

for (var i = 0; i < numbers; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonPressed = this.innerHTML;

        makesound(buttonPressed);
        animation(buttonPressed);

    });
}

document.addEventListener("keydown", function (events) {
    var keys = events.key;
    makesound(keys);
    animation(keys);
});



function makesound(buttons) {

    switch (buttons) {
        case 'w':
            var a = new Audio(".\\sounds\\crash.mp3");
            a.play();
            break;
        case 'a':
            var a = new Audio(".\\sounds\\kick-bass.mp3");
            a.play();
            break;
        case 's':
            var a = new Audio(".\\sounds\\snare.mp3");
            a.play();
            break;
        case 'd':
            var a = new Audio(".\\sounds\\tom-1.mp3");
            a.play();
            break;
        case 'j':
            var a = new Audio(".\\sounds\\tom-2.mp3");
            a.play();
            break;
        case 'k':
            var a = new Audio(".\\sounds\\tom-3.mp3");
            a.play();
            break;
        case 'l':
            var a = new Audio(".\\sounds\\tom-4.mp3");
            a.play();
            break;
        default:
            break;
    }
}

function animation(aniButton) {
    var ani = document.querySelector("." + aniButton);
    ani.classList.add("pressed");

    setTimeout(function () {
        ani.classList.remove("pressed");
    }, 100);
}



// var audio = new Audio(".\\sounds\\tom-1.mp3");
//         audio.play();

