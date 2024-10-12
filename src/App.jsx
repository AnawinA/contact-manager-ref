import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AddPersonForm(props) {
  const [person, setPerson] = useState("")

  function handleChange(e) {
    setPerson(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.handleSubmit(person)
    setPerson('')
  }

  return <form onSubmit={handleSubmit}>
    <input type="text" 
    placeholder='Add new contact'
    onChange={handleChange}
    value={person}
    />
    <button type='submit'>Add</button>
  </form>
}

function PeopleList(props) {
  const arr = props.data
  const listItem = arr.map((val, index) => <li key={index}>{val}</li>)
  return <ul>{listItem}</ul>
}

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data)

  function addPerson(name) {
    if (name != '') {
      setContacts([...contacts, name])
    }
  }

  return <div>
    <AddPersonForm handleSubmit={addPerson} />
    <PeopleList data={contacts} />
  </div>
}


const contacts = ["James Smith", "Thomas Annderson", "Bruce Wayne"]

function App() {
  return (
    <>
      <ContactManager data={contacts} />
    </>
  )
}

export default App
