const http = require("http");
require('dotenv').config();

const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

require("../config/db");

async function startServer() {
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Server listing on port ${PORT}`);
  });
}

startServer();
