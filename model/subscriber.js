const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
  name: { type: String, required: true },

  subscriberToChannel: {
    type: String,
    required: true,
  },

  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

let subscriber = mongoose.model("subsriber", subscriberSchema);
module.exports = subscriber;
