const express = require("express");
const cors = require("cors");
const quizRoutes = require("./routes/quizRoutes");
const rankRoutes = require("./routes/rankRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");
const config = require("./config/dotenv");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", quizRoutes);
app.use("/api", rankRoutes);

app.use(errorMiddleware);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
