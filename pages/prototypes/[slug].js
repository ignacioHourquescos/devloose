
import ss from './slug.module.scss'
import { useRouter } from 'next/router'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


const Prototype =({project})=> {

   const router = useRouter();
	const slug = router.query.slug;

  return (
    <div className={ss.container}  style={{ backgroundColor:"black !important",scrollSnapAlign: "center", scrollSnapStop: "always" }} >

      <div className={ss.description} style={{backgroundImage:"none"}} >
   
            <div className={ss.video}>
            {
               isMobile 
               ?
               <div style={{padding:"0%"}} dangerouslySetInnerHTML={{__html: renderVideoMobile(`/${slug}.m4v`)}}/>
               :
               <div style={{padding:"0%"}} dangerouslySetInnerHTML={{__html: renderVideoDesktop(`/${slug}.m4v`)}}/>
            }

{/* 
               <div className={ss.arrow_back} onClick={()=>showCard()}>{close}</div> */}
            </div>

      </div>

    </div>
  )
}




export default Prototype



const renderVideoMobile = (path) => {
	return `
   <video
      loop
      playsinline
      muted
      autoplay
      style=" position:fixed;margin:10%;height:90%;object-fit:contain; z-index:1;"
      preload="metadata"
      
            >
   <source src=${path} type="video/mp4" />
</video>`;
};


const renderVideoDesktop = (path) => {
	return `
   <video
      loop
      playsinline
      muted
      autoplay
      style=" position:fixed;margin:5%;left:35%;height:80%;object-fit:contain; z-index:1;"
            >
   <source src=${path} type="video/mp4" />
</video>`;
};

const close = <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0" d="M19.9998 6.66663C12.6498 6.66663 6.6665 12.65 6.6665 20C6.6665 27.35 12.6498 33.3333 19.9998 33.3333C27.3498 33.3333 33.3332 27.35 33.3332 20C33.3332 12.65 27.3498 6.66663 19.9998 6.66663ZM28.3332 25.9833L25.9832 28.3333L19.9998 22.35L14.0165 28.3333L11.6665 25.9833L17.6498 20L11.6665 14.0166L14.0165 11.6666L19.9998 17.65L25.9832 11.6666L28.3332 14.0166L22.3498 20L28.3332 25.9833Z" fill="#323232"/>
<path d="M20.0002 3.33337C10.7835 3.33337 3.3335 10.7834 3.3335 20C3.3335 29.2167 10.7835 36.6667 20.0002 36.6667C29.2168 36.6667 36.6668 29.2167 36.6668 20C36.6668 10.7834 29.2168 3.33337 20.0002 3.33337ZM20.0002 33.3334C12.6502 33.3334 6.66683 27.35 6.66683 20C6.66683 12.65 12.6502 6.66671 20.0002 6.66671C27.3502 6.66671 33.3335 12.65 33.3335 20C33.3335 27.35 27.3502 33.3334 20.0002 33.3334ZM25.9835 11.6667L20.0002 17.65L14.0168 11.6667L11.6668 14.0167L17.6502 20L11.6668 25.9834L14.0168 28.3334L20.0002 22.35L25.9835 28.3334L28.3335 25.9834L22.3502 20L28.3335 14.0167L25.9835 11.6667Z" fill="#323232"/>
</svg>
