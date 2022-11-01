import './viewPatients.scss';
import PatientCard from "../../components/PatientCard/PatientCard";
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import { useState, useEffect } from 'react';
import { PatientApi } from '../../services/api';

export const ViewPatients = () => {
    let [dataApi, setDataApi] = useState([]);

        useEffect(() => {
            PatientApi.listPatients()
              .then((response) => {
                // console.log(response)
                const data = response.data.patients;
                setDataApi(data);
              })
              .catch(function (error) {
                console.log(error);
              });
        }, []);

    return (
        <div className="patients-view">
            <h2>
                <FormatListNumberedIcon />&ensp;Patients list view&ensp;<FormatListNumberedIcon />
            </h2>

            <div className="patients-view-list">
                {dataApi.map((data, index) => <PatientCard dataApi={data} index={index} />)}
            </div>
        </div>
    );
}