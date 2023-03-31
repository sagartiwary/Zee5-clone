


import { createContext,useState,useReducer } from 'react';
import Alert from "./Alert";
export const AppContext=createContext()

const initialState={
  token: "",
  error: false,
  auth: false,
  alert: false,
}



const ContextProvider = ({children}) => {
    const [loading,setLoading]=useState(false)
    const [err,setErr]=useState(false)

    const [state,dispatch]=useReducer(Alert,initialState)
    const {token,error,auth,alert}=state;
  return (
    <>
    <AppContext.Provider value={{setLoading,setErr,loading,err,token,error,auth,alert,dispatch}}>
  {children}
    </AppContext.Provider>
    </>
  )
}

export default ContextProvider;
