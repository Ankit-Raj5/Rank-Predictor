const quizService = require("../services/quizService");

const getQuiz = async (req, res) => {
  try {
    const quizData = await quizService.getQuizData();
    res.json(quizData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching quiz data" });
  }
};

const getQuizSubmissions = async (req, res) => {
  try {
    const submissionData = await quizService.getQuizSubmissionData();
    res.json(submissionData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching quiz submissions" });
  }
};

const getHistoricalQuizzes = async (req, res) => {
  try {
    const historicalData = await quizService.getHistoricalQuizData();
    res.json(historicalData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching historical quiz data" });
  }
};

module.exports = { getQuiz, getQuizSubmissions, getHistoricalQuizzes };
