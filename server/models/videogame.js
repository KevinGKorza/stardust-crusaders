const mongoose = require('mongoose');
const { Schema } = mongoose;

const videoGameSchema = new Schema({
  videoGameId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  creators: [
    {
      type: String,
    },
  ],
});

module.exports = videoGameSchema;