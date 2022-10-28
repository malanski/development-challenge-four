import Axios from 'axios';
const axios = Axios.create({
    baseURL: 'https://localhost:3030'
});

export const PatientApi = {
    listPatients: (offset = 0, limit = 20) => {
        return axios.get('/patient', {
            params: {
                offset,
                limit,
            }
        });
    },
    getPatientById: (id) => {
        return axios.get(`/patient/${id}`)
    }
};