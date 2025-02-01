const express = require("express");
const router = express.Router();
const rankController = require("../controllers/rankController");

router.get("/predict-rank", rankController.getPredictedRank);

module.exports = router;
