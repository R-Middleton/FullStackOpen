import React from 'react'
import DetailCountry from './DetailCountry'

const Countries = ({ countries, filter }) => {
    const filtered = countries.filter(country => {
        return country.name.toLowerCase().includes(filter.toLowerCase())
    })

    const filterMultipleCountries = filtered.map((country, index) => {
        return <div key={index}>{country.name}</div>
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