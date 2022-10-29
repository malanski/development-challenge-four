import './PatientRegister.scss'
import AddIcon from '@mui/icons-material/Add';

// Images

import Form from '../Form/Form'


export function PatientRegister () {
    return (
        <div className='register'>
            
            <h2><AddIcon /> Add new Patient <AddIcon /></h2>

            <Form />


        </div>
    )
}