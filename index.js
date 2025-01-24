var k = document.querySelectorAll(".drum");
for (var i = 0; i < k.length; i++) {
    k[i].addEventListener("click", function() {
        var item = this.textContent;
        switch (item) {
            case "w":
                var wAudio = new Audio("sounds/crash.mp3");
                wAudio.play();
                break;
            case "a":
                var aAudio = new Audio("sounds/kick-bass.mp3");
                aAudio.play();
                break;
            case "s":
                var sAudio = new Audio("sounds/snare.mp3");
                sAudio.play();
                break;
            case "d":
                var dAudio = new Audio("sounds/tom-1.mp3");
                dAudio.play();
                break;
            case "j":
                var jAudio = new Audio("sounds/tom-2.mp3");
                jAudio.play();
                break;
            case "k":
                var kAudio = new Audio("sounds/tom-3.mp3");
                kAudio.play();
                break;
            case "l":
                var lAudio = new Audio("sounds/tom-4.mp3");
                lAudio.play();
                break;
            default:
                console.log("enter a correct button");
        }
        // var myAudio = new Audio("sounds/crash.mp3");
        // myAudio.play();
    })
}