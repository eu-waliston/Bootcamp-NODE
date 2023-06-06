const express = require("express");

const path = require("path");

const { ApolloServer } = require("apollo-server-express");

const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolversArryay = loadFilesSync(path.join(__dirname, "**/*.resolver.js"));

async function startApolloServer() {
  const app = express();

  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArryay,
  });

  const server = new ApolloServer({
    schema
  });

  await server.start();
  server.applyMiddleware({ app, path: '/graphql' })

  app.listen(3000, () => {
    console.log("Running GraphQL server...");
  });
}

startApolloServer();
