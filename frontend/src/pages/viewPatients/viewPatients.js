import './viewPatients.scss';
import PatientCard from "../../components/ParientCard/PatientCard";
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import { useState, useEffect } from 'react';

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
            <h2><FormatListNumberedIcon /> Patients list view <FormatListNumberedIcon /></h2>

            <div className="patients-view-list">
                {dataApi.map((data, index) => <PatientCard dataApi={data} index={index} />)}
            </div>
        </div>
    );
}