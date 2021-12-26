import '../styles/globals.css'


import Selectors from '../components/Selectors/Selectors'
function MyApp({ Component, pageProps }) {
  return (<>
  {/* <Selectors/> */}

  <Component {...pageProps} />
  </>)
}

export default MyApp
