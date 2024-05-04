import axios from "axios";

export default function getRecepientDetails(){
    return(
        axios.create({
            baseURL: "https://moneyapp-backend.vercel.app/api/recepients/",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            }
        })
    )
}