const tries = 5;
let i = 0;
let guess;
const target = Math.floor(Math.random() * 11);
while (i < tries) {
  console.log(target);
  guess = prompt(`guess the number! \n you have ${tries - i} tries left`);
  if (guess == target) {
    alert(`congrats you found the random integer, it's ${target}`);
    break;
  } else if (guess < target) {
    alert(
      "the number you're trying to guess is larger!!! try again if you can"
    );
    i++;
  } else {
    alert(
      "the number you're trying to guess is smaller!!! try again if you can"
    );
    i++;
  }
}
if (guess != target) {
  alert(`the correct answer was ${target}. YOU FOOL!!!!`);
}
