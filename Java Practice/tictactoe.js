const gameBoard = document.getElementsById("gameboard");
const restartButton = document.getElementsById("restartButton");
const playButton = document.getElementsById("playButton");
const Oletter = "O";
const Xletter = "X";
const boxes = document.getElementsById("boxes");
const spaces = [null, null,null, null, null, null, null, null, null];
let humnaPlayer = Xletter;



  
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  function handleResult() {
    let roundWon = false;
    for(let i = 0; i <= 7; i++) {
      const winningCondiion = winningConditions[i]
      let a = spaces[winningCondiion[0]];
      let b = spaces[winningCondiion[1]];
      let c = spaces[winningCondiion[2]];
      if(a === " || b === " || c === "") {
        continue;
      }
      if(a === b && b === c) {
        roundWon = true;
        break
      }
    }
  }
  


  const gameBoard = () => {
    boxes.forEach((box, index) => {
      let styleString = "";
      if (index < 3) {
        styleString += `border-bottom: 3px solid var(--pink);`;
      }
      if (index % 3 === 0) {
        styleString += `border-right: 3px solid var(--pink);`;
      }
      if (index % 3 === 2) {
        styleString += `border-left: 3px solid var(--blue);`;
      }
      if (index > 5) {
        styleString += `border-top: 3px solid var(--blue);`;
      }
      box.style = styleString;
  
      box.addEventListener("click", boxClicked);
    });
  };

  






  restartButton.addEventListener("click", () => {
    spaces.forEach((space, index) => {
      spaces[index] = null;
    });
    boxes.forEach((box) => {
      box.innerText = "";
    });
    playButton.innerText = `Play!!`;

    var scoreBoard = {X: 0, O:0};
function scoreBoard (winner) {
    if (++scoreBoard[winner]==3) {
        setMessage("Game over! " + winner + " has won three matches");
    }
}
  
    currentPlayer = Oletter;
  });

  gameBoard();

  