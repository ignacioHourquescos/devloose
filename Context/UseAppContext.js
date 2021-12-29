import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()
const useAppContext = () => useContext(AppContext)

export const AppProvider = ({ children }) => {

    const [lang, setLang] = useState("ESP");
   const [generalDisplayVideo, setGeneralDisplayVideo]  =useState(false)

    const displayENG = (value) =>{
        setLang("ENG");
	}
    const displayESP = (value) =>{
        setLang("ESP");
	}

   const displayPOR = (value) =>{
      setLang("POR");
 }

   const handleGeneralDisplayVideo = (value) =>{
      setGeneralDisplayVideo(value);
   }

      
    return (
        <AppContext.Provider value={{
				lang, generalDisplayVideo,
            handleGeneralDisplayVideo,
                  displayENG,
                  displayESP,
                  displayPOR
            }}>{children}</AppContext.Provider>)
}

export default useAppContext