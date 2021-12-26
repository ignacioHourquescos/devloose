
import ss from './Selectors.module.scss'


const Selectors =()=> {
  return (
    <div className={ss.container}>
      <div className={ss.language_selection}>
         <div className={ss.language}>ESP</div>
         <div className={ss.language}>ENG</div>
         <div className={ss.language}>POR</div>
      </div>
      {/* <div className={ss.mode_selection}>
         <div className={ss.mode}>LIGHT</div>
         <div className={ss.mode}>DARK</div>
      </div> */}
    </div>
  )
}


export default Selectors