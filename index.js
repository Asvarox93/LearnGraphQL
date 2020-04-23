const { ApolloServer, gql } = require("apollo-server");

const PORT = process.env.PORT || 4000;
const typeDefs = gql`
  type Query {
    greeting: String
    interestingUrls: [String]
    firstName: String
    email: String
    pets: [String]
  }
`;

const data = {
  greeting: "Hello World!",
  interestingUrls: ["https://google.com", "https://sbialek.com"],
  firstName: "John",
  email: "john@example.com",
  pets: ["Mittens", "Doggo", "Birb"],
};

const server = new ApolloServer({
  typeDefs,
  rootValue: data,
  playground: true,
  introspection: true,
});

server.listen({ port: PORT }).then((result) => console.log(result.url));
