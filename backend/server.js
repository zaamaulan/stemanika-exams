require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const examRouter = require("./routes/exams");

const app = express();

app.use(express.json());


app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use("/api/exams", examRouter);

// app.listen(process.env.PORT, () => {
//     console.log("listening to port 4000!");
// });

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("listening to port", process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });
