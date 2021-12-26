
import ss from './CardContainer.module.scss'
import Card from '../Card/Card'
import portfolio from '../../utils/utils.js'

export default function CardContainer() {
  return (
    <div className={ss.container}>

      {portfolio.map(element =>
         <Card project={element}/>
      )}
    </div>
    
  )
}
