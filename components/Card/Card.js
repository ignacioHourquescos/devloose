
import ss from './Card.module.scss'
import { useState } from 'react'
import useAppContext from "../../Context/UseAppContext";


const Card =({project})=> {

   const[displayVideo, setDisplayVideo] = useState(false)

   const showCard = () =>{
      setDisplayVideo(false);
   }
  
   const showVideo = () =>{
      setDisplayVideo(true);
   }

   
  return (
    <div className={ss.container}  style={{ scrollSnapAlign: "center", scrollSnapStop: "always" }} >

      <div className={ss.description} style={displayVideo ?  {border:"none",}:{backgroundImage:"none"}} >
         {
            displayVideo
         ?
            <div className={ss.video}>
               <div style={{padding:"0%"}} dangerouslySetInnerHTML={{__html: renderVideo('./HSR.m4v')}}/>

               <div className={ss.arrowBack} onClick={()=>showCard()}>{close}</div>
            </div>
         :
            <div>
               <span className={ss.type}>{project.color} </span> 
               <h1 className={ss.title} >{project.title.es} </h1>
               <h4 className={ss.detail} >Made for HSR abogados / Ago2021</h4>
               <h3 className={ss.brief}>{project.desc.es}</h3>
               <div className={ss.arrow} onClick={()=>showVideo()}>Mas Detalle</div>
            </div>
         }
      </div>

    </div>
  )
}


export default Card

const arrow =<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.0002 8.33337L22.0627 11.2709L33.6877 22.9167H8.3335V27.0834H33.6877L22.0627 38.7292L25.0002 41.6667L41.6668 25L25.0002 8.33337Z" fill="#323232"/>
</svg>

const arrowBack = <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.5833 22.9166H16.3125L26.4792 12.75C27.2917 11.9375 27.2917 10.6041 26.4792 9.79163C25.6667 8.97913 24.3542 8.97913 23.5417 9.79163L9.8125 23.5208C9 24.3333 9 25.6458 9.8125 26.4583L23.5417 40.1875C24.3542 41 25.6667 41 26.4792 40.1875C27.2917 39.375 27.2917 38.0625 26.4792 37.25L16.3125 27.0833H39.5833C40.7292 27.0833 41.6667 26.1458 41.6667 25C41.6667 23.8541 40.7292 22.9166 39.5833 22.9166Z" fill="#323232"/>
</svg>

const close =<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.5832 13.3541L36.6457 10.4166L24.9998 22.0625L13.354 10.4166L10.4165 13.3541L22.0623 25L10.4165 36.6458L13.354 39.5833L24.9998 27.9375L36.6457 39.5833L39.5832 36.6458L27.9373 25L39.5832 13.3541Z" fill="#323232"/>
</svg>


const renderVideo = (path) =>{
   return(`
   <video
      height="100%"
      loop
      playsinline
      muted
      autoplay
      style="  
               margin:5%;
               
               position:absolute;top:5%;right:0%;height:90%;object-fit:contain; z-index:1;
      
               
               "
               preload="metadata"
            >
   <source src=${path} type="video/mp4" />
</video>`
      
   )
}