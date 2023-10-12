const HeaderBar = ({ questionIndex, questionList }) => {
  const completionPercentage = (questionIndex / questionList.length) * 100;
  
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>

          <h5> {`Question ${questionIndex + 1} of ${questionList.length}`}</h5>
        </div>
      </div>
    </>
  );
};
export default HeaderBar;
