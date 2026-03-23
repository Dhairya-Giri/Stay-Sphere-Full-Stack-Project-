const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});

// Default username and password handled by passport-local-mongoose
userSchema.plugin(passportLocalMongoose.default);

module.exports = mongoose.model("User", userSchema);
