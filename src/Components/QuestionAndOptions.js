const QuestionAndOption = ({
  shuffledOptions,
  selectedValue,
  compareAnswers,
}) => {
  return (
    <div className="row">
      {shuffledOptions.map((item, index) => (
        <div className="col-md-4 me-5 mt-4" key={index}>
          <label className={`btn ${selectedValue === item ? "btn-dark" : ""}`}>
            <input
              type="radio"
              name="options"
              value={item}
              checked={selectedValue === item}
              onChange={compareAnswers}
            />
            {item}
          </label>
        </div>
      ))}
    </div>
  );
};

export default QuestionAndOption;
