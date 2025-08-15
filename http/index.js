const express = require("express");
const app = express();

const PORT = process.env.PORT ?? 4000;

/**
 * Clase de API REST
 */
class ServerAPI {
  providerWS;
  providerDB;
  constructor(_providerWS, _providerDB) {
    this.providerWS = _providerWS;
    this.providerDB = _providerDB;
  }

  start() {
    const middleware = (req, _, next) => {
      req.ws = this.providerWS;
      req.db = this.providerDB;
      next();
    };
    app.use(express.json());
    app.use("/api", middleware, require("./routes"));
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}/api/qr`);
      console.log(`http://localhost:${PORT}/api/callback`);
      console.log("Probamos si se integra update webhooks");
    });
  }
}

module.exports = ServerAPI;
