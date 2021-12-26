
import ss from './index.module.scss'
import CardContainer from '../components/CardContainer/CardContainer'
import Profile from '../components/Profile/Profile'

export default function Home() {
  return (
     <>
      
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
