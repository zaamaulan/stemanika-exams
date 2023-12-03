const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    text: { type: String, required: true },
    options: [{ type: String, required: true }],
    correct_option: { type: Number, required: true },
});

const examSchema = new mongoose.Schema({
    title: { type: String, required: true },
    questions: [questionSchema],
});

const Exam = mongoose.model("Exam", examSchema);

module.exports = Exam;
