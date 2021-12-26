import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()
const useAppContext = () => useContext(AppContext)

export const AppProvider = ({ children }) => {

    const [lang, setLang] = useState("ESP");
   const [generalDisplayVideo, setGeneralDisplayVideo]  =useState(false)

    const displayIngles = (value) =>{
        setLang("ENG");
	}
    const displayEspañol = (value) =>{
        setLang("ESP");
	}

   const handleGeneralDisplayVideo = (value) =>{
      setGeneralDisplayVideo(value);
   }

      
    return (
        <AppContext.Provider value={{
				lang, generalDisplayVideo,
            handleGeneralDisplayVideo,
                  displayIngles,
                  displayEspañol
            }}>{children}</AppContext.Provider>)
}

export default useAppContext