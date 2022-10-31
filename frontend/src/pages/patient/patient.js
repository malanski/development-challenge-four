import './patient.scss';

import PersonIcon from '@mui/icons-material/Person';
import { useState, useEffect } from 'react';
// import { PatientApi } from "../../services/api";
import { useParams } from 'react-router-dom';

export const Patient = () => {
    const { id } = useParams();

    const [state, setState] = useState({
        address: '',
        name: '',
        email: '',
        birthDate: '',
    });

    useEffect(() => {
        //LOCAL URL 
        // const url = `http://localhost:8000/patientsmanagementapi/consult/${id}`;
    
        // Heroku Backend Deploy
        const url = `https://my-register-backend.herokuapp.com/patientsmanagementapi/consult/${id}`;
        
            const fetchData = async () => {
                try {
                    const response = await fetch(url);
                    const json = await response.json();

                    const patients = json.patients;
                    console.log(json.patients)

                    setState({
                        name: patients.name,
                        email: patients.email,
                        birthDate: patients.birthDate,
                        address: patients.address,
                    });

                } catch (error) {
                    console.log("error", error);
                }
            };
        
            fetchData();
    }, [id]);

    return (
        <div className="patient">
            <h2><PersonIcon /> Patient Data <PersonIcon /></h2>
            <div className="patient-data">
                    <p>Id: {state.id}</p>
                    <p>Name: {state.name}</p>
                    <p>Email: {state.email}</p>
                    <p>Birth date: {state.birthDate}</p>
                    <p>Address:</p>
                    <ul>
                        <li>Zip Code: {state.address.zipCode}</li>
                        <li>Country: {state.address.country}</li>
                        <li>State: {state.address.county}</li>
                        <li>City: {state.address.city}</li>
                        <li>Street Address: {state.address.streetAddress}</li>
                        <li>Apt, suit, etc: {state.address.addition}</li>
                    </ul>
            </div>
        </div>
    );
}