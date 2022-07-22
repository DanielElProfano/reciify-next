/* eslint-disable react/prop-types */
import '../styles/globals.css'
import Navbar from '../componentes/Navbar'
import AppLayout from '../componentes/AppLayout'
import GlobalState from '../context/GlobalState'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalState>
        <AppLayout>
          {Component.name !== 'Home' && <Navbar />}
          < Component {...pageProps} />
        </AppLayout>
      </GlobalState>
    </>
  )
}

export default MyApp
