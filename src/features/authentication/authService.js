import axios from "axios";

//services is for creating the http request and sending the data back

const api_url = 'http://localhost:8765/auth/'

//user registration
const register = async (userData) => {
    const response = await axios.post(api_url+'register', userData)

    //axios put data into object called data
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

//user login
const login = async (userData) => {
    const response = await axios.post(api_url + 'login', userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

//logout user
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login
}

export default authService
