const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
    question_id: { type: mongoose.Schema.Types.ObjectId, ref: "Exam.questions" },
    selected_option: { type: Number, required: true },
});

const userAnswerSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    exam_id: { type: mongoose.Schema.Types.ObjectId, ref: "Exam", required: true },
    answers: [answerSchema],
    score: { type: Number },
});

const UserAnswer = mongoose.model("UserAnswer", userAnswerSchema);

module.exports = UserAnswer;
