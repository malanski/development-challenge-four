import './viewPatients.scss';


import PatientCard from "../../components/ParientCard/PatientCard"

export const ViewPatients = (props) => {
    return (
        <div>
            <h2>Patients list view</h2>

            <div className="patients-view-list">
                <PatientCard />
                <PatientCard />
                <PatientCard />
                <PatientCard />
                <PatientCard />
                <PatientCard />
                <PatientCard />
                <PatientCard />
                <PatientCard />
            </div>
        </div>
    )
}