import React from 'react'
import Header from './Header'
import Part from './Part'
import Total from './Total'

const Course = ({ course }) => {
    const parts = course.parts.map((part) => <Part part={part} key={part.id}/>)

    return (
        <div>
            <Header course={course} />
            {parts}
            <Total parts={course.parts} />
        </div>
    )
}

export default Course