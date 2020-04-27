const { gql } = require("apollo-server");
const typeDefs = gql`
  schema {
    query: MyQuery
  }
  type MyQuery {
    "A simple greeting"
    greeting: String!
    interestingUrls: [String!]!
    firstName: String!
    email: String!
    pets: [String!]!
    randomDiceThrow: Int!
    fewRandomDiceThrows: [Int!]!
    counter: Int!
    pi: Float!
    isTodayFriday: Boolean!
    randomCoinTossesUntilTrue: [Boolean]!
    e: Float!
    eulersSeries: [Float!]!
    today: DayOfWeek!
    workDays: [DayOfWeek!]!
    randomQuote: Quote!
    goingOutWithTheDogs: [DogsDays!]!
  }

  """
  ## The object representing a quote

  ### It contains a text and author's name
  """
  type DogsDays {
    name: String!
    outDay: [DayOfWeek!]!
  }

  type Quote {
    text: String!
    author: String!
  }

  enum DayOfWeek {
    MON
    TUE
    WED
    THU
    FRI
    SAT
    SUN
  }
`;

module.exports = typeDefs;
