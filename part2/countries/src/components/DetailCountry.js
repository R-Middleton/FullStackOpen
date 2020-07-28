import React from 'react'

const DetailCountry = (props) => {
    const languages = props.languages.map((language, index) => {
        return (
            <li key={index}>{language.name}</li>
        )
    })
    return (
        <div>
            <h2>{props.name}</h2>
            capital {props.capital} <br />
            population {props.population}

            <h3>languages</h3>
            <ul>
                {languages}
            </ul>
            <div>
                <img alt='country flag 'src={props.flag} width='100' heigh='100'/>
            </div>
        </div>
    )
}

export default DetailCountry