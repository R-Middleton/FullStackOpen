import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1, },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      id: persons.length + 1,
      number: newNumber
    }

    var names = persons.map((person) => person.name)
    if (names.includes(personObject.name)) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personObject))
    }

    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        filter shown with <input value={newFilter} onChange={handleFilterChange} />
      </div>
      <form onSubmit={addPerson}>
        <h2>add a new</h2>
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /> </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {persons.map(person => {
        if (person.name.toLowerCase().includes(newFilter.toLowerCase())) {
          return (
            <Person person={person} key={person.name} />
          )
        } else {
          return ''
        }
      })}
    </div>
  )
}

export default App