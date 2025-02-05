import './PatientRegister.scss';

// API
import { PatientApi } from '../../services/api';

// Icons
import AddIcon from '@mui/icons-material/Add';

// Material UI
import { Box, Button, TextField, styled } from '@mui/material';

// React Hook-Form and Router-Dom
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

// Yup
// import { validationSchema } from '../validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Yup
const today = new Date();

// Form validation schema
const schema = yup.object().shape({
    patientName: yup.string().min(2, "Patient name should have 2 characters or more")
        .max(70, "Patient name should be at maximum 70 characters long").required("Patient name should be required"),
    birthDate: yup.date().max(today, "Patient birth date must be earlier than today").required("Patient birth date should be required"),
    patientEmail: yup.string().email("Please inset a valid email!").required("Patient email should be required!"),

    // Address Validation
    country: yup.string().required("Patient Country should be required!"),
    zipCode: yup.number().required("Patient Zip Code should be required!"),
    county: yup.string().required("Patient county should be required!"),
    city: yup.string().required("Patient city name should be required!"),
    streetAddress: yup.string().required("Patient street address should be required!"),
    addition: yup.string(),
})

const FormStyles = styled("section")(({ theme }) => ({
    width: '100%',
    form: {
        width: '426px',
        padding: '20px',
        border: '1px solid rgb(167, 167, 167)',
        borderRadius: '10px',

        h3: {
            textAlign: 'left',
        },
        p: {
            color: 'red',
            fontSize: '18px',
        },

        div: {
            width: '100%',
            position: 'relative',
            div: {
                label: {
                    textAlign: 'center',
                    width: '100%',
                    marginLeft: '-2px',
                    borderRadius: '10px 10px 0 0',
                    background: '#F4F7FC',
                },
                div: {
                    background: '#F4F7FC',
                    marginBottom: '11px',
                    height: 'auto',
                },
            },
        }
    },


    // Responsie Styles
    [theme.breakpoints.down("tablet")]: {
        form: {
            width: '95%',
            margin: '20px 0 0 0',

            border: 'none',
            padding: '2.5%',
        },
    },
}));


export function PatientRegister() {
    const { register, formState: { errors }, handleSubmit, getValues } = useForm({ resolver: yupResolver(schema) });
    const navigate = useNavigate();

    const submitForm = async (data) => {
        const dataBirthDate = getValues('birthDate');
        const birthDate = dataBirthDate.split('-');
        const newBirthDate = `${birthDate[2]}-${birthDate[1]}-${birthDate[0]}`;

        const dataRegister = {
            name: data.patientName,
            birthDate: newBirthDate,
            email: data.patientEmail,
            address: {
                zipCode: data.zipCode,
                country: data.country,
                county: data.county,
                city: data.city,
                streetAddress: data.streetAddress,
                addition: data.addition,
            },
        };
        
        await PatientApi.registerPatient(dataRegister);
        navigate('/viewPatients')
    }

    return (
        <div className='register'>

            <h2><AddIcon />&ensp;Add new Patient&ensp;<AddIcon /></h2>
            <p>Complete the form correctly and click the submit button to create a new patient data register.</p>
            <FormStyles >
                <Box
                    component="form"
                    onSubmit={handleSubmit(submitForm)}
                    sx={{
                        margin: '31px auto 30px auto',
                    }}>
                    <div>
                        <TextField
                            variant="outlined"
                            required
                            htmlFor='patientName'
                            name='patientName'
                            label="Patient's name"
                            {...register('patientName')} />
                        <p> {errors.patientName?.message} </p>
                    </div>

                    <div>
                        <TextField
                            variant="outlined"
                            required
                            htmlFor='birthDate'
                            name='birthDate'
                            type='date'
                            label="Patient's birth date"
                            {...register('birthDate')} />
                        <p> {errors.birthDate?.message} </p>
                    </div>

                    <div>
                        <TextField
                            variant="outlined"
                            required
                            htmlFor='patientEmail'
                            name='patientEmail'
                            label="Patient email"
                            {...register('patientEmail')} />
                        <p> {errors.patientEmail?.message} </p>
                    </div>

                    <h3>Patient Address</h3>
                    <div>
                        <TextField
                            variant="outlined"
                            required
                            htmlFor='zipCode'
                            name='zipCode'
                            label="Zip/ postcode"
                            {...register('zipCode')} />
                        <p> {errors.zipCode?.message} </p>
                    </div>

                    <div>
                        <TextField
                            variant="outlined"
                            required
                            htmlFor='country'
                            name='country'
                            label="Country"
                            {...register('country')} />
                        <p> {errors.country?.message} </p>
                    </div>

                    <div>
                        <TextField
                            variant="outlined"
                            required
                            htmlFor='county'
                            name='county'
                            label=" County (State)"
                            {...register('county')} />
                        <p> {errors.county?.message} </p>
                    </div>

                    <div>
                        <TextField
                            variant="outlined"
                            required
                            htmlFor='city'
                            name='city'
                            label="City"
                            {...register('city')} />
                        <p> {errors.city?.message} </p>
                    </div>

                    <div>
                        <TextField
                            variant="outlined"
                            required
                            htmlFor='streetAddress'
                            name='streetAddress'
                            label="Street address"
                            placeholder='Rua Dos ABCs, n° 00, Bairro'
                            {...register('streetAddress')} />
                        <p> {errors.streetAddress?.message} </p>
                    </div>

                    <div>
                        <TextField
                            variant="outlined"
                            htmlFor='addition'
                            name='addition'
                            label="Apt, suite, etc (optional)"
                            {...register('addition')} />
                        <p> {errors.addition?.message} </p>
                    </div>

                    <Button
                        variant="contained"
                        type='submit'
                        title="Create new Patient"
                        sx={{
                            width: '183px',
                            fontSize: '23px',
                            fontWeight: '700',
                            background: '#2B93DD'
                        }}>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <AddIcon />
                            Submit
                            <AddIcon />
                        </div>
                    </Button>
                </Box>
            </FormStyles>
        </div>
    );
};