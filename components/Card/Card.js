
import ss from './Card.module.scss'
import { useState } from 'react'
import { useRouter } from 'next/router'
import useAppContext from "../../Context/UseAppContext";


  

const Card =({project})=> {
   const router = useRouter()
   const {lang} = useAppContext();

   const showMoreInfo = () =>{
      if(project.type == "PROTOTYPE"){
         router.push(`/prototypes/${project.video}`)
      }else{
         router.push(`${project.link}`)
      }
   }

  return (
    <div className={ss.container}  style={{ scrollSnapAlign: "center", scrollSnapStop: "always" }} >

      <div className={ss.description} >
    
           

            <div>
               <span className={ss.type}>{project.type} </span> 
               <h1 className={ss.title} >{project.title.es} </h1>
               <h4 className={ss.detail} >{project.client?project.client:"Made for HSR abogados / Ago2021"}</h4>
               <h3 className={ss.brief}>{project.desc.es}</h3>
               <div className={ss.arrow} onClick={()=>showMoreInfo()}>
               +
               {/* {returnButton(lang,project)} */}
               
               
               
               
               </div>
            </div>
   
      </div>

    </div>
  )
}


export default Card


// const returnButton = (lang, project) =>{
//    if 
//    (lang=="ESP" && project.type=="PROTOTYPE"){return "Ver Prottipo en vivo"}else if{
//       return "prototipo"
//    }
// }