const mongoose = require("mongoose")
const connect = require("../db//dbConnection")

const feedbackEntrySchema = new mongoose.Schema({
    feedbackText: {
      type: String,
      required: true
    },
    category: {
      type: String,
      enum: ['suggestion', 'bug', 'feature'],
      default: 'suggestion'
    },
  },{
    timestamps: true
  });

const feedBackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    feedbacks: [feedbackEntrySchema],
}, {
    timestamps: true
})

const feedBack = new mongoose.model("feedback", feedBackSchema)

module.exports = feedBack