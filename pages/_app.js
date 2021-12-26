import '../styles/globals.css'
import { AppProvider }  from '../Context/UseAppContext'

function MyApp({ Component, pageProps }) {
  return ( <AppProvider>

  <Component {...pageProps} />
  </AppProvider>)
  
}

export default MyApp
