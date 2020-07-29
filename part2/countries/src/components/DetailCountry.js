import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DetailCountry = (props) => {
    const [weatherReport, setWeatherReport] = useState([])

    useEffect(() => {
        axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${props.capital}`,)
            .then(response => {
                setWeatherReport(response.data.current)
            })
    }, [props.capital])

    const weather = (() => {
        return (
            <div>
                <h2>Weather in {props.capital}</h2>
                <div>
                    <b>temperature:</b> {weatherReport.temperature} Celcius<br />
                    <img alt='weather icon ' src={weatherReport.weather_icons} width='50' heigh='50' /> <br />
                    <b>wind: </b> {weatherReport.wind_speed} mph direction {weatherReport.wind_dir} <br />
                </div>
            </div>
        )
    })

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

            <h3>Spoken languages</h3>
            <ul>
                {languages}
            </ul>
            <div>
                <img alt='country flag ' src={props.flag} width='100' heigh='100' />
            </div>
            {props.singleResult ? weather() : null}
        </div>
    )
}

export default DetailCountry