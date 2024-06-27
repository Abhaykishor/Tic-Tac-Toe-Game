window.addEventListener("load", bindEvents);
function bindEvents() {
  var buttons = document.getElementsByTagName("button");
  console.log(buttons);
  for (var i = 0; i < buttons.length; i++) {
    var currentButton = buttons[i];
    currentButton.addEventListener("click", printXorZero); //Event Binding
  }
}

//maintain a counter , to check if count goes
//>4 then check game over condition
var flag = true;
var counter = 0;
function printXorZero() {
  if (this.innerText.trim().length == 0 && !isGameOver()) {
    var buttonValue = flag ? "X" : "O";
    this.innerText = buttonValue;
    flag = !flag;
    counter++;
      if (isGameOver()) {
        alert(buttonValue + "wins");
        reset();
      } else if (counter === 9) {
        alert("DRAW");
        reset();
      }
  }
}

//function isGameOver() {
//In game over condition
function isGameOver() {
  var buttons = document.getElementsByTagName("button");
  var board = [];
  for (var i = 0; i < 9; i++) {
    board.push(buttons[i].innerText);
  }

  //1. row values are same
  // Check rows
  for (var i = 0; i < 9; i += 3) {
    if (board[i] && board[i] === board[i + 1] && board[i] === board[i + 2]) {
      return true;
    }
  }
  //2. cols values are same

  for (var i = 0; i < 3; i++) {
    if (board[i] && board[i] === board[i + 3] && board[i] === board[i + 6]) {
      return true;
    }
  }
  //3. diagonal values are same

  if (board[0] && board[0] === board[4] && board[0] === board[8]) {
    return true;
  }
  if (board[2] && board[2] === board[4] && board[2] === board[6]) {
    return true;
  }

  return false;
}

//function reset() {}
function reset() {
  var buttons = document.getElementsByTagName("button");
  for (var i = 0; i < buttons.length - 1; i++) {
    buttons[i].innerText = "";
  }
  flag = true;
  counter =0;
}

