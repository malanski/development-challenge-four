import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ConfirmDeletePatient from '../ConfirmDeletePatient/ConfirmDeletePatient';
import ConfirmEditPatient from '../ConfirmEditPatient/ConfirmEditPatient';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const CardStyles = styled("div")(({ theme }) => ({
  width: '275px',
  background: '#e3f4ff',
  textAlign: 'left',

  [theme.breakpoints.down("tablet")]: {
    margin: '0',
    width: '90%',

    div: {
      width: '100%',

      border: 'none',
      padding: '2.5px',
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

  console.log(props)
  const navigate = useNavigate();

  // const name = props.name;
  // const id = props.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');

  return (
    <CardStyles  onClick={() => navigate(`/patient/${_id}`)}>
      <Card sx={{}}>
        <CardContent>
          <Typography sx={{ fontSize: 14, textAlign: 'right' }} gutterBottom>
            <small>Patient Id:</small> <br /> <b>{_id}</b>
          </Typography>

          <Typography sx={{ mb: 1.5 }} >
            <small>Name:</small> <br /> {name}
          </Typography>
          <hr style={{ color: '#2B93DD' }} />
          <Typography sx={{ mb: 1.5 }} >
            <small>Birth Date:</small> {birthDate}
          </Typography>
          <Typography sx={{ mb: 1.5 }} >
            <small>Email:</small> {email}
          </Typography>

          <details style={{ cursor: 'pointer', background: '#f4fbff', padding: '5px' }}>
            <summary className='detalhesName'>Address</summary>
            <Typography sx={{ mb: 1.5 }} variant="body2">
              <small>Zip Code</small>
              <br />
              {address.zipCode}
            </Typography>
            
            <Typography sx={{ mb: 1.5 }} variant="body2">
              <small>Country</small>
              <br />
              {address.country}
            </Typography>
            
            <Typography sx={{ mb: 1.5 }} variant="body2">
              <small>County</small>
              <br />
              {address.county}
            </Typography>
            <Typography sx={{ mb: 1.5 }} variant="body2">
              <small>City</small>
              <br />
              {address.city}
            </Typography>
            <Typography sx={{ mb: 1.5 }} variant="body2">
              <small>Street address</small>
              <br />
              {address.streetAddress}
            </Typography>
            <Typography sx={{ mb: 1.5 }} variant="body2">
              <small>Apt, suite, etc </small>
              <br />
              {address.addition}
            </Typography>
          </details>

        </CardContent>
        <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>

          <ConfirmEditPatient />

          <ConfirmDeletePatient />

        </CardActions>
      </Card>
    </CardStyles>

  );
}