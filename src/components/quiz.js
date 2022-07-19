import React from "react";

const Quiz = ({
    checkAnswer,
    showAnswers,
    nextQuestion,
    data: { question, correct_answer, shuffledAnswers }
}) => {

    const shuffledComponent = shuffledAnswers.map((answer, key) => {
        return (
            <div className={`${showAnswers ? correct_answer === answer ? "quiz--correct-answer" : "quiz--incorrect-answer" : "quiz--answers"}`}
                key={key}
                onClick={() => checkAnswer(answer)}
                dangerouslySetInnerHTML={{ __html: answer }}
            />
        )
    })

    return (
        <div>
            <div className="quiz--question-container"><h1 className="quiz--question-text"
                dangerouslySetInnerHTML={{ __html: question }}
            />
            </div>
            <div className="quiz--answer-container">
                {shuffledComponent}
            </div>
            {showAnswers && (
                <button
                    className="quiz--next"
                    onClick={nextQuestion}
                >Next Question
                </button>
            )}
        </div>
    );
}
export default Quiz;