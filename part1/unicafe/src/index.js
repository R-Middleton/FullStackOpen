import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistic = (props) => {
  return (
    <tbody>
      <tr>
        <td>
          {props.text}
        </td>
        <td>
          {props.value}
        </td>
      </tr>
    </tbody>
  )
}

const Statistics = (props) => {
  let total = props.good - props.bad
  let count = props.good + props.neutral + props.bad

  if (count <= 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  } else {
    return (
      <table>
        <Statistic text="good" value={props.good} />
        <Statistic text="neutral" value={props.neutral} />
        <Statistic text="bad" value={props.bad} />
        <Statistic text="all" value={count} />
        <Statistic text="average" value={total / count} />
        <Statistic text="positive" value={(props.good / count * 100) + ' %'} />
      </table>
    )
  }
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <div>
          <Button onClick={handleGoodClick} text='good' />
          <Button onClick={handleNeutralClick} text='neutral' />
          <Button onClick={handleBadClick} text='bad' />
        </div>
      </div>
      <div>
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)