'use strict';

function bullsAndCowsGame() {
  const generedVelue = String(Math.round(Math.random() * 10000));

  let boofer = 'Enter your Number \n';

  while (boofer) {
    const personInput = prompt(boofer);
    const checkValue = startGame(personInput, generedVelue);

    if (checkValue === null) {
      boofer = null;
    } else {
      boofer += checkValue + '\n';
    }
  };
}

bullsAndCowsGame();

function startGame(inputValue, generedVelue) {
  let bulls = 0;
  let cows = 0;

  if (inputValue === null) {
    alert('End game');

    return null;
  }

  if (!isFinite(inputValue) || String(inputValue).length
    !== String(generedVelue).length) {
    return `invaild value`;
  } else {
    for (let i = 0; i < inputValue.length; i++) {
      if (generedVelue.includes(inputValue[i])) {
        if (generedVelue[i] === inputValue[i]) {
          bulls++;
        } else {
          cows++;
        }
      }
    }

    if (bulls === String(generedVelue).length) {
      alert('victory!');

      return null;
    }
    // Я дорбавил отыет в вывод, что бы было удобнее проверят
    // правильно ли рабоатет

    return (
      `Your value is ${inputValue
      || undefined}; bulls: ${bulls}, cows: ${cows}  ${generedVelue}`
    );
  }
}
