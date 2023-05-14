import helpers from '../helpers/helpers';
import axios from "axios"

const { BaseUrl } = helpers

export const requestApi = async ({ url, method, data, token }) => {

    const headers = 
    { 
        "Accept": "application/json",
        "Content-Type": "application/json; charset=utf-8"    
    }

    if(token){
        headers['Authorization'] = `Bearer ${token}`
    }

    const config = {
        url: `${BaseUrl}${url}`, 
        method, 
        data,
        headers
    }

    if(data){
        config.data = data
    }

    return axios(config)
    .then(response => {
        return { result: response.data, responseStatus: true }
    })
    .catch((error) => {
        console.log(error)
        if(error.response){
            //Request made and server responded
            return { responseStatus: false, errorMsg: error.response.data }
        } 


        else if(error.request){
            //Request made but no server response
            return { responseStatus: false, errorMsg: 'Server error, try again later' }
        } 
        
        
        else{
            return { responseStatus: false, errorMsg: 'Server error, try again later' }
        }
    }) 
}