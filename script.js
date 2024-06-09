function rollDice() {
  const dice = document.getElementById('dice').value;
  const result = Math.floor(Math.random() * dice) + 1;
  document.getElementById('result').innerText = `Resultado: ${result}`;
}
