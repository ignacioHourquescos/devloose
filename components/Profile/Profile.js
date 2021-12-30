
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
  
      <div className={ss.tools}>
         <div className={ss.go_to_page}> <a href="https://www.linkedin.com/in/ihourquescos/"><FaLinkedin size={40} color="black"/></a></div>
         <div className={ss.go_to_page}> <a href="https://www.behance.net/ignaciohourquescos"><FaBehance size={40} color="black"/></a></div>
         <div className={ss.go_to_page}> <a href="https://github.com/ignacioHourquescos"><FaGithub size={40} color="black"/></a></div>               
       </div>
       <Selectors/>
    </div>
    
  )
}


const mainData = 
   {
      a: {
         esp:"HOLA, SOY IGNACIO",
         eng:"HI, I AM IGNACIO",
         por:"Oi, SOU O IGNACIO"
      },
      b: {
         esp:"Estos son algunos de los trabajos que vengo desarollando desde el 2019",
         eng:"Here you can find some projects that I have been developing since 2019",
         por:"Esses som algums projeitos que eu venho desenvolvende desde 2019 "
      },
      c: {
         esp:"Esta compuesto por aplicaciones web y prototipos funcionales",
         eng:"it's composed by web apps and functional prototipes",
         por:"É composto por aplicativos da web e protótipos funcionais"
      },
      d: {
         esp:"Espero que te gusten",
         eng:"Hope you like them",
         por:"Espero que voce goste"
      },
   }

