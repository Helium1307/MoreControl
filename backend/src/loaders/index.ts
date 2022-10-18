const { startDB } = require("./mongodb");

class Loaders {
  start() {
    startDB();
  }
}

export default new Loaders();
