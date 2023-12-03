const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
    {
        text: { type: String, required: true },
        options: [{ type: String, required: true }],
        correct_option: { type: Number, required: true },
    },
    { timestamps: true }
);

const examSchema = new mongoose.Schema(
    {
        subject: { type: String, required: true },
        title: { type: String, required: true },
        questions: [questionSchema],
    },
    { timestamps: true }
);

const Exam = mongoose.model("Exam", examSchema);

module.exports = Exam;
