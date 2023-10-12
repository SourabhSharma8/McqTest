import { useState, useEffect } from "react";
import { difficultyStars, shuffle } from "../Utilities";
import QuestionAndOption from "./QuestionAndOptions";

const IndivualQuestion = ({
  getNextQuestion,
  currentQuestion,
  maxIndexSelected,
}) => {
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {
    // Shuffle the options whenever the current question changes
    const Options = currentQuestion.incorrect_answers.concat(
      currentQuestion?.correct_answer
    );
    setShuffledOptions(shuffle(Options));
  }, [currentQuestion]);

  const compareAnswers = (event) => {
    console.log(event.target.value);
    setSelectedValue(event.target.value);
    if (event.target.value === currentQuestion.correct_answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const isOptionSelected = selectedValue !== null;

  const handleNextQuestion = () => {
    setSelectedValue(null); // Reset selected value
    setIsCorrect(null); // Reset correctness feedback
    getNextQuestion(); // Load the next question
  };

  return (
    <div className="container">
      <div className="row">
        <span className="text-danger">
          {difficultyStars(currentQuestion.difficulty)}
        </span>
        <p>{currentQuestion?.category}</p>
      </div>
      <div className="row">
        <div className="col-md-10">
          <p className="h5">{currentQuestion?.question}</p>
        </div>
      </div>

      <QuestionAndOption
        shuffledOptions={shuffledOptions}
        selectedValue={selectedValue}
        compareAnswers={compareAnswers}
      />

      <div className="row mt-4">
        {isOptionSelected && isCorrect === true && (
          <h5 className="text-success">Correct</h5>
        )}
        {isOptionSelected && isCorrect === false && (
          <h5 className="text-danger">Sorry. Please try again</h5>
        )}
        {isOptionSelected && (
          <button
            disabled={maxIndexSelected}
            className="btn btn-primary"
            onClick={handleNextQuestion}
          >
            {maxIndexSelected ? "Your test ends" : " Next"}
          </button>
        )}
      </div>
    </div>
  );
};

export default IndivualQuestion;