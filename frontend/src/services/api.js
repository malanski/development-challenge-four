import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'https://localhost:8080/patientsmanagementapi/consult'
});

export const PatientApi = {
    listPatients: () => {
        return axios.get('/consult');
    },
    getPatientById: (id) => {
        return axios.get(`/consult/${id}`)
    }
};