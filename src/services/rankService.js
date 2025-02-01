const fetchData = require("../utils/fetchData");
const config = require("../config/dotenv");

const predictRank = async () => {
  try {
    const submissionData = await fetchData(config.quizSubmissionApi);
    const historicalData = await fetchData(config.historicalQuizApi);

    const userScore = submissionData.final_score;
    const allScores = historicalData.map((entry) => entry.final_score);
    
    allScores.push(userScore);
    allScores.sort((a, b) => b - a);

    const rank = allScores.indexOf(userScore) + 1;
    return { predicted_rank: rank, total_participants: allScores.length };
  } catch (error) {
    throw new Error("Rank prediction failed.");
  }
};

module.exports = { predictRank };
