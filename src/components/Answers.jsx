function Answers({selectedAnswer, correctAnswer}) {
    return (
      <>
        {selectedAnswer ? (
          selectedAnswer === correctAnswer ? (
            <h4 style={{color: "green"}}>
              Correct: {correctAnswer}
            </h4>
          ) : (
            <h4 style={{color: "red"}}>
              Wrong
              <p style={{color: "green"}}>Correct Answer is: {correctAnswer}</p>
            </h4>
          )
        ) : (
          null
        )}
      </>
    );
  }
  
  export default Answers;
  