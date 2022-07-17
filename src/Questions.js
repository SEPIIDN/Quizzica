import React from "react";
import {Link} from "react-router-dom";
import { Quiz } from "./components";

function Questions() {
  const MY_API = "https://opentdb.com/api.php?amount=10&category=31&type=multiple"

  const [quizData, setQuizData] = React.useState([])
  const [showAnswers, setShowAnswers] = React.useState(false)
  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const [score, setScore] = React.useState(0)

  React.useEffect(() => {
    fetch(MY_API)
      .then(res => res.json())
      .then(data => setQuizData(data.results.map(result => ({
        ...result,
        //Shuffles the correct answer and incorrect answers
        shuffledAnswers: [result.correct_answer, ...result.incorrect_answers].sort(() => Math.random() - 0.5)
      }))))
  }, [])

  function checkAnswer(answer) {
    if (!showAnswers) {
      if (answer === quizData[currentQuestion].correct_answer) {
        setScore(score + 1)
      }
    }
    setShowAnswers(true)
  }

  function nextQuestion() {
    setShowAnswers(false)
    setCurrentQuestion(currentQuestion + 1)
  }

  return quizData.length > 0 ? (
    <div className="quiz--container">
      {currentQuestion >= quizData.length ? (
        <div>
          <h1 className="quiz--score">Your Score : {score}</h1>
          <Link to="/">
          <div className="start--start-button">
            <h1 className="link-text">Play Again</h1>
          </div>
          </Link>
        </div>

      ) : (
        <Quiz
          data={quizData[currentQuestion]}
          nextQuestion={nextQuestion}
          checkAnswer={checkAnswer}
          showAnswers={showAnswers}
        />)
      }
    </div>
  ) : (
    <h1 className="quiz--loading-message">loading please be patient...</h1>
  );
}

export default Questions;
