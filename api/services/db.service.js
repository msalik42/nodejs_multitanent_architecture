const database = require("../../models/index");
const DBService = () => {
  const start = () => {
    database
      .authenticate()
      .then(() => {
        console.log("DB Connected");
      })
      .catch((err) => {
        console.log("Some error while connecting to the database", err);
      });
  };
  return {start};
};

module.exports = DBService;
