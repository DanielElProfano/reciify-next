import { useState } from 'react'
import { useRouter } from 'next/router'

import UserForm from '../componentes/AppLayout/UserForm'
import { loginService } from '../services/userServices'

import styles from '../styles/Login.module.css'
import { setLocalStore } from '../storage'

export default function Login() {
  const router = useRouter()
  const [user, setUser] = useState(false)

  const userLogin = async () => {
    const email = 'arriba@abajo.com'
    const password = 'arriba'
    const response = await loginService({ email, password })
    const { error, body } = response
    if (!error) {
      setUser(true)
      setLocalStore('userr', response)
      // sessionStorage.setItem('user', JSON.stringify(response))

      router.push('/Wall')
    }
  }

  return (
    <>
      <div className={styles.header}>
        <img src='/vercel.svg' alt='logo' />
        <h2 className={styles.title}>Welcome to Recify</h2>
      </div>
      <UserForm form={userLogin} />
    </>

  )
}
