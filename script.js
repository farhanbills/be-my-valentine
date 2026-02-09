
let messageIndex = 0;

const messages = [
  "No",
  "Are you sure binti halwa?",
  "Really sure amr jaan??",
  "wow so you dont love me anymore huh?",
  "so u saying u aint as crazy as I am for your love of your life. crazyyy",
  "I saw your ass wdym 😭",
  "Don't do me like this",
  "Pleaseeee",
  "I’m gonna cry fr. ki kharap",
  "Ok last chance…",
  "Bro…I love you frfr",
  "Aight you left me no choice 😤"
];

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

function handleNoClick() {
  // change NO text
  noBtn.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // make YES bigger each time
  const currentSize = parseFloat(getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = `${currentSize * 1.25}px`;

  // optional: make No slightly smaller so it gets bullied off the screen
  const noSize = parseFloat(getComputedStyle(noBtn).fontSize);
  noBtn.style.fontSize = `${Math.max(12, noSize * 0.97)}px`;
}

function handleYesClick() {
  window.location.href = "yes.html";
}

noBtn.addEventListener("click", handleNoClick);
yesBtn.addEventListener("click", handleYesClick);