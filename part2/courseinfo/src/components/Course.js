import React from 'react'
import Header from './Header'
import Part from './Part'

const Course = ({ course }) => {
    const parts = course.parts.map((part) => <Part part={part} key={part.id}/>)

    return (
        <div>
            <Header course={course} />
            {parts}
        </div>
    )
}

export default Course