import { PatientRegister } from "../../components/PatientRegister/PatientRegister"

export const Register = (props) => {
    return (
        <div>
            <h2>Register</h2>
            <PatientRegister component={PatientRegister} exact />
            
        </div>
    )
}