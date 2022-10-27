// import { Box, Button, TextField, useFormControl } from '@mui/material';
import { Box, Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const today = new Date();
// Form validation schema
const schema = yup.object().shape({
    patientName: yup.string().min(2,"Patient name should have 2 characters or more")
    .max(60,"Patient name should be at maximum 60 characters long").required("Patient name should be required"),

    // birthDate: yup.date().transform(parseDateString).max(today).required("Patient birth date should be required"),
    birthDate: yup.date().max(today).required("Patient birth date should be required"),

    patientAge: yup.number().positive("Patient age should be a positive number!").integer("Patient age should be a integer number!").required(),
    patientEmail: yup.string().email("Patient email must be a valid email!").required("Patient email should be required!"),
    // Address
    country: yup.string().required("Patient Country should be required!"),
    zipCode: yup.number().required("Patient Zip Code should be required!"),
    county: yup.string().required("Patient county should be required!"),
    city: yup.string().required("Patient city name should be required!"),
    streetAddress: yup.string().required("Patient street address should be required!"),
    aptSuite: yup.string(),
})

function Trim(strTexto) { 
    // Substitúi os espaços vazios no inicio e no fim da string por vazio.
        return strTexto.replace(/^s+|s+$/g, '');
    }

// Função para validação de CEP.
function IsCEP(strCEP, blnVazio) {
    // Caso o CEP não esteja nesse formato ele é inválido!
    var objER = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;
    strCEP = Trim(strCEP)

    if(strCEP.length > 0) {
        if(objER.test(strCEP))
        return true;
        else return false;
    } else return blnVazio;
} 

// Styles and responsive with MUI styled 
const FormStyles = styled("section")(({ theme }) => ({
    width: '100%',
    form: {
        width: '426px',
        padding: '20px',
        border:'1px solid rgb(167, 167, 167)',
        borderRadius:'10px',

        h3: {
            textAlign: 'left',
        },
        p: {
            color: 'red',
            fontSize: '20px',
        },

       div:{
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

export default function Form() {

    const { register, formState: { errors }, handleSubmit } = useForm({resolver: yupResolver(schema)});

    const submitForm = (data) => {
        console.log(data)
    }

    return (
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
                        label="Patient's name"
                        {...register('patientName')}
                        // {...register('test', { required: true })}
                    />
                    <p> {errors.patientName?.message } </p>
                </div>

                <div>
                    <TextField
                        variant="outlined"
                        required
                        htmlFor='birthDate'
                        name='birthDate'
                        type='date'
                        label="Patient's birth date"
                        {...register('birthDate')}
                    />
                    <p> {errors.birthDate?.message } </p>
                </div>
                <div>
                    <TextField
                        variant="outlined"
                        required
                        htmlFor='patientAge'
                        name='patientAge'
                        label="Patient's age"
                        {...register('patientAge')}
                    />
                    <p> {errors.patientAge?.message } </p>
                </div>
                
                <div>
                    <TextField
                        variant="outlined"
                        required
                        htmlFor='patientEmail'
                        name='patientEmail'
                        label="Patient email"
                        {...register('patientEmail')}
                    />
                    <p> {errors.patientEmail?.message } </p>

                </div>

                <h3>Patient Address</h3>
                
                <div>
                    <TextField
                        variant="outlined"
                        required
                        htmlFor='country'
                        name='country'
                        label="Country"
                        {...register('country')}
                    />
                    <p> {errors.country?.message } </p>

                </div>

                <div>
                    <TextField
                        variant="outlined"
                        required
                        htmlFor='zipCode'
                        name='zipCode'
                        label="Zip/ postcode"
                        {...register('zipCode')}
                    />
                    <p> {errors.zipCode?.message } </p>

                </div>
                
                <div>
                    <TextField
                        variant="outlined"
                        required
                        htmlFor='county'
                        name='county'
                        label=" County (State)"
                        {...register('county')}
                    />
                    <p> {errors.county?.message } </p>

                </div>
                
                <div>
                    <TextField
                        variant="outlined"
                        required
                        htmlFor='city'
                        name='city'
                        label="City"
                        {...register('city')}
                    />
                    <p> {errors.city?.message } </p>

                </div>

                <div>
                    <TextField
                        variant="outlined"
                        required
                        htmlFor='streetAddress'
                        name='streetAddress'
                        label="Street address"
                        {...register('streetAddress')}
                    />
                    <p> {errors.streetAddress?.message } </p>

                </div>
                               
                <div>
                    <TextField
                        variant="outlined"
                        htmlFor='aptSuite'
                        name='aptSuite'
                        label="Apt, suite, etc (optional)"
                        {...register('aptSuite')}
                    />
                    <p> {errors.aptSuite?.message } </p>
                    
                </div>

                <Button
                    sx={{
                        width: '183px',
                        fontSize: '23px',
                        fontWeight: '700',
                        background: '#2B93DD'
                    }}
                    variant="contained"
                    type='submit'>
                    Submit
                </Button>
            </Box>


        </FormStyles>
    )
}