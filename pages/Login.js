import { useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/router'

import UserForm from '../componentes/AppLayout/UserForm'
import GlobalContext from '../context/GlobalContext'
// import { loginService } from '../services/userServices'

import styles from '../styles/Login.module.css'
import { setSessionStore } from '../utils'
import { checkSession } from '../services/checkSession'

export default function Login() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [submit] = useState(false)

  const { loginUser } = useContext(GlobalContext)

  useEffect(() => {
    const getSession = async () => {
      const session = await checkSession()
      console.log("ses", session)
      if (session === 'sessión abierta') {
        router.push('/Wall')
      }
    }
    getSession()

  }, [])

  const onSubmit = async () => {
    const email = 'arriba@abajo.com'
    const password = 'arriba'
    const response = await loginUser(email, password)
    const { error } = response
    if (!error) {
      router.push('/Wall')
    }
  }


  return (
    <>
      <div className={styles.header}>
        <img src='/vercel.svg' alt='logo' />
        <h2 className={styles.title}>Welcome to Recify</h2>
      </div>
      <UserForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        submit={submit}
        setSubmit={onSubmit} />
    </>

  )
}
