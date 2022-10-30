import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'https://localhost:8080/patientsmanagementapi'
});

export const PatientApi = {
    listPatients: (offset = 0, limit = 20) => {
        return axios.get('/consult');
    },
    getPatientById: (id) => {
        return axios.get(`/consult/${id}`)
    }
};