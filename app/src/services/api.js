import axios from 'axios'

const api = axios.create({
    // baseURL: 'http://localhost:3000'
    baseURL: 'http://10.0.2.2:3000' //localhost da maquina usando AVD Android Studio
})

export default api