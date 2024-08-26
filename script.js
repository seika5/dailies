function roll(num) {
  let challenges = 
  [
    "Physically Touch Grass",
    "Have Breakfast",
    "No High Sugar Drinks",
    "Have Salad",
    "College Applications",
    "exc1"
  ]
  let rolled = ["", "", "", ""];
  for (let i = 0; i < num; i++) {
    let idx = Math.floor(Math.random()*challenges.length);
    if (challenges[idx] == "exc1") {
      rolled[i] = Math.random() < 0.5 ? "Late Night Exercise" : "In Bed Before 0000";
    } else {
      rolled[i] = challenges[idx];
    }
    challenges.splice(idx, 1);
  }
  displayRoll(rolled);
}

function displayRoll(chal) {
  document.getElementById("display1").innerHTML=chal[0];
  document.getElementById("display2").innerHTML=chal[1];
  document.getElementById("display3").innerHTML=chal[2];
  document.getElementById("display4").innerHTML=chal[3];

  let buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.style.display = 'none';
  });

  let containers = document.querySelectorAll('div.container');
  containers.forEach(container => {
    container.style.border = 'solid white 1px';
  });
}