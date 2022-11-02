import './patient.scss';

import PersonIcon from '@mui/icons-material/Person';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

import { PatientApi } from '../../services/api';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

export const Patient = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const [state, setState] = useState({
        address: '',
        name: '',
        email: '',
        birthDate: '',
    });

    useEffect(() => {
        PatientApi.getPatientById(id)
            .then((response) => {
                const patient = response.data.patient;
                setState({
                    _id: patient._id,
                    name: patient.name,
                    email: patient.email,
                    birthDate: patient.birthDate,
                    address: patient.address,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [id]);

    function deletePatient(_id){
        console.log("This is the deleted id " + state._id)
        PatientApi.deletePatient(id)
        .then((response) => {
        console.log(response)

        })

    }

    return (
        <div className="patient">
            <h2><PersonIcon /> Patient Data <PersonIcon /></h2>
            
            <div className="patient-data">
                
                <hr/>
                <p className='patient-id'>Id: {state._id}</p>

                <p>Name: {state.name}</p>
                <p>Birth date: {state.birthDate}</p>

                <p>Email: {state.email}</p>

                <p>Address:</p>
                <ul>
                    <li>Zip Code: {state.address.zipCode}</li>
                    <li>Country: {state.address.country}</li>
                    <li>State: {state.address.county}</li>
                    <li>City: {state.address.city}</li>
                    <li>Street Address: {state.address.streetAddress}</li>
                    <li>Apt, suit, etc: {state.address.addition}</li>
                </ul>

                <hr/>
                <div className='patient-actions'>
                    <Button>
                        <Link to='/viewPatients'><KeyboardDoubleArrowLeftIcon />Back</Link>
                    </Button>

                    <Button onClick={() => deletePatient()} color="error">
                        <DeleteForeverTwoToneIcon />Delete
                    </Button>

                    <Button onClick={() => navigate(`/editPatient/${id}`)} title={state.name + " Data"}>
                        <EditIcon />Edit
                    </Button>

                    
                </div>
            </div>
        </div>
    );
}