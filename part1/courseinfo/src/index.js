import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = props => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = props => {
  return (
    <div>
      <p>{props.partName} {props.exercises}</p>
    </div>
  )
}

const Content = props => {
  return (
    <div>
      <Part partName={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part partName={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part partName={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}

// Anything in comments is following along with lessons not exercise related, I should refactor this out into a separate project
const Display = ({counter }) => <div>{counter}</div>

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
)
//

const App = () => {

  //
  const [ counter, setCounter ] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  //

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />


      <Display counter={counter} />
      <Button handleClick={increaseByOne} text='plus' />
      <Button handleClick={setToZero} text='reset' />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
