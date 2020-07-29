import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
    const [newFilter, setNewFilter] = useState('')
    const [countries, setNewCountries] = useState([])

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setNewCountries(response.data)
            })
    }, [])

    const handleFilterChange = (event) => {
        setNewFilter(event.target.value)
    }

    return (
        <div>
            <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
            <Countries filter={newFilter} countries={countries} />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))