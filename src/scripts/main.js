'use strict';

function bullsAndCowsGame() {
  let generatedValue = [];

  for (let i = 0; i < 4; i++) {
    const value = Math.floor(Math.random() * 10);

    if (!generatedValue.includes(value)) {
      generatedValue.push(value);
    } else {
      i--;
    }
  }
  generatedValue = generatedValue.join('');
  // console.log(generatedValue);

  let bufer = 'Enter your Number \n';

  while (bufer) {
    const personInput = prompt(bufer);
    const checkValue = startGame(personInput, generatedValue);

    if (checkValue === null) {
      bufer = null;
    } else {
      bufer += checkValue + '\n';
    }
  };
}

bullsAndCowsGame();

function startGame(inputValue, generatedValue) {
  let bulls = 0;
  let cows = 0;

  const inVaildValue = () => {
    const valueUnicItems = new Set(inputValue);

    if (inputValue.length !== valueUnicItems.size) {
      return true;
    }

    if (!isFinite(inputValue) || String(inputValue).length
      !== String(generatedValue).length) {
      return true;
    }
  };

  if (inputValue === null) {
    alert('End game');

    return null;
  }

  if (inVaildValue()) {
    return `invaild value`;
  } else {
    for (let i = 0; i < inputValue.length; i++) {
      if (generatedValue.includes(inputValue[i])) {
        if (generatedValue[i] === inputValue[i]) {
          bulls++;
        } else {
          cows++;
        }
      }
    }

    if (bulls === String(generatedValue).length) {
      alert('victory!');

      return null;
    }
    // Я дорбавил отыет в вывод, что бы было удобнее проверят
    // правильно ли рабоатет

    return (
      `Your value is ${inputValue
      || undefined}; bulls: ${bulls}, cows: ${cows}  ${generatedValue}`
    );
  }
}
