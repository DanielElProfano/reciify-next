import Button from '../Button'
import { useState } from 'react'

const INITIAL_STATE = {
  email: '',
  password: ''
}
export default function UserForm(props) {
  console.log(props)
  const [form, setForm] = useState(INITIAL_STATE)

  function submitForm(event) {
    event.preventDefault()
    props.form(form)
  }
  function handlerForm(event) {
    const { value, name } = event.target
    setForm({ ...form, [name]: value })
  }
  return (

    <form onSubmit={submitForm}>
      <label>User: </label>
      <input
        className="b-input"
        name="email"
        value={form.email}
        type="text"
        onChange={handlerForm} />
      <label>Password: </label>
      <input
        className="b-input"
        name="password"
        value={form.password}
        type="password"
        onChange={handlerForm} />
      <Button onClick={submitForm}>Login</Button>
    </form>
  )
}
