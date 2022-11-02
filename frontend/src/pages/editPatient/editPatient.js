import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { PatientApi } from '../../services/api';
import SaveIcon from '@mui/icons-material/Save';
const today = new Date();
// Form validation schema
const schema = yup.object().shape({
    patientName: yup.string().min(2, "Patient name should have 2 characters or more")
        .max(60, "Patient name should be at maximum 60 characters long").required("Patient name should be required"),

    // birthDate: yup.date().transform(parseDateString).max(today).required("Patient birth date should be required"),
    birthDate: yup.date().max(today).required("Patient birth date should be required"),

    patientEmail: yup.string().email("Patient email must be a valid email!").required("Patient email should be required!"),

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
            fontSize: '20px',
        },

        div: {
            width: '100%',
            position: 'relative',
            div: {
                label: {
                    textAlign: 'center',
                    // width: 'auto',
                    width: '99%',
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
            div: {
                div: {
                    label: {

                    }
                }
            }
        },
    },
}));


export const EditPatient = () => {
    const { id } = useParams();

    const { register, formState: { errors }, handleSubmit, getValues } = useForm({ resolver: yupResolver(schema) });

    const submitForm = (data) => {
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
                state: data.state,
                city: data.city,
                streetAddress: data.streetAddress,
                addition: data.addition,
            },
        };

        PatientApi.updatePatient(dataRegister);
    }

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


    return (
        <div>
            <h2><EditIcon/>&ensp;Edit Patient Data&ensp;<EditIcon/></h2>
            <p>Change the fields you want to update and save your changes in the button below.</p>
            <FormStyles >
                <Box
                    component="form"
                    sx={{
                        margin: '31px auto 30px auto',
                    }}
                    onSubmit={handleSubmit(submitForm)}
                >
                    <div>
                        <TextField
                            variant="outlined"
                            required
                            htmlFor='patientName'
                            name='patientName'
                            label='patientName'
                            placeholder={state.name}
                            autoComplete={state.name}

                            {...register('patientName')}
                        />
                        <p> {errors.patientName?.message} </p>
                    </div>

                    <div>
                        <TextField
                            variant="outlined"
                            required
                            htmlFor='birthDate'
                            name='birthDate'
                            label='birthDate'
                            type='date'
                            autoComplete={state.birthDate}

                            {...register('birthDate')}
                        />
                        <p> {errors.birthDate?.message} </p>
                    </div>

                    <div>
                        <TextField
                            variant="outlined"
                            required
                            htmlFor='patientEmail'
                            name='patientEmail'
                            label='Email'
                            autoComplete={state.email}
                            placeholder={state.email}

                            {...register('patientEmail')}
                        />
                        <p> {errors.patientEmail?.message} </p>

                    </div>

                    <h3>Patient Address</h3>

                    <div>
                        <TextField
                            variant="outlined"
                            required
                            htmlFor='zipCode'
                            name='zipCode'
                            label='Zip Code'
                            autoComplete={state.address.zipCode}
                            placeholder={state.address.zipCode}

                            {...register('zipCode')}
                        />
                        <p> {errors.zipCode?.message} </p>
                    </div>

                    <div>
                        <TextField
                            variant="outlined"
                            required
                            htmlFor='country'
                            name='country'
                            label={state.address.country}
                            autoComplete={state.address.country}
                            placeholder={state.address.country}

                            {...register('country')}
                        />
                        <p> {errors.country?.message} </p>

                    </div>

                    <div>
                        <TextField
                            variant="outlined"
                            required
                            htmlFor='county'
                            name='county'
                            label='county'
                            placeholder={state.address.county}
                            autoComplete={state.address.county}

                            {...register('county')}
                        />
                        <p> {errors.county?.message} </p>

                    </div>

                    <div>
                        <TextField
                            variant="outlined"
                            required
                            htmlFor='city'
                            name='city'
                            label='City'
                            placeholder={state.address.city}
                            autoComplete={state.address.city}
                            {...register('city')}
                        />
                        <p> {errors.city?.message} </p>

                    </div>

                    <div>
                        <TextField
                            variant="outlined"
                            required
                            htmlFor='streetAddress'
                            name='streetAddress'
                            label='Street Address'
                            placeholder={state.address.streetAddress}
                            autoComplete='on'

                            {...register('streetAddress')}
                        />
                        <p> {errors.streetAddress?.message} </p>

                    </div>

                    <div>
                        <TextField
                            variant="outlined"
                            htmlFor='addition'
                            name='addition'
                            label='Apt, suite, etc (optional)'
                            placeholder={state.address.addition}
                            
                            autoComplete='on'
                            {...register('addition')}
                        />
                        <p> {errors.addition?.message} </p>

                    </div>

                    <Button
                        sx={{
                            width: '183px',
                            margins: '0 auto',
                            
                            fontSize: '23px',
                            fontWeight: '700',
                            background: '#2B93DD'
                        }}
                        variant="contained"
                        type='submit'>

                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <SaveIcon/>
                                Save
                            <SaveIcon/>
                        </div>
                    </Button>
                </Box>
            </FormStyles>
            
        </div>
    )
}