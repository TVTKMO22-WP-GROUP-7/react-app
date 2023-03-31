import { useEffect } from "react"
import { useState } from "react"
import setAuthToken from "./setAuthToken"

const useCheckAuth = () => {
    const [checkAuth, setCheckAuth] = useState(null)

    const isAuthorized = async() => {
        if(setAuthToken(localStorage.getItem("token")) === true){
            setCheckAuth(true)
        }
        else {
            setCheckAuth(false)
        }
    }
    useEffect(() => {
        isAuthorized()
    }, [checkAuth])
    
    return checkAuth;
}

export default useCheckAuth;