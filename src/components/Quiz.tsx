import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { Question } from "../questionSets";

interface QuizProps {
  questions: Question[];
  onBackToHome: () => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onBackToHome }) => {
  const totalQuestions = questions.length;
  const totalTime = 75; // Total time for all questions in seconds
  const timePerQuestion = totalTime / totalQuestions; // Time allocated per question

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [questionTimer, setQuestionTimer] = useState(timePerQuestion);
  const [totalTimer, setTotalTimer] = useState(totalTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setQuestionTimer((prevTime) => {
        if (prevTime <= 1) {
          handleNextQuestion();
          return timePerQuestion;
        }
        return prevTime - 1;
      });

      setTotalTimer((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setShowResult(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex]);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 3); // 3 points for correct answer
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setQuestionTimer(timePerQuestion);
    } else {
      setShowResult(true);
    }
  };

  const getResultMessage = () => {
    const percentage = (score / (totalQuestions * 3)) * 100;

    if (percentage >= 75) {
      return "Congratulations! 🎉 You scored at least 75%!";
    } else if (percentage >= 50) {
      return "You did great but you can do better.";
    } else {
      return "You can do better next time.";
    }
  };

  if (showResult) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        {score >= totalQuestions * 3 * 0.75 && <Confetti />}
        <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
        <p className="text-xl mb-4">
          Your score: {score} out of {totalQuestions * 3}
        </p>
        <p className="text-lg mb-4">{getResultMessage()}</p>
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={onBackToHome}
        >
          Back to Home
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between mb-4">
          <p className="text-sm">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </p>
          <p className="text-sm">Time left: {questionTimer}s</p>
        </div>
        <p className="text-sm mb-4">Total time left: {totalTimer}s</p>
        <h2 className="text-xl font-semibold mb-4">
          {currentQuestion.question}
        </h2>
        <div className="space-y-2">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`w-full p-2 rounded ${
                selectedAnswer === option
                  ? selectedAnswer === currentQuestion.correctAnswer
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => handleAnswerSelect(option)}
              disabled={selectedAnswer !== null}
            >
              {option}
            </button>
          ))}
        </div>
        {selectedAnswer && (
          <div className="mt-4">
            <p
              className={
                selectedAnswer === currentQuestion.correctAnswer
                  ? "text-green-600"
                  : "text-red-600"
              }
            >
              {selectedAnswer === currentQuestion.correctAnswer
                ? "Correct!"
                : `Incorrect. The correct answer is: ${currentQuestion.correctAnswer}`}
            </p>
          </div>
        )}
        <button
          className="mt-6 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={handleNextQuestion}
          disabled={selectedAnswer === null}
        >
          {currentQuestionIndex === totalQuestions - 1
            ? "Finish"
            : "Next Question"}
        </button>
        {/* Make sure this button is visible and styled properly */}
        <button
          className="mt-4 w-full bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
          onClick={onBackToHome}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Quiz;
