import './PatientRegister.scss'

// Images
import doctor from '../../assets/images/doctor.png'
import xray from '../../assets/images/xray.png'
import Form from '../Form/Form'


export function PatientRegister () {
    return (
        <div className='register'>
            
            <h2>Patient Register</h2>

            <Form />
            
            <div className='registerImage'>
                <img src={doctor} alt='A doctor with his patient'></img>
                <img src={xray} alt='A doctor with his patient'></img>
            </div>

        </div>
    )
}