const { ApolloServer, gql } = require("apollo-server");

const PORT = process.env.PORT || 5000;
const typeDefs = gql`
  type Query {
    greeting: String
    interestingUrls: [String]
    firstName: String
    email: String
    pets: [String]
    randomDiceThrow: Int
    fewRandomDiceThrows: [Int]
    counter: Int
    pi: Float
    isTodayFriday: Boolean
    randomCoinTossesUntilTrue: [Boolean]
    e: Float
    eulersSeries: [Float]
  }
`;

const rootValue = () => {
  rootValue.calledTimes++;

  const getRandomDiceThrow = (sides) => Math.ceil(Math.random() * sides);
  const getFewRandomDiceThrows = (sides) => {
    const throwsNumber = Math.floor(Math.random() * (7 - 3 + 1)) + 3;
    const throwArray = [];

    for (let i = 0; i < throwsNumber; i++) {
      throwArray.push(getRandomDiceThrow(sides));
    }
    return throwArray;
  };
  const today = new Date();
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
  };

  return data;
};
rootValue.calledTimes = 0;

const server = new ApolloServer({
  typeDefs,
  rootValue,
  playground: true,
  introspection: true,
});

server.listen({ port: PORT }).then((result) => console.log(result.url));
