const express = require("express");
const {
    getExam,
    postExams,
    getExams,
    deleteExam,
    updateExam,
} = require("../controller/examController");

const router = express.Router();

router.get("/", getExams);

router.get("/:id", getExam);

router.post("/", postExams);

router.delete("/:id", deleteExam);

router.patch("/:id", updateExam);

module.exports = router;
