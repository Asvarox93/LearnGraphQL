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

  const data = {
    greeting: "Hello World!",
    interestingUrls: ["https://google.com", "https://sbialek.com"],
    firstName: "John",
    email: "john@example.com",
    pets: ["Mittens", "Doggo", "Birb"],
    randomDiceThrow: getRandomDiceThrow(6),
    fewRandomDiceThrows: getFewRandomDiceThrows(6),
    counter: rootValue.calledTimes,
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
