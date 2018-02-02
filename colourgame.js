var numSquare = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisp = document.getElementById("colorDisp");
var messageDisp = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")
var colorNames = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

init();

function init(){
  // mode buttons and event listeners
  setupModeButton();
  setupSquares();
  reset();
}

function setupSquares(){
  for(var i = 0; i < squares.length; i++){
    // add click listeners to squares
    squares[i].addEventListener("click", function(){
      //get color of square
      var clickedColor = this.style.backgroundColor;
      // compare
      if(clickedColor === pickedColor){
        messageDisp.textContent = "Winner!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      }else {
        this.style.backgroundColor = "#232323";
        messageDisp.textContent = "Try Again";
      }
    });
  }
}
function setupModeButton(){
  for (var i = 0; i <modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected")
      this.textContent === "Easy" ? numSquare = 3: numSquare = 6;
      reset();
    });
  }
}
function reset(){
  colors = generateRandomColors(numSquare);
  // pick a new random color from array
  pickedColor = pickColor();
  // change colorDisp to match picked color
  colorDisp.textContent = pickedColor;
  // change message display
  messageDisp.textContent = "";
  // change reset button to "new color"
  resetButton.textContent = "New Colors";
  // change colors of squares
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
  reset();
});


function changeColors(color){
  // loop through all squares
  for(var i = 0; i < squares.length; i++){
    // change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}
function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generateRandomColors(num){
  // make an array
  var arr= [];
  //add num random colors to arr
  for(var i = 0; i < num; i++){
    // get random color and push into array
    arr.push(randomColor());

  }
  //return that array
  return arr;
}

function randomColor(){
  var c = Math.floor(Math.random() * colorNames.length -1);
  return "rgb(" c")";
//   // pick a "red" from 0 - 255
//   var r = Math.floor(Math.random() * 256);
//   // pick a "blue" from 0 - 255
//   var g = Math.floor(Math.random() * 256);
//   // pick a "green" from 0 - 255
//   var b = Math.floor(Math.random() * 256);
//   return "rgb(" + r + ", " + g + ", " + b + ")";
  }
