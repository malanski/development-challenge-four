import Axios from 'axios';

const axios = Axios.create({
    //LOCAL URL 
    // baseURL: 'http://localhost:8000'
    
    // Heroku Backend Deploy
    baseURL: 'https://my-register-backend.herokuapp.com'
});

export const PatientApi = {
    listPatients: () => {
        return axios.get('/patients');
    },
    getPatientById: (id) => {
        return axios.get(`/patients/${id}`)
    },
    registerPatient: (dataRegister) => {
        return axios.post('/patients', dataRegister)
    },
    updatePatient: (id) => {
        return axios.patch(`/patients/${id}`)
    },
    deletePatient: (id) => {
        return axios.delete(`/patients/${id}`)
    }
};