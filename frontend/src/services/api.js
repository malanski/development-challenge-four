import Axios from 'axios';

const axios = Axios.create({
    //LOCAL URL 
    // baseURL: 'http://localhost:8000/patientsmanagementapi'
    
    // Heroku Backend Deploy
    baseURL: 'https://my-register-backend.herokuapp.com/patientsmanagementapi'
});

export const PatientApi = {
    listPatients: () => {
        return axios.get('/consult');
    },
    getPatientById: (id) => {
        return axios.get(`/consult/${id}`)
    }
};