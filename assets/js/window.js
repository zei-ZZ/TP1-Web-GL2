const tries = 5;
let i = 0;
let guess;
const target = Math.floor(Math.random() * 11);
while (i < tries) {
  console.log(target);
  guess = prompt(
    `guess the number! \n you have ${
      tries - i
    } tries left in your pockety pocket`
  );
  if (guess == target) {
    alert(`congrats you found the random integer, it's ${target}`);
    break;
  } else {
    alert("you were wrong! try again if you can");
    i++;
  }
}
if (guess != target) {
  alert(`the correct answer was ${target}. YOU FOOL!!!!`);
}
