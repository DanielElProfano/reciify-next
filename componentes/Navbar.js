import Link from 'next/link'
import { useRouter } from 'next/router'
import { logoutSession } from '../services/userServices'
import { clearStore } from '../storage'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  const router = useRouter()
  const handleLogout = async () => {
    const response = await logoutSession()
    clearStore.local()
    clearStore.session()
    router.push('/')
  }
  return (
    <div className={styles.navbar}>
      <li className={styles.options}>
        <Link href={'/Wall'}>Wall</Link>
      </li>
      <li className={styles.options}>
        <Link href={'/Friends'}>Friends</Link>
      </li>
      <li className={styles.options}>
        <Link href={'/Profile'}>Profile</Link>
      </li>
      <li className={styles.options}>
        <Link href={'/Notifications'}>Notificactions</Link>
      </li>
      <li className={styles.options} onClick={handleLogout}>
        Logout
      </li>
    </div >
  )
}

export default Navbar
