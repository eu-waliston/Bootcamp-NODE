const express = require("express");

const path = require("path")

const { graphqlHTTP } = require("express-graphql");

const { loadFilesSync } = require("@graphql-tools/load-files")
const { makeExecutableSchema } = require("@graphql-tools/schema");

const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolversArryay = loadFilesSync(path.join(__dirname, '**/*.resolver.js'))

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArryay,
});


const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Running GraphQL server...");
});
