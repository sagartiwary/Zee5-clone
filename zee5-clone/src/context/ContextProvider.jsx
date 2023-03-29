

import React from 'react';
import { createContext,useState } from 'react';
export const AppContext=createContext()

const ContextProvider = ({children}) => {
    const [loading,setLoading]=useState(false)
    const [err,setErr]=useState(false)
  return (
    <>
    <AppContext.Provider value={{setLoading,setErr,loading,err}}>
  {children}
    </AppContext.Provider>
    </>
  )
}

export default ContextProvider;
