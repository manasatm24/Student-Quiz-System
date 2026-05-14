const express = require("express");
const mongoose = require("mongoose");
const app = express();

const Quiz = require("./models/Quiz");

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/quiz-system', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

app.post("/add-question", async (req, res) => {
    try {
        const quiz = new Quiz(req.body);
        await quiz.save();

        res.json({
            message: "Question Added"
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

app.get("/questions", async (req, res) => {
    try {
        const data = await Quiz.find();
        res.json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

app.listen(5000, () => {
    console.log("Server Running on port 5000");
});