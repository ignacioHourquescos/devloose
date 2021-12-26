
import ss from './CardContainer.module.scss'
import Card from '../Card/Card'
import portfolio from '../../utils/utils.js'
import { useEffect, useState } from "react";
import useAppContext from "../../Context/UseAppContext";

 const CardContainer = () => {
   const {lang} = useAppContext();



  return (
    <div className={ss.container} >

      {portfolio.map(element =>
         <Card project={element}/>
      )}
    </div>
    
  )
}

export default CardContainer