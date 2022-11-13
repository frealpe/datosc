
import axios from 'axios';
import { getEnvVariables } from '../helpers';

const{VITE_API_URL} = getEnvVariables()

const laboratorioApi= axios.create({
    baseURL: VITE_API_URL

});

laboratorioApi.interceptors.request.use(config =>{

 config.headers={
   ...config.headers,
  'x-token':localStorage.getItem('token')  
 }   
 return config;   
})

//Todo configura interceptores

export default laboratorioApi;