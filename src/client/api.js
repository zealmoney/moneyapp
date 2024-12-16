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

export function getRegisteredUsers(){
    return(
        axios.create({
            baseURL: "https://moneyapp-backend.vercel.app/api/register/",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            }
        })
    )
}

export function generatePlaidToken(){
    axios({
        method: 'POST',
        url: 'https://sandbox.plaid.com/link/token/create',
        withCredentials: false,
        headers: {
          "Content-Type": 'application/json'
        },
        data: {"client_id": "6759ebff5437f70019243070", "secret": "fb3ea5b227144e10e1a520f50cae81", "institution_id": "ins_109508", "initial_products": ["identity"], "options": { "webhook": String, "override_username": "user_good", "override_password": "pass_good" }},
        
    })
    .then(response => {
        alert(response.status)
    })
}