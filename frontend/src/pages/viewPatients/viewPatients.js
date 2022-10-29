import './viewPatients.scss';
import PatientCard from "../../components/PatientCard/PatientCard";

import { useState, useEffect } from 'react';
import { PatientApi } from '../../services/api';

export const ViewPatients = () => {
    let [dataApi, setDataApi] = useState([]);


        useEffect(() => {
            const url = "http://localhost:8080/patientsmanagementapi/consult";
        
            const fetchData = async () => {
                try {
                    const response = await fetch(url);
                    const json = await response.json();
            
                    setDataApi(json.patients);

                } catch (error) {
                    console.log("error", error);
                }
            };
        
            fetchData();
        }, []);

    return (
        <div>
            <h2>Patients list view</h2>

            <div className="patients-view-list">
                {dataApi.map((data, index) => <PatientCard dataApi={data} index={index} />)}
            </div>
        </div>
    );
}