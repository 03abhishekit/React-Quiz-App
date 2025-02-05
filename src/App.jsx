import './App.css';
import { useState } from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import Questions from './components/Questions';
import Answers from './components/Answers';
import Options from './components/Options';
import Score from './components/Score';
import qBank from './components/QuestionBank';

function App() {
  const [questions, setQuestions] = useState("");
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  const navigate = useNavigate(); 

  const loadQuestion = (index) => {
    const q = qBank[index];
    setQuestions(q.question);
    setOptions(q.options);
    setAnswer(q.answer);
    setSelectedAnswer(null); 
    setHasAnswered(false); 
  };

  const handleSelection = (selected) => {
    setSelectedAnswer(selected);
    if (answer === selected && !hasAnswered) {
      setScore(score + 1);
      setHasAnswered(true); 
    }
  };

  const handleNextQuestion = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < qBank.length) {
      setCurrentIndex(nextIndex);
      loadQuestion(nextIndex);
    } else {
      navigate("/score"); 
      console.log(`Quiz finished! Your score is ${score}.`);
    }
  };

  return (
    <>
      <div className="quiz">
        <h3>Quiz App</h3>
        <nav>
          <NavLink style={{ textDecoration: "none", fontSize: "bold" }} to="/quiz">Start Quiz</NavLink>
        </nav>

        <br /><br />
        <Routes>
          <Route path="/quiz" element={
            <>
              <button onClick={() => loadQuestion(currentIndex)}>Load First Question</button>
              <br /><br />
              {questions && (
                <>
                  <Questions questions={questions} />
                  <br /><br />
                  <Options options={options} setSelectedAnswer={handleSelection} selectedAnswer={selectedAnswer} />
                  <br /><br />
                  <Answers selectedAnswer={selectedAnswer} correctAnswer={answer} />
                  <br /><br />
                  <button className="btn" style={{ marginBottom: "40px" }} onClick={handleNextQuestion}>Next Question</button>
                </>
              )}
            </>
          } />

          <Route path="/score" element={<Score score={score} currentIndex={currentIndex} qBank={qBank} />} />
        </Routes>
        <br /><br />
        
        <nav>
          <NavLink style={{ textDecoration: "none", fontSize: "bold" }} to="/score">Score</NavLink> 
        </nav>
      </div>
    </>
  );
}

export default App;
