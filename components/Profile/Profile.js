
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
          {/* <div className={ss.sections}>
         <div className={ss.sections_detail}> <a href="https://www.linkedin.com/in/ihourquescos/">ABOUT</a></div>
         <div className={ss.sections_detail}> <a href="https://www.behance.net/ignaciohourquescos">PORTFOLIO</a></div>
         <div className={ss.sections_detail}> <a href="https://github.com/ignacioHourquescos">US</a></div>               
       </div>  */}
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

         
       <div className={ss.section06}>

  <a href="#section07"><span className={ss.arrow2}>{arrowDown}</span></a>
</div>
       
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
         esp:"Combinamos lógica, innovación y diseño para crear productos digitales.",
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



   const arrowDown=<svg width="31" height="43" viewBox="0 0 31 43" fill="none" xmlns="http://www.w3.org/2000/svg">
   <line x1="15.1666" y1="34.0416" x2="15.1666" y2="-4.19617e-05" stroke="#9E1068" strokeWidth="3"/>
   <path d="M27.8745 22.3752H25.3249C25.1516 22.3752 24.9884 22.4452 24.8864 22.56L15.2288 33.5228L5.57122 22.56C5.46923 22.4452 5.30606 22.3752 5.1327 22.3752H2.58317C2.36221 22.3752 2.23304 22.5824 2.36221 22.7308L14.3484 36.339C14.7835 36.8318 15.6741 36.8318 16.1059 36.339L28.092 22.7308C28.2246 22.5824 28.0954 22.3752 27.8745 22.3752V22.3752Z" fill="#9E1068"/>
   </svg>
   