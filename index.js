const buttons = document.querySelectorAll(".butt");
const selector_player = document.querySelectorAll(".select");
const winner_dispaly = document.querySelector(".winner-info.hide");
const new_game_button = document.querySelector(".new-game");
const reset_button = document.querySelector(".reset");
const note = document.querySelector(".note.noteshide");
console.log(note);

const winnerCondition = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
console.log(buttons);

let choice = ["X", "O"];
note.classList.remove("noteshide");

selector_player.forEach((selection) => {
  selection.addEventListener("click", () => {
    note.classList.add("noteshide");
    player_selection = selection.innerText;
    console.log(player_selection);
    selection.disabled = true;

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        while (button.disabled != true) {
          if (player_selection === "X") {
            button.innerText = player_selection;
            player_selection = "O";
          } else if (player_selection === "O") {
            button.innerText = player_selection;
            player_selection = "X";
          }

          // if (!checkWinner()) {
          //   winner_dispaly.innerText = " Its about to Draw";
          // }
          checkWinner();
          button.disabled = true;
        }
      });
    });
  });
});

const disableButton = () => {
  for (let button of buttons) {
    button.disabled = true;
  }
};
reset();

const checkWinner = () => {
  for (let pattern of winnerCondition) {
    // console.log(pattern);
    let posititon1 = buttons[pattern[0]].innerText;
    let posititon2 = buttons[pattern[1]].innerText;
    let posititon3 = buttons[pattern[2]].innerText;
    console.log(posititon1, posititon2, posititon3);

    if (posititon1 != "" && posititon2 != "" && posititon3 != "") {
      if (posititon1 === posititon2 && posititon2 === posititon3) {
        console.log(`winner is ${posititon1}`);
        winner_dispaly.innerText = `Winner is "${posititon1}"`;
        winner_dispaly.classList.remove("hide");
        disableButton();
        buttons[pattern[0]].classList.add("line");
        buttons[pattern[1]].classList.add("line");
        buttons[pattern[2]].classList.add("line");
      }
    }
  }
};

function checkDraw() {
  buttons.forEach((button) => {
    if (button.innerText != "") {
      return (winner_dispaly.innerText = "Draw");
    }
  });
}

function reset() {
  reset_button.addEventListener("click", () => {
    // note.classList.remove("noteshide");
    buttons.forEach((button) => {
      button.innerHTML = "";
      button.disabled = false;
      button.classList.remove("line");
      winner_dispaly.innerHTML = "";

      selector_player.forEach((selection) => {
        selection.disabled = false;
      });
    });
  });
}
