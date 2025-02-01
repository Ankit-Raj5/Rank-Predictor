# Student Rank Predictor for NEET

## 📌 Project Overview
This project is a **NEET Rank Prediction System** based on quiz performance and historical exam results. It fetches quiz data from given API endpoints, analyzes student performance, and predicts their probable NEET rank using a probabilistic model.

## 🚀 Features
- **Fetch quiz data & submissions** dynamically from API endpoints.
- **Analyze accuracy, mistakes, and speed** from submissions.
- **Predict rank** based on past NEET results and current performance.
- **Structured MVC architecture** for scalability.
- **RESTful API endpoints** with proper error handling.

---

## 📂 Project Structure
```
student-rank-predictor/
│-- config/
│   ├── dotenv.js
│-- controllers/
│   ├── quizController.js
│   ├── rankController.js
│-- middleware/
│   ├── errorMiddleware.js
│-- routes/
│   ├── quizRoutes.js
│   ├── rankRoutes.js
│-- services/
│   ├── quizService.js
│   ├── rankService.js
│-- utils/
│   ├── fetchData.js
│-- app.js
│-- server.js
│-- .env
│-- package.json
│-- README.md
```

---

## ⚙️ Setup Instructions
### 1️⃣ Clone Repository
```sh
git clone <your-repo-url>
cd student-rank-predictor
```
### 2️⃣ Install Dependencies
```sh
npm install
```
### 3️⃣ Create a `.env` File
```sh
PORT=5000
QUIZ_API=https://jsonkeeper.com/b/LLQT
QUIZ_SUBMISSION_API=https://api.jsonserve.com/rJvd7g
HISTORICAL_QUIZ_API=https://api.jsonserve.com/XgAgFJ
```
### 4️⃣ Start the Server
```sh
npm run dev
```
### 5️⃣ API Endpoints
| Method | Endpoint | Description |
|--------|-------------|-------------|
| GET | `/api/quiz` | Fetches quiz data |
| GET | `/api/quiz-submissions` | Fetches quiz submissions |
| GET | `/api/historical-quizzes` | Fetches historical quiz data |
| GET | `/api/predict-rank` | Predicts NEET rank based on performance |

---

## 🏆 Rank Prediction Approach
1. **Fetch student’s quiz submissions** from the API.
2. **Analyze key performance metrics**: Score, accuracy, mistakes corrected, etc.
3. **Compare scores with historical NEET data**.
4. **Determine rank percentile** by sorting all scores.
5. **Predict rank using probabilistic analysis**.

---

## 📊 Sample Input & Output
### 🎯 **Sample API Response for Quiz Submission**
```json
{
  "user_id": "7ZXdz3zHuNcdg9agb5YpaOGLQqw2",
  "score": 32,
  "accuracy": "80%",
  "final_score": "30.0",
  "correct_answers": 8,
  "incorrect_answers": 2
}
```

### 🔮 **Predicted Rank API Output (`GET /api/predict-rank`)**
```json
{
  "predicted_rank": 2402,
  "total_participants": 50000
}
```

---

## 📌 Key Insights & Recommendations
📍 **Higher accuracy** leads to better rank predictions.
📍 **Minimizing negative scores** improves overall ranking.
📍 **Speed optimization** can boost percentile scores.
📍 **Topic-wise analysis** helps in targeting weak areas.

---

## 📷 Screenshots
(Add screenshots of key API outputs, visualizations, or analytics dashboards here)

---

## 📞 Contact & Contributions
If you’d like to contribute, raise an issue or submit a pull request!

📧 **Contact:** your.email@example.com

---

### 🚀 **Future Enhancements**
✅ **College Admission Predictor** based on NEET rank.
✅ **Real-time Leaderboard** for students.
✅ **Improved Machine Learning Model** for rank prediction.

Happy Coding! 🎯

