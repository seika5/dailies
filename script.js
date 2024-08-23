function roll(num) {
  let challenges = 
  [
    "Physically Touch Grass",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ]
  let rolled = ["", "", "", ""];
  for (let i = 0; i < num; i++) {
    let idx = Math.floor(Math.random()*challenges.length);
    rolled[i] = challenges[idx];
    challenges.splice(idx, 1);
  }
  displayRoll(rolled);
}

function displayRoll(chal) {
  document.getElementById("display1").innerHTML=chal[0];
  document.getElementById("display2").innerHTML=chal[1];
  document.getElementById("display3").innerHTML=chal[2];
  document.getElementById("display4").innerHTML=chal[3];
}