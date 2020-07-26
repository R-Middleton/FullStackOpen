import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [voteCounts, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleVoteClick = () => {
    const copyofVotes = [...voteCounts]
    copyofVotes[selected] += 1
    setVotes(copyofVotes)
  }

  const newClick = () => setSelected(Math.floor(Math.random() * 5))
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <div>
        has {voteCounts[selected]} votes
      </div>
      <div>
        <Button onClick={handleVoteClick} text='vote' />
        <Button onClick={newClick} text='next anecdote' />
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <div>{props.anecdotes[voteCounts.indexOf(Math.max(...voteCounts))]}</div>
        <div>has {voteCounts[voteCounts.indexOf(Math.max(...voteCounts))]} votes</div>
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)