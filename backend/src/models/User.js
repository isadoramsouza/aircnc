const mongooese = require("mongoose");

const UserSchema = new mongooese.Schema({
  email: String
});

modulo.exports = mongooese.model("User", UserSchema);
