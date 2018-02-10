

// Sets the number of stars we wish to display
const numStars = 100;

// For every star we want to display
for (let i = 0; i < numStars; i++) {
    let star = document.createElement("div");  
    star.className = "star";
    var xy = getRandomPosition();
    star.style.top = xy[0] + 'px';
    star.style.left = xy[1] + 'px';
    star.style.zIndex = -1;
    document.body.append(star);
}

// Gets random x, y values based on the size of the container
function getRandomPosition() {  
    var y = window.innerWidth;
    var x = window.innerHeight;
    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);
    return [randomX, randomY];
}


document.getElementById("go").onclick = function () {
    document.getElementById("crawl-details").style.display = "none";
    document.getElementById("crawl").style.display = "inline";

    var input = document.getElementById("audio-input");
    var audio = new Audio(input.value || input.placeholder);
    audio.oncanplaythrough = function() {

        var elements = ["intro", "logo", "title", "subtitle", "crawl"];

        elements.forEach(function(element) {
            var target = document.getElementById(element);
            var input = document.getElementById(element + "-input");
            target.innerHTML = input.value || input.placeholder;
        });

        document.getElementById("crawl-container").style.display = "block";
        audio.play();
    };
}
