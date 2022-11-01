// Components
import ConfirmDeletePatient from '../ConfirmDeletePatient/ConfirmDeletePatient';
import ConfirmEditPatient from '../ConfirmEditPatient/ConfirmEditPatient';
// Icons
import PersonIcon from '@mui/icons-material/Person';

import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

// Materials UI 
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

const CardStyles = styled("div")(({ theme }) => ({
  textAlign: 'left',
  border: '1px solid #e3f4ff',
  borderRadius: '5px',
  width: '300px',
  padding:'10px',

    div:{
      background: '#e3f4ff',
      width: 'auto',
      // minHeight: '250px',
      // maxHeight: 'auto',
      
      div: {
        // padding: '5%',

      }

    },

  [theme.breakpoints.down("tablet")]: {
    width: '90%',

    div: {

      // padding: '2.5px',
      div: {

        p: {
          fontSize: '16px',
          padding: '5px',

        },
        details: {
          width: '90%',
          margin: '0 auto'
        }
      }
    },
  },
}));

export default function PatientCard(props) {
  
  const { _id, name, birthDate, email, address } = props.dataApi

  const navigate = useNavigate();

    return (
    <CardStyles>
      <Card sx={{}} >
        <CardContent>
          <Typography sx={{ fontSize: 14, textAlign: 'right' }} gutterBottom>
            <small>Patient Id:</small> <br /> <b>{_id}</b>
          </Typography>

          <Typography 
            sx={{ 
              mb: 1.5,
              padding: '5px',
              background: 'white',
              textTransform:'capitalize', 
              fontWeight: 'bolder'}} >
            <small>Name: </small> <br /> {name}
          </Typography>

          <hr style={{ color: '#2B93DD' }} />
          <Typography sx={{ mb: 1.5 }} >
            <small>Birth Date: </small> {birthDate}
          </Typography>
          <Typography sx={{ mb: 1.5 }} >
            <small>Email: </small> {email}
          </Typography>

          <details style={{ cursor: 'pointer', background: '#f4fbff', padding: '5px' }}>
            <hr style={{ color: '#2B93DD' }} />
            <summary className='detalhesName'>Address</summary>
            <Typography sx={{ mb: 1.5 }} variant="body2">
              <small>Zip Code:</small>
              <br />
              {address.zipCode}
            </Typography>
            
            <Typography sx={{ mb: 1.5 }} variant="body2">
              <small>Country: </small>
              <br />
              {address.country}
            </Typography>
            
            <Typography sx={{ mb: 1.5 }} variant="body2">
              <small>County: </small>
              <br />
              {address.county}
            </Typography>
            <Typography sx={{ mb: 1.5 }} variant="body2">
              <small>City: </small>
              <br />
              {address.city}
            </Typography>
            <Typography sx={{ mb: 1.5 }} variant="body2">
              <small>Street address: </small>
              <br />
              {address.streetAddress}
            </Typography>
            <Typography sx={{ mb: 1.5 }} variant="body2">
              <small>Apt, suite, etc: </small>
              <br />
              {address.addition}
            </Typography>
          </details>

        </CardContent>
        <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>

          <ConfirmEditPatient title={name + " Edit"} />

          <ConfirmDeletePatient />

          <Button onClick={() => navigate(`/patient/${_id}`)} title={name + " Data"}>
            <PersonIcon />
          </Button>

        </CardActions>
      </Card>
    </CardStyles>

  );
}