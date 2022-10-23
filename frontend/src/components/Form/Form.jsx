// import { Box, Button, TextField, useFormControl } from '@mui/material';
import { Box, Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useForm } from 'react-hook-form';


const FormStyles = styled("section")(({ theme }) => ({
    width: '100%',
    form: {
        width: '426px',
        padding: '5px',
        border:'1px solid rgb(167, 167, 167)',
        borderRadius:'10px',

        h3: {
            textAlign: 'left',
        },
       div:{
        width: '100%',
       
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



    [theme.breakpoints.down("tablet")]: {
        form: {
            width: '99%',
            marginLeft: 'auto',
            marginRight: 'auto',
            border: 'none',

            div: {
                margin: 0,
                div: {
                    label: {

                    }
                }
            }
        },

    },



}));

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const validateForm = (d) => {
        alert(d.patientName + ". Email: " + d.seuEmail + " Telefone: " + d.patientPhone + ' seu endereço é '+ d.streetAddress )
    }
    
    return (
        <FormStyles >
            <Box
                component="form"
                sx={{
                    margin: '31px auto 30px auto',
                }}
                onSubmit={handleSubmit(validateForm)}
            >
                <div>
                    <TextField
                        variant="outlined"
                        required
                        htmlFor='patientName'
                        label="Patient's name"
                        {...register('patientName', { required: true, pattern: /^[A-Za-z]+$/i })}
                    />
                    {errors.patientName && errors.patientName.type === 'required' && <p>Type the patient's name</p>}
                    {errors.patientName && errors.patientName.type === 'pattern' && <p>The patient's name should contain only letters</p>}
                </div>
                

         
                <div>
                    <TextField
                        variant="outlined"
                        required
                        htmlFor='seuEmail'
                        label="Patient email"
                        {...register('seuEmail', { required: true, pattern: /\S+@\S+\.\S+/ })}
                    />
                    {errors.seuEmail && errors.seuEmail.type === 'required' && <p>Type the patient's email.</p>}
                    {errors.seuEmail && errors.seuEmail.type === 'pattern' && <p>Please type a valid email.</p>}

                </div>

                <div>
                    <TextField
                        variant="outlined"
                        required
                        htmlFor='patientPhone'
                        label="Patient phone number"
                        // type='number'
                        max="9999999999999"
                        min="99999999999"
                        
                        {...register('patientPhone', { pattern:/[0-9]+/, required: true })}
                    />
                    
                    {errors.patientPhone && errors.patientPhone.type === 'pattern' && <p>O número de telefone deve conter apenas números.</p>}
                    {errors.patientPhone && errors.patientPhone.type === 'required' && <p>Por favor digite seu número de telefone.</p>}
                                      
                    {errors.patientPhone && errors.patientPhone.type === 'minLength' && <p>O seu número de telefone deve ter 11 dígitos.</p>}

                </div>

                <h3>Patient Address</h3>
                
                <div>
                    <TextField
                        variant="outlined"
                        required
                        htmlFor='country'
                        label="Country"  
                    />
                </div>

                <div>
                    <TextField
                        variant="outlined"
                        required
                        htmlFor='zipCode'
                        label="Zip/ postcode"  
                    />
                </div>
                
                <div>
                    <TextField
                        variant="outlined"
                        required
                        htmlFor='county'
                        label=" County (State)"  
                    />
                </div>
                
                <div>
                    <TextField
                        variant="outlined"
                        required
                        htmlFor='city'
                        label="City"  
                    />
                </div>
                <div>
                    <TextField
                        variant="outlined"
                        required
                        htmlFor='streetAddress'
                        label="Street address"
                        {...register('streetAddress', { required: true, pattern: /^[A-Za-z-0-9]+$/i })}
                    />
                    {errors.streetAddress && errors.streetAddress.type === 'required' && <p>Type the street's name</p>}
                    {errors.streetAddress && errors.streetAddress.type === 'pattern' && <p>The street's name should contain only letters</p>}
                </div>
                               
                <div>
                    <TextField
                        variant="outlined"
                        htmlFor='aptSuite'
                        label="Apt, suite, etc (optional)"
                      
                    />
                    
                </div>
                
                {/* <div>
                    <TextField
                        variant="outlined"
                        required
                        htmlFor='patientAddress'
                        label="Apt, suite, etc (optional)
                        {...register('patientAddress', { required: true, pattern: /^[A-Za-z]+$/i })}
                    />
                    {errors.patientAddress && errors.patientAddress.type === 'required' && <p>Type the patient's name</p>}
                    {errors.patientAddress && errors.patientAddress.type === 'pattern' && <p>The patient's name should contain only letters</p>}
                </div> */}

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