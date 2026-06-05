import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'
import Notification from './components/Notification/Notification'


const App = () => {
  const savedFeedback = JSON.parse(window.localStorage.getItem('feedback'))
  const [feedback, setFeedback] = useState({
    good: savedFeedback?.good || 0,
    neutral: savedFeedback?.neutral || 0,
    bad: savedFeedback?.bad || 0
  })

  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(feedback))
  }, [feedback])

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
      {totalFeedback > 0 ? <Feedback obj={feedback} status={totalFeedback} /> : <Notification />}
    </>
  )
}

export default App
