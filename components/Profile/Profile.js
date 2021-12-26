
import ss from './Profile.module.scss'
import { FaLinkedin} from 'react-icons/fa';
import { FaGithub} from 'react-icons/fa';
import { FaBehance} from 'react-icons/fa';

import Selectors from '../Selectors/Selectors'
import useAppContext from "../../Context/UseAppContext";

export default function CardContainer() {
   const {lang, handleScrollPosition,scrollPosition} = useAppContext();

  return (
    <div className={ss.container} style={{ scrollSnapAlign: "center", scrollSnapStop: "always" }}>
      <div className={ss.intro}>
         HOLA! SOY IGNACIO
      </div>
 
      <div className={ss.brief}>
         Estos son algunos de los trabajos que desarolle desde el 2019. 
      </div>

      <div className={ss.brief}>
      Esta compuesto por aplicaciones web y prototipos funcionales.
      </div>

      <div className={ss.brief}>
      Espero que te gusten!
      </div>
  
      <div className={ss.tools}>
                    <div className={ss.go_to_page}> <a href="https://www.linkedin.com/in/ihourquescos/"><FaLinkedin size={40} color="black"/></a></div>
                    <div className={ss.go_to_page}> <a href="https://www.behance.net/ignaciohourquescos"><FaBehance size={40} color="black"/></a></div>
                    <div className={ss.go_to_page}> <a href="https://github.com/ignacioHourquescos"><FaGithub size={40} color="black"/></a></div>               
       </div>
       <Selectors/>
    </div>
    
  )
}
