const fetchData = require("../utils/fetchData");
const config = require("../config/dotenv");

const getQuizData = async () => {
  return await fetchData(config.quizApi);
};

const getQuizSubmissionData = async () => {
  return await fetchData(config.quizSubmissionApi);
};

const getHistoricalQuizData = async () => {
  return await fetchData(config.historicalQuizApi);
};

module.exports = { getQuizData, getQuizSubmissionData, getHistoricalQuizData };
