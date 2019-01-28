var squares = document.querySelectorAll(".square");
var colorCode = document.querySelector("h1 span");
var heading = document.querySelector("h1");
var result = document.getElementById("result");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.getElementById("hard");
var numSquare = 6;

var colors = colorArray(numSquare);
var pickedColor = colors[random(numSquare)];
gameStart(numSquare);

easy.addEventListener("click", function(){
    numSquare = 3;
    easy.classList.add("selected");
    hard.classList.remove("selected");
    restart(numSquare);
})

hard.addEventListener("click", function(){
    numSquare = 6;
    hard.classList.add("selected");
    easy.classList.remove("selected");
    restart(numSquare);
})

reset.addEventListener("click", function(){
    restart(numSquare);
});

function gameStart(num) {
    colorCode.textContent = pickedColor;
    
    for (var i = 0; i < num; i++) {
        //step1: add initial colors to squares
        squares[i].style.backgroundColor = colors[i]; 
        //style.backgroundColor is more compatible for browsers than style.background
    
        //step2: add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to picked color
            console.log(clickedColor, pickedColor);
            if (clickedColor === pickedColor) {
                correct(clickedColor);
                result.textContent = "Correct!";
                heading.style.backgroundColor = clickedColor;
                reset.textContent = "Play Again";
            } else {
                this.style.backgroundColor = "black";
                result.textContent = "Try again!";
            }
        
        });
    }

    if (num === 3) {
        for (var i = 3; i < 6; i++) {
            squares[i].style.backgroundColor = "black";
        }
    }
}

function correct(color){
    for (var i = 0; i < numSquare; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function random(range) {
    //pick a random number 0 - size of Array;
    //return the color

    var ran = Math.floor(Math.random() * range);
    return ran;
}

function colorArray(size) {
    var arr = [];
    var code = "rgb(";
    for (var i = 0; i < size; i++) {
        code += random(256) + ", " + random(256) + ", " + random(256) + ")";
        console.log(code);
        arr[i] = code;
        var code = "rgb("
    }
    return arr;
}

function restart(num) {
    heading.style.backgroundColor = "cadetblue";
    reset.textContent = "New Colors"
    result.textContent = "";
    colors = colorArray(numSquare);
    pickedColor = colors[random(numSquare)];
    gameStart(num);
}