import React, { useState } from 'react'
import DetailCountry from './DetailCountry'

const Countries = ({ countries, filter }) => {
    const [showResults, setShowResults] = useState(false)
    const onClick = (name) => setShowResults(name)

    const filtered = countries.filter(country => {
        return country.name.toLowerCase().includes(filter.toLowerCase())
    })

    const filterMultipleCountries = filtered.map((country, index) => {
        return (
            <div key={index}>
                {country.name}
                <input type="submit" value="Show" onClick={()=> onClick(country.name)} />
                {showResults === country.name ? <DetailCountry
                    name={country.name}
                    capital={country.capital}
                    population={country.population}
                    languages={country.languages}
                    flag={country.flag}
                /> : null}
            </div>
        )
    })

    if (filtered.length > 10) {
        return (
            <div>Too many matches, specify another filter </div>
        )
    } else if (filtered.length === 1) {
        const selectedCountry = filtered[0]
        return (
            <div>
                <DetailCountry
                    name={selectedCountry.name}
                    capital={selectedCountry.capital}
                    population={selectedCountry.population}
                    languages={selectedCountry.languages}
                    flag={selectedCountry.flag}
                />
            </div>
        )
    } else {
        return (
            <div>{filterMultipleCountries}</div>
        )
    }
}

export default Countries