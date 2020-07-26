import React from 'react'

const Total = ({ parts }) => {
    const exerciseTotal = parts.reduce((sum, part) => sum + part.exercises, 0)
    return(
        <b>total of {exerciseTotal} exercises</b>
    )
}

export default Total