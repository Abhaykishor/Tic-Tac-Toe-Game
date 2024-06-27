window.addEventListener("load", bindEvents);

var flag = true;
var counter = 0;

function bindEvents() {
  var buttons = document.getElementsByTagName("button");
  console.log(buttons);
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      if (this.innerText.trim().length == 0 && !gameOver()) {
        var buttonValue = flag ? "X" : "O";
        this.innerText = buttonValue;
        flag = !flag;
        counter++;

        if (gameOver()) {
          setTimeout(function () {
            alert(buttonValue + " wins!");
            reset();
          }, 50); // Delay to ensure button text updates before alert
        } else if (counter === 9) {
          setTimeout(function () {
            alert("It's a draw!");
            reset();
          }, 50); // Delay to ensure button text updates before alert
        }
      }
    });
  }
}

function gameOver() {
  var buttons = document.getElementsByTagName("button");
  var board = [];
  for (var i = 0; i < buttons.length; i++) {
    board.push(buttons[i].innerText);
  }

  // Check rows
  for (var i = 0; i < 9; i += 3) {
    if (board[i] && board[i] === board[i + 1] && board[i] === board[i + 2]) {
      return true;
    }
  }

  // Check columns
  for (var i = 0; i < 3; i++) {
    if (board[i] && board[i] === board[i + 3] && board[i] === board[i + 6]) {
      return true;
    }
  }

  // Check diagonals
  if (board[0] && board[0] === board[4] && board[0] === board[8]) {
    return true;
  }
  if (board[2] && board[2] === board[4] && board[2] === board[6]) {
    return true;
  }

  return false;
}

function reset() {
  var buttons = document.getElementsByTagName("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].innerText = "";
  }
  flag = true;
  counter = 0;
}
