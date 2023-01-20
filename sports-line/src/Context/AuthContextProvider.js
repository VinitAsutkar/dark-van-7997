import React from "react";
export const AuthContext=React.createContext();
const AuthContextProvider=({children})=>{
    const [IsAuth,SetIsAuth]=React.useState(false);
    const Login=()=>{
        SetIsAuth(true)
    }
    const Logout=()=>{
        SetIsAuth(false)
    }
    return <AuthContext.Provider value={{IsAuth,Login,Logout}}>{children}</AuthContext.Provider>
}
export {AuthContextProvider}