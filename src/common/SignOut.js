import { useNavigate } from "react-router-dom"

export const SignOut = () => {

    const navigate = useNavigate()
    sessionStorage.removeItem('userId')
    navigate('/')
}