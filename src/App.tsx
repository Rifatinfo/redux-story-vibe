
import './App.css'
import Question from './Home/Question'
import QuizSummery from './Home/QuizSummery';
import { useAppSelector } from './redux/hooks'

function App() {
  const { quizComplete } = useAppSelector((state) => state.quiz);
  return (
    <>
      <h1 className='font-bold text-4xl text-center '>React Story Telling with TypeScript</h1>
      <div className='mt-10'>
        {!quizComplete ? <Question /> : <QuizSummery />}
      </div>
    </>
  )
}

export default App
