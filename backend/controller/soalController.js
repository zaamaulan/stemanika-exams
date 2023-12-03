const Exam = require('../model/Soals')

const getSoals = async (req, res) => {
    res.json({ message: "GET all soals" });
};

const getSoal = async (req, res) => {
    const { id } = req.params;
    res.json({ message: "GET a single soal" });
};

const postSoals = async (req, res) => {
    try {
        // Ambil data JSON yang dikirimkan dalam body request
        const examData = req.body;

        // Simpan data ke dalam database menggunakan model Exam
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

const deleteSoal = async (req, res) => {
    const { id } = req.params;
    res.json({ message: "DELETE a soal" });
};

const updateSoal = async (req, res) => {
    const { id } = req.params;
    res.json({ message: "UPDATE a soal" });
};

module.exports = { getSoals, getSoal, postSoals, deleteSoal, updateSoal };
