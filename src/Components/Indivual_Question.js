import { useState, useEffect } from "react";
import { shuffle } from "../Utilities";

const IndivualQuestion = ({ getNextQuestion, currentQuestion ,maxIndexSelected }) => {
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

  const handleOptionChange = (event) => {
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
        <p>{currentQuestion?.category}</p>
      </div>
      <div className="row">
        <div className="col-md-10">
          <p className="h5">{currentQuestion?.question}</p>
        </div>
      </div>
      <div className="row">
        {shuffledOptions.map((item, index) => (
          <div className="col-md-4 me-5 mt-4" key={index}>
            <label className={`btn ${selectedValue === item ? "btn-dark" : ""}`}>
              <input
                type="radio"
                name="options"
                value={item}
                checked={selectedValue === item}
                onChange={handleOptionChange}
              />
              {item}
            </label>
          </div>
        ))}
      </div>

      <div className="row mt-4">
        {isOptionSelected && isCorrect === true && (
          <h5 className="">Correct</h5>
        )}
        {isOptionSelected && isCorrect === false && (
          <h5>Sorry. Please try again</h5>
        )}
        {isOptionSelected && (
          <button disabled={maxIndexSelected} className="btn btn-primary" onClick={handleNextQuestion}>
           {maxIndexSelected ?"Your test ends" :" Next"}
          </button>
        )}
      </div>
    </div>
  );
};

export default IndivualQuestion;
