
import ss from './Profile.module.scss'
import Card from '../Card/Card'
import portfolio from '../../utils/utils.js'

export default function CardContainer() {
  return (
    <div className={ss.container}>
      <div className={ss.intro}>
         HOLA! SOY IGNACIO
      </div>

      <div className={ss.brief}>
         Estos son algunos de mis trabajos.
      </div>
  
      
    </div>
    
  )
}
