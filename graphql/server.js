const express = require("express");

const path = require("path")

const { graphqlHTTP } = require("express-graphql");

const { loadFilesSync } = require("@graphql-tools/load-files")
const { makeExecutableSchema } = require("@graphql-tools/schema");

const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: {
    Query: {
      products: async (parent, args, context, info) => {
        console.log("Getting the products...");
        const product =  await Promise.resolve(parent.products);
        return product;
      },
      orders: (parent) => {
        console.log("Geting the orders..");
        return parent.orders;
      },
    }
  }
});

const root = {
  products: require("./products/products.model"),
  orders: require("./orders/orders.model")
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Running GraphQL server...");
});
