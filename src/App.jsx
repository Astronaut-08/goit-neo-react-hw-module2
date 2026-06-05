import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'
import Notification from './components/Notification/Notification'


const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad

  const updateFeedback = (feedbackType) => {
    if (feedbackType === 'reset') {
      setFeedback({
        good: 0,
        neutral: 0,
        bad: 0
      })
      return
    }
    
    setFeedback((feedback) => ({
      ...feedback, [feedbackType]: feedback[feedbackType] + 1
    }))
  }

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} status={totalFeedback > 0} />
      {totalFeedback > 0 ? <Feedback obj={feedback} /> : <Notification />}
    </>
  )
}

export default App
