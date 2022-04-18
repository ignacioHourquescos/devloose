
import ss from './Card.module.scss'
import { useState } from 'react'
import { useRouter } from 'next/router'
import useAppContext from "../../Context/UseAppContext";


import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { getSystemErrorName } from 'util';

const Card =({project,color})=> {
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
    <div className={ss.container}  style={{ scrollSnapAlign: "center", scrollSnapStop: "always", scrollBehavior: "smooth"}} >

      <div className={ss.description} >
      {/* {displayVideo?
     ""
      :
      <div className={ss.card_color} style={{backgroundColor:`${project.color}`}}></div>} */}
           
      {displayVideo
               ?
            <div>
               <span className={ss.type}>{project.type} </span> 
               <h1 className={ss.title} >{project.title.es} </h1>
               <h4 className={ss.detail} >{project.date}</h4>
               <h3 className={ss.brief}>{project.desc.es}</h3>
               {/* <div className={ss.arrow} onClick={()=>showMoreInfo()}> */}
               <div className={ss.arrow} onClick={()=>setDisplayVideo(false)}>
               PEEK
               {/* {returnButton(lang,project)} */}

               </div>
               </div>

               :
               <>
               <span className={ss.close_video}  onClick={()=>setDisplayVideo(true)}>{close}</span>
              
               <div className={ss.video_container}>
            
               {
               isMobile 
               ?
               <>
                
               <div style={{padding:"0%"}} dangerouslySetInnerHTML={{__html: renderVideoMobile(`${project.video}`,`${project.videoType}` )}}/>
               </>
               :
               <>
              
               <div style={{padding:"0%"}} dangerouslySetInnerHTML={{__html: renderVideoDesktop(`${project.video}`,`${project.videoType}`)}}/>

               </>
              }


                </div>
                </>
                
              
                
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

const renderVideoDesktop = (path,videoType) => {
	if (videoType=="landscape"){
    return `

    <video
       loop
       playsinline
       muted
       autoplay
       controls={true}
       style="border:5px solid #cfcfcf;
       border-top:20px solid #cfcfcf;
       border-bottom:20px solid ##cfcfcf;
       border-radius:20px;
         
       ; margin-top:50%; left:0%;width:100%; z-index:1;"
     >
 
    <source src=${path} type="video/mp4" />
 </video>
 `;
  }else{
    return `
    <video
       loop
       playsinline
       muted
       autoplay
       controls={true}
       style="border:5px solid #cfcfcf;
       border-top:40px solid #cfcfcf;
       border-bottom:40px solid #cfcfcf;
       border-radius:20px;
         
       ; margin:6% 21%;left:0%;width:58%; z-index:1;"
     >
    <source src=${path} type="video/mp4" />
 </video>
 `;


  }
  

};


const renderVideoMobile = (path, videoType) => {
  if (videoType=="landscape"){
    return `
    <video
    loop
    playsinline
    muted
    autoplay
    controls={true}
    style="border:5px solid #cfcfcf;
    border-top:40px solid #cfcfcf;
    border-bottom:40px solid #cfcfcf;
    border-radius:10px;
      
    ; padding:0; margin:0%;left:0%;width:100%;z-index:1;margin-top:60%;"
  >
     <source src=${path} type="video/mp4" />
  </video>`;
  }else{
	return `
  <video
  loop
  playsinline
  muted
  autoplay
  controls={true}
  style="border:5px solid #cfcfcf;
  border-top:40px solid #cfcfcf;
  border-bottom:40px solid #cfcfcf;
  border-radius:10px;
    
  ; margin:0% 5%;left:0%;width:83%;z-index:1;margin-top:0%;"
>
   <source src=${path} type="video/mp4" />
</video>`;
}};




const close = <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0" d="M19.9998 6.66663C12.6498 6.66663 6.6665 12.65 6.6665 20C6.6665 27.35 12.6498 33.3333 19.9998 33.3333C27.3498 33.3333 33.3332 27.35 33.3332 20C33.3332 12.65 27.3498 6.66663 19.9998 6.66663ZM28.3332 25.9833L25.9832 28.3333L19.9998 22.35L14.0165 28.3333L11.6665 25.9833L17.6498 20L11.6665 14.0166L14.0165 11.6666L19.9998 17.65L25.9832 11.6666L28.3332 14.0166L22.3498 20L28.3332 25.9833Z" fill="#323232"/>
<path d="M20.0002 3.33337C10.7835 3.33337 3.3335 10.7834 3.3335 20C3.3335 29.2167 10.7835 36.6667 20.0002 36.6667C29.2168 36.6667 36.6668 29.2167 36.6668 20C36.6668 10.7834 29.2168 3.33337 20.0002 3.33337ZM20.0002 33.3334C12.6502 33.3334 6.66683 27.35 6.66683 20C6.66683 12.65 12.6502 6.66671 20.0002 6.66671C27.3502 6.66671 33.3335 12.65 33.3335 20C33.3335 27.35 27.3502 33.3334 20.0002 33.3334ZM25.9835 11.6667L20.0002 17.65L14.0168 11.6667L11.6668 14.0167L17.6502 20L11.6668 25.9834L14.0168 28.3334L20.0002 22.35L25.9835 28.3334L28.3335 25.9834L22.3502 20L28.3335 14.0167L25.9835 11.6667Z" fill="#323232"/>
</svg>


