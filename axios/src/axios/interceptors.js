import axios from 'axios'

const authFetch = axios.create({
    baseURL : 'https://course-api.com' 
})


//interceptoras are the functions which are to be acrried out on the request before sending or response nbefore receiving
authFetch.interceptors.request.use( 
    (request) => {
        request.headers.common['Accept'] = 'application/json'
        console.log("request sent")
        return request
    } , 
    (error) => {
        return Promise.reject(error)
    }  )

authFetch.interceptors.response.use( 
    (response) => {
        // response.headers.common[]
        console.log("got response")
        return response
    } , 
    (error) => {
        console.log(error.response)
    }  )

export default authFetch