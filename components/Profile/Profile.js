
import ss from './Profile.module.scss'
import { FaLinkedin} from 'react-icons/fa';
import { FaGithub} from 'react-icons/fa';
import { FaBehance} from 'react-icons/fa';

import Selectors from '../Selectors/Selectors'
import useAppContext from "../../Context/UseAppContext";

export default function CardContainer() {
   const {lang} = useAppContext();

  return (
    <div className={ss.container} style={{ scrollSnapAlign: "center", scrollSnapStop: "always" }}>
      <div className={ss.intro}>
         {lang=="ESP" ? mainData.a.esp : lang=="ENG" ? mainData.a.eng : mainData.a.por}
      </div> 
 
      <div className={ss.brief}>
      {lang=="ESP" ? mainData.b.esp : lang=="ENG" ? mainData.b.eng : mainData.b.por}
      </div>

      <div className={ss.brief}>
      {lang=="ESP" ? mainData.c.esp : lang=="ENG" ? mainData.c.eng : mainData.c.por}
      </div>

      <div className={ss.brief}>
      {lang=="ESP" ? mainData.d.esp : lang=="ENG" ? mainData.d.eng : mainData.d.por}
      </div>
  
      {/* <div className={ss.tools}>
         <div className={ss.go_to_page}> <a href="https://www.linkedin.com/in/ihourquescos/"><FaLinkedin size={40} color="black"/></a></div>
         <div className={ss.go_to_page}> <a href="https://www.behance.net/ignaciohourquescos"><FaBehance size={40} color="black"/></a></div>
         <div className={ss.go_to_page}> <a href="https://github.com/ignacioHourquescos"><FaGithub size={40} color="black"/></a></div>               
       </div> */}
       {/* <Selectors/> */}

         
      {/* <div className={ss.tools}>
         <div className={ss.go_to_page}> <a href="https://www.linkedin.com/in/ihourquescos/">About</a></div>
         <div className={ss.go_to_page}> <a href="https://www.behance.net/ignaciohourquescos">Services</a></div>
         <div className={ss.go_to_page}> <a href="https://github.com/ignacioHourquescos">Principles</a></div>               
       </div> 
        */}
    </div>
    
  )
}


const mainData = 
   {
      a: {
         esp:"WEBALUX",
         eng:"BARBELUX",
         por:"BELUX"
      },
      b: {
         esp:"Combinamos logica, innovacion y diseño para crear productos digitales.",
         eng:"We combine logic, innovation and design to create digital products",
         por:"Combinamos logica, desenho e innovacao para criar produos de alto valor "
      },
      c: {
         esp:"De la idea a la acción.",
         eng:"From ideas to action",
         por:"Das ideais a accao"
      },
      d: {
        esp:"Siempre abiertos a nuevos desafios.",
        eng:"Always open to new challenges",
        por:"Sempre aberto a novos desafios"
      },
   }

