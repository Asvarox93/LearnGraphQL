const Quotes = require("inspirational-quotes");

const rootValue = () => {
  rootValue.calledTimes++;
  const today = new Date();
  const DAYS_OF_WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const DOGS_NAMES = ["Mittens", "Doggo", "Birb"];

  const getRandomDiceThrow = (sides) => Math.ceil(Math.random() * sides);

  const getFewRandomDiceThrows = (sides) => {
    const throwsNumber = Math.floor(Math.random() * (7 - 3 + 1)) + 3;
    const throwArray = [];
    for (let i = 0; i < throwsNumber; i++) {
      throwArray.push(getRandomDiceThrow(sides));
    }
    return throwArray;
  };

  const randomCoinToss = () => Math.random() > 0.5;

  const getRandomCoinTossesUntilTrue = () => {
    const result = [];
    do {
      result.push(randomCoinToss());
    } while (!result[result.length - 1]);
    return result;
  };

  const getEulersSeries = () => {
    const result = [];
    for (let i = 1; i <= 1000; i++) {
      result.push(Math.pow(1 + 1 / i, i));
    }
    return result;
  };

  const getGoingOutDogsInfo = () => {
    const result = [];

    DAYS_OF_WEEK.forEach((item) => {
      const randomDogNumber = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
      if (result[randomDogNumber] !== undefined) {
        result[randomDogNumber] = {
          name: DOGS_NAMES[randomDogNumber],
          outDay: [item, ...result[randomDogNumber].outDay],
        };
      } else {
        result[randomDogNumber] = {
          name: DOGS_NAMES[randomDogNumber],
          outDay: [item],
        };
      }
    });

    return result;
  };

  const data = {
    greeting: "Hello World!",
    interestingUrls: ["https://google.com", "https://sbialek.com"],
    firstName: "John",
    email: "john@example.com",
    pets: ["Mittens", "Doggo", "Birb"],
    randomDiceThrow: getRandomDiceThrow(6),
    fewRandomDiceThrows: getFewRandomDiceThrows(6),
    counter: rootValue.calledTimes,
    pi: Math.PI,
    isTodayFriday: today.getDay() === 5,
    randomCoinTossesUntilTrue: getRandomCoinTossesUntilTrue(),
    e: Math.E,
    eulersSeries: getEulersSeries(),
    today: DAYS_OF_WEEK[today.getDay()],
    workDays: DAYS_OF_WEEK.slice(1, 6),
    randomQuote: Quotes.getQuote(),
    goingOutWithTheDogs: getGoingOutDogsInfo(),
  };
  return data;
};
rootValue.calledTimes = 0;

module.exports = rootValue;
