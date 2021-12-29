
import ss from './Selectors.module.scss'
import useAppContext from "../../Context/UseAppContext";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


const Selectors =()=> {

   const {lang, displayENG, displayESP, displayPOR} = useAppContext();
   const handleDisplayLang = () =>{
      lang=="ESP" 
      ? 
      displayENG() 
      :
      lang="ENG" 
         ? 
         displayPOR() 
         : 
         lang=="POR" 
            ? 
            displayESP() 
            :
            displayESP()
   }


  return (
    <div className={ss.container}>
      {isBrowser?
         <div className={ss.language_selection}>
         <div className={ss.language} onClick={()=>displayESP()}>ESP</div>
         <div className={ss.language} onClick={()=>displayENG()}>ENG</div>
         <div className={ss.language} onClick={()=>displayPOR()}>POR</div>
      </div>
      :
      
      <div className={ss.lang_mobile}  onClick={()=>handleDisplayLang()}>
         {lang}
  
      </div>
      }

    </div>
  )
}


export default Selectors