import React, { useState } from "react";
import Quiz from "./components/Quiz";
import Welcome from "./components/Welcome";
import { questionSets } from "./questionSets";

function App() {
  const [currentQuestionSet, setCurrentQuestionSet] = useState<string | null>(
    null,
  );

  const handleStartQuiz = (setId: string) => {
    setCurrentQuestionSet(setId);
  };

  const handleBackToHome = () => {
    setCurrentQuestionSet(null);
  };

  if (currentQuestionSet === null) {
    return (
      <Welcome questionSets={questionSets} onStartQuiz={handleStartQuiz} />
    );
  }

  const selectedSet = questionSets.find((set) => set.id === currentQuestionSet);

  if (!selectedSet) {
    return <div>Error: Question set not found</div>;
  }

  return (
    <div className="App">
      <Quiz
        questions={selectedSet.questions}
        timePerQuestion={30}
        totalTime={selectedSet.questions.length * 30}
        onBackToHome={handleBackToHome}
      />
    </div>
  );
}

export default App;
