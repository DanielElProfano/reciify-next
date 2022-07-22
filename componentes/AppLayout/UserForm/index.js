/* eslint-disable react/prop-types */
import Button from '../Button'

export default function UserForm({ email, setEmail, submit, setSubmit, password, setPassword }) {
  console.log(email, setEmail, submit, password)

  function submitForm(event) {
    event.preventDefault()
    setSubmit(true)
  }

  return (
    <form onSubmit={submitForm}>
      <label>User: </label>
      <input
        className="b-input"
        name="email"
        value={email}
        type="text"
        onChange={(e) => setEmail(e.target.value)} />
      <label>Password: </label>
      <input
        className="b-input"
        name="password"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={submitForm}>Login</Button>
    </form>
  )
}
