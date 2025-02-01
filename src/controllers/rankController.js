const rankService = require("../services/rankService");

const getPredictedRank = async (req, res) => {
  // console.log("object")
  try {
    const rankData = await rankService.predictRank();
    res.json(rankData);
  } catch (error) {
    res.status(500).json({ message: "Error predicting rank" });
  }
};

module.exports = { getPredictedRank };
