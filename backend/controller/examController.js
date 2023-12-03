const Exam = require("../model/examModel");
const mongoose = require("mongoose");

const getExams = async (req, res) => {
    try {
        const Exams = await Exam.find({});
        res.status(200).json(Exams);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Gagal mendapatkan data soal",
            error: error.message,
        });
    }
};

const getExam = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: "ID Exams tidak valid" });
        }

        const exams = await Exam.findById(id);

        if (!exams) {
            return res
                .status(404)
                .json({
                    error: "Tidak ada data soal dengan ID yang diberikan",
                });
        }

        res.status(200).json(exams);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Gagal mendapatkan data soal",
            error: error.message,
        });
    }
};

const postExams = async (req, res) => {
    try {
        const examData = req.body;
        const result = await Exam.create(examData);

        res.status(201).json({
            success: true,
            message: "Data soal berhasil disimpan",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Gagal menyimpan data soal",
            error: error.message,
        });
    }
};

const deleteExam = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: "ID Exams tidak valid" });
        }

        const exams = await Exam.findOneAndDelete({ _id: id });

        if (!exams) {
            return res
                .status(404)
                .json({
                    error: "Tidak ada data soal dengan ID yang diberikan",
                });
        }

        res.status(200).json(exams);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Gagal menghapus data soal",
            error: error.message,
        });
    }
};

const updateExam = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: "ID Exams tidak valid" });
        }

        const exams = await Exam.findOneAndUpdate(
            { _id: id },
            { ...req.body },
            { new: true }
        );

        if (!exams) {
            return res
                .status(404)
                .json({
                    error: "Tidak ada data soal dengan ID yang diberikan",
                });
        }

        res.status(200).json(exams);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Gagal mengupdate data soal",
            error: error.message,
        });
    }
};

module.exports = { getExams, getExam, postExams, deleteExam, updateExam };
