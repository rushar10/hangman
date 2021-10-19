const alphabets = document.querySelector(".alphabets");
const blankSpace = document.getElementById("secret-word");
const countDown = document.getElementById("count-number");
const winLoseContainer = document.querySelector(".win-lose-container");
const statusOfEndGame = document.getElementById("game-status");
const playAgainBtn = document.getElementById("play-again");

const words = [
  "sausage",
  "blubber",
  "pencil",
  "cloud",
  "moon",
  "water",
  "computer",
  "school",
  "network",
  "hammer",
  "walking",
  "violently",
  "mediocre",
  "literature",
  "chair",
  "two",
  "window",
  "cords",
  "musical",
  "zebra",
  "xylophone",
  "penguin",
  "home",
  "dog",
  "final",
  "ink",
  "teacher",
  "fun",
  "website",
  "banana",
  "uncle",
  "softly",
  "mega",
  "ten",
  "awesome",
  "attatch",
  "blue",
  "internet",
  "bottle",
  "tight",
  "zone",
  "tomato",
  "prison",
  "hydro",
  "cleaning",
  "telivision",
  "send",
  "frog",
  "cup",
  "book",
  "zooming",
  "falling",
  "evily",
  "gamer",
  "lid",
  "juice",
  "moniter",
  "captain",
  "bonding",
  "loudly",
  "thudding",
  "guitar",
  "shaving",
  "hair",
  "soccer",
  "water",
  "racket",
  "table",
  "late",
  "media",
  "desktop",
  "flipper",
  "club",
  "flying",
  "smooth",
  "monster",
  "purple",
  "guardian",
  "bold",
  "hyperlink",
  "presentation",
  "world",
  "national",
  "comment",
  "element",
  "magic",
  "lion",
  "sand",
  "crust",
  "toast",
  "jam",
  "hunter",
  "forest",
  "foraging",
  "silently",
  "tawesomated",
  "joshing",
  "pong",
];
let game_score = 10;
const allAlphabets = "abcdefghijklmnopqrstuvwxyz";
let secretWord = randomWords(words);
let guessWord = [];
let gameStatus = "";

window.addEventListener("DOMContentLoaded", () => {
  displayAlphabets();
  life(game_score);
  game();
});
playAgainBtn.addEventListener("click", playAgain);

function displayAlphabets() {
  for (let alphabet of allAlphabets) {
    alphabets.innerHTML += `<button class="alphabet" data-id=${alphabet}>${alphabet}</button>`;
  }
  const alphabetClass = document.querySelectorAll(".alphabet");
  alphabetClass.forEach((letter) => {
    letter.addEventListener("click", getValue);
  });
}

function getValue(e) {
  const guessed = e.currentTarget.dataset.id;
  game(guessed);
}
function game(guessed) {
  if (!guessed) {
    for (let i = 0; i < secretWord.length; i++) {
      guessWord[i] = "_";
    }
  } else if (secretWord.includes(guessed)) {
    let count = 0;
    for (let word of secretWord) {
      if (guessed === word) {
        guessWord[count] = word;
      }
      count++;
    }
  } else {
    game_score--;
  }
  blankSpace.textContent = guessWord.join(" ");
  if (guessWord.join("") == secretWord) {
    gameStatus = "Win!!!!";
    endGame(gameStatus);
  } else if (game_score == 0) {
    gameStatus = "Lose????";
    endGame(gameStatus);
  }
  life(game_score);
}

function life(n) {
  countDown.textContent = n;
}

function endGame(status) {
  winLoseContainer.classList.add("show-container");
  statusOfEndGame.textContent = status;
}

function playAgain() {
  game_score = 10;
  guessWord = [];
  gameStatus = "";
  winLoseContainer.classList.remove("show-container");
  statusOfEndGame.textContent = gameStatus;
  secretWord = randomWords(words);
  game();
}

function randomWords(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
