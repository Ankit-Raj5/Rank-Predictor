const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quizController");

router.get("/quiz", quizController.getQuiz);
router.get("/quiz-submissions", quizController.getQuizSubmissions);
router.get("/historical-quizzes", quizController.getHistoricalQuizzes);

module.exports = router;
