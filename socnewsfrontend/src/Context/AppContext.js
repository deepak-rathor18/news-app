import React, { createContext, useState } from 'react'

export const AppContext = createContext();

export function  AppContextProvider({children}){

const [userData,setUserData]=useState("")

const [isOpen, setIsOpen] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""

    })

    const [userLoginData, setUserLoginData] = useState({
        "id": "" ,
        "firstName":"" ,
        "lastName":"" ,
        "email": "",
     })

    const [fromDataLogin, setFromDataLogin] = useState({
        email: "",
        password: ""
    })
    


const value={
    formData,
    setFormData,
    userData,
    setUserData,
    fromDataLogin,
    setFromDataLogin,
   
    isOpen,
    setIsOpen,
    userLoginData,
    setUserLoginData
}

return(
<AppContext.Provider value={value}>
{children}
</AppContext.Provider>
)
}