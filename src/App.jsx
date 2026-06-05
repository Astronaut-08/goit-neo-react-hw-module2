import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'


const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const updateFeedback = (feedbackType) => {
    setFeedback((feedback) => ({
      ...feedback, [feedbackType]: feedback[feedbackType] + 1
    }))
  }

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback obj={feedback} />
    </>
  )
}

export default App
