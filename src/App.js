import React,{useState} from 'react'
import './App.css';
import Questions from './Components/Questions';

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleClick = (isCorrect) => {
		  if (isCorrect) {
			  setScore(score + 1);
		  }

		const nextQuestion = currentQuestion + 1;
    
		if (nextQuestion < Questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};


  return (
    <div className='app'>
			{showScore ? (
				<div className='score'>
					You scored {score} out of {Questions.length}
				</div>
			) : (
				<>
					<div className='question'>
						<div className='count'>
							<span>Question {currentQuestion + 1}</span>/{Questions.length}
						</div>
						<div className='qstntext'>{Questions[currentQuestion].questionText}</div>
					</div>
					<div className='answers'>
						{Questions[currentQuestion].Options.map((Option) => (
							<button onClick={() => handleClick(Option.isCorrect)}>{Option.answer}</button>
						))}
					</div>
				</>
			)}
		</div>
  );
}

export default App;
