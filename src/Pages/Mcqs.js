import { useEffect, useState } from "react";
import Questions from "../Assests/questions.json";
import IndivualQuestion from "../Components/Indivual_Question";
const Mcqs = () => {
  const [questionList] = useState(Questions);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [maxIndexSelected, setMaxIndexSelected] = useState(false);
  const getNextQuestion = () => {
    
    if (questionIndex < questionList.length-1) {
      setQuestionIndex(questionIndex + 1);
      console.log(questionIndex)
    } else {
      setMaxIndexSelected(questionList.length - 1);
      console.log(questionIndex,"else")
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {`Question ${questionIndex+1} of ${questionList.length}`}
        </div>
      </div>
      <IndivualQuestion
        getNextQuestion={getNextQuestion}
        currentQuestion={questionList[questionIndex]}
        maxIndexSelected={maxIndexSelected}
      />
    </div>
  );
};
export default Mcqs;
