require("dotenv").config();

const config = {
  quizApi: process.env.QUIZ_API,
  quizSubmissionApi: process.env.QUIZ_SUBMISSION_API,
  historicalQuizApi: process.env.HISTORICAL_QUIZ_API,
  port: process.env.PORT || 5000,
};

module.exports = config;
