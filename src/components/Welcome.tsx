import React, { useState } from "react";
import { QuestionSet } from "../questionSets";

interface WelcomeProps {
  questionSets: QuestionSet[];
  onStartQuiz: (setId: string) => void;
}

const Welcome: React.FC<WelcomeProps> = ({ questionSets, onStartQuiz }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSet, setSelectedSet] = useState<QuestionSet | null>(null);

  const openModal = (set: QuestionSet) => {
    setSelectedSet(set);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSet(null);
    setIsModalOpen(false);
  };

  const handleStartQuiz = () => {
    if (selectedSet) {
      onStartQuiz(selectedSet.id);
      closeModal();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center max-w-md mx-auto">
        Welcome to this Quiz on the life of Rev. Josiah Soyinka
      </h1>
      <p className="text-xl mb-4">Choose a question set to start:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {questionSets.map((set) => (
          <button
            key={set.id}
            className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600 text-lg"
            onClick={() => openModal(set)}
          >
            Start: {set.name}
          </button>
        ))}
      </div>

      {isModalOpen && selectedSet && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">
              Start {selectedSet.name}
            </h2>
            <p className="text-lg mb-6">
              Answer each question within 3 seconds
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
                onClick={closeModal}
              >
                Go back to welcome screen
              </button>
              <button
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                onClick={handleStartQuiz}
              >
                Start Quiz
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
