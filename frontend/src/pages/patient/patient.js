import './patient.scss';

import PersonIcon from '@mui/icons-material/Person';import { useState, useEffect } from 'react';
import { PatientApi } from "../../services/api";
import { useParams } from 'react-router-dom';

export const Patient = (props) => {
    const { id } = useParams();

    const [state, setState] = useState({
        name: '',
        birthDate: '',
        email: '',
        address: [],

    });

    useEffect(() => {
        PatientApi.getPatientById(id).then(({ data }) => {
            console.log(data.json())
            setState(data.patients);
        }).catch((error) => {
            console.log(error);
        });
    }, [id]);

    return (
        <div className="patient">
            <h2><PersonIcon /> Patient Data <PersonIcon /></h2>
            <div className="patient-data">
                    <h3>Name: {String(state.name)}</h3>
                    <p>Birth date: {state.birthDate}</p>
                    <p>Email: {state.email }</p>
                    <p>Address:</p>
                    <ul>
                        {state.address.map(({ address }, index) => <li key={index}>{address.name}</li>)}
                    </ul>
                </div>
        </div>
    );
}