function rollDice() {
  const dice = document.getElementById('dice').value;
  const result = Math.floor(Math.random() * dice) + 1;
  document.getElementById('diceResult').innerHTML = `<span>${result}</span>`;
}
