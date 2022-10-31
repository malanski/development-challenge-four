import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'http://localhost:8080/patientsmanagementapi'
});

export const PatientApi = {
    listPatients: () => {
        return axios.get('/consult');
    },
    getPatientById: (id) => {
        return axios.get(`/consult/${id}`)
    }
};