
import ss from './index.module.scss'
import CardContainer from '../components/CardContainer/CardContainer'
import Profile from '../components/Profile/Profile'
import Head from 'next/head'

export default function Home() {
  return (
     <>
      <Head>
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
