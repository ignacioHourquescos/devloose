
import ss from './Card.module.scss'
import { useState } from 'react'
import { useRouter } from 'next/router'
import useAppContext from "../../Context/UseAppContext";


import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { getSystemErrorName } from 'util';

const Card =({project})=> {
   const router = useRouter()
   const {lang} = useAppContext();
   const [displayVideo, setDisplayVideo] = useState(true);

  //  const showMoreInfo = () =>{
  //     if(project.type == "PROTOTYPE"){
  //        router.push(`/prototypes/${project.video}`)
  //     }else{
  //        router.push(`${project.link}`)
  //     }
  //  }

   const showMoreInfo = () =>{

       router.push(`/prototypes/${project.video}`)

 }

  return (
    <div className={ss.container}  style={{ scrollSnapAlign: "center", scrollSnapStop: "always" }} >

      <div className={ss.description} >
    
           
      {displayVideo
               ?
            <div>
               <span className={ss.type}>{project.type} </span> 
               <h1 className={ss.title} >{project.title.es} </h1>
               <h4 className={ss.detail} >{project.client?project.client:"Made for HSR abogados / Ago2021"}</h4>
               <h3 className={ss.brief}>{project.desc.es}</h3>
               {/* <div className={ss.arrow} onClick={()=>showMoreInfo()}> */}
               <div className={ss.arrow} onClick={()=>setDisplayVideo(false)}>
               +
               {/* {returnButton(lang,project)} */}
               
               </div>
               </div>

               :
               <div className={ss.video_container}>
               <p onClick={()=>setDisplayVideo(true)}>cerrar</p>
               {
               isMobile 
               ?
               <>

               <div style={{padding:"0%"}} dangerouslySetInnerHTML={{__html: renderVideoMobile(`/greenHab.m4v`)}}/>
               </>
               :
               <>

               <div style={{padding:"0%"}} dangerouslySetInnerHTML={{__html: renderVideoDesktop(`/greenHab.m4v`)}}/>

               </>
              }


                </div>
                
              
                
               }
           
               
               
             
      
   
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

const renderVideoDesktop = (path) => {
	return `

   <video
      loop
      playsinline
      muted
      autoplay
      
      style="border:5px solid black;
      border-top:40px solid black;
      border-bottom:40px solid black;
      border-radius:10px;
        
      ; margin:0% 20%;left:0%;width:60%; z-index:1;"
    >
   <source src=${path} type="video/mp4" />
</video>
`;
};


const renderVideoMobile = (path) => {
	return `
  <video
  loop
  playsinline
  muted
  autoplay
  controls={true}
  style="border:5px solid black;
  border-top:40px solid black;
  border-bottom:40px solid black;
  border-radius:10px;
    
  ; margin:0% 5%;left:0%;width:90%; z-index:1;"
>
   <source src=${path} type="video/mp4" />
</video>`;
};



