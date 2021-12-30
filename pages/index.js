
import ss from './index.module.scss'
import CardContainer from '../components/CardContainer/CardContainer'
import Profile from '../components/Profile/Profile'
import Head from 'next/head'

export default function Home() {
  return (
     <>
     		<Head>
				<title>Ignacio Hourquescos</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content="Portfolio" />
				<meta property="og:title" content="Ignacio Hourquescos" />
				<meta property="og:description" content="Socios" />
				<meta property="og:image" content="/logo.jpg" />
			</Head>
      
    <div className={ss.container}>

      <div className={ss.left_container}>
         <Profile/>
      </div>
      <div className={ss.right_container}>
         <CardContainer/>
      </div>   
    </div>
    </>
  )
}
