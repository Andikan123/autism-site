import { useState } from "react";
import questions from "../components/Question";

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (option) => {
    setAnswers((prev) => ({
      ...prev,
      [current]: option,
    }));
  };

  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prevQuestion = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  // 🔥 RESULTS SCREEN
  if (showResults) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-semibold mb-10 text-gray-900">
          Learning Summary
        </h1>

        <div className="space-y-6">
          {questions.map((q, index) => {
            const userAnswer = answers[index];
            const isCorrect = userAnswer === q.correctAnswer;

            return (
              <div
                key={q.id}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
              >
                <h2 className="font-medium text-gray-800 mb-3">
                  {q.question}
                </h2>

                <p className="text-sm mb-2">
                  <span className="font-semibold">Your answer:</span>{" "}
                  <span className={isCorrect ? "text-green-600" : "text-red-500"}>
                    {userAnswer || "Not answered"}
                  </span>
                </p>

                {!isCorrect && (
                  <p className="text-sm mb-2">
                    <span className="font-semibold">Correct answer:</span>{" "}
                    <span className="text-green-600">
                      {q.correctAnswer}
                    </span>
                  </p>
                )}

                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  {q.explanation}
                </p>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => {
            setCurrent(0);
            setAnswers({});
            setShowResults(false);
          }}
          className="mt-10 px-6 py-3 bg-gray-900 text-white rounded-xl hover:opacity-90"
        >
          Retry Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 overflow-hidden">

      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-semibold text-gray-800">
          Assessment
        </h1>

        <span className="text-sm text-gray-500">
          {current + 1} / {questions.length}
        </span>
      </div>

      {/* CARD (upgraded UI) */}
      <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl p-10 shadow-lg">

        {/* Question */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-10">
          {questions[current].question}
        </h2>

        {/* Options */}
        <div className="space-y-4">
          {questions[current].options.map((option, i) => {
            const isSelected = answers[current] === option;

            return (
              <button
                key={i}
                onClick={() => handleSelect(option)}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl border transition-all duration-200

                ${
                  isSelected
                    ? "bg-gray-900 text-white border-gray-900 shadow-md"
                    : "bg-gray-50 border-gray-300 hover:border-gray-800 hover:bg-white"
                }`}
              >
                {/* A B C label */}
                <span
                  className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold
                  ${
                    isSelected
                      ? "bg-white text-gray-900"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {String.fromCharCode(65 + i)}
                </span>

                <span className="text-sm">{option}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-between mt-10">

        <button
          onClick={prevQuestion}
          className="px-5 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100 transition"
        >
          Back
        </button>

        {current === questions.length - 1 ? (
          <button
            onClick={handleSubmit}
            className="px-6 py-2 text-sm bg-gray-900 text-white rounded-lg hover:opacity-90 transition"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            className="px-6 py-2 text-sm bg-gray-900 text-white rounded-lg hover:opacity-90 transition"
          >
            Next
          </button>
        )}

      </div>
    </div>
  );
}

export default Quiz;