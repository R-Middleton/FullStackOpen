import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.partName} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part partName={props.partName1} exercises={props.exercises1} />
      <Part partName={props.partName2} exercises={props.exercises2} />
      <Part partName={props.partName3} exercises={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

const App = () => {
  const partName1='Fundamentals of React'
  const partName2='Using props to pass data'
  const partName3='State of a component'
  const exercises1=10
  const exercises2=7
  const exercises3=14

  return (
    <div>
      <Header course='Half Stack application development' />
      <Content partName1={partName1} exercises1={exercises1} partName2={partName2} exercises2={exercises2} partName3={partName3} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))