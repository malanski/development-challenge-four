import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ConfirmDeletePatient from '../ConfirmDeletePatient/ConfirmDeletePatient';
import ConfirmEditPatient from '../ConfirmEditPatient/ConfirmEditPatient';



export default function PatientCard(props) {
  const { _id, name, birthDate, email, address } = props.dataApi

  console.log(props)

  return (
    <Card sx={{ maxWidth: 275, background: '#e3f4ff' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, textAlign: 'right' }} gutterBottom>
          <small>Patient Id:</small> <br/> <b>{_id}</b>
        </Typography>

        <Typography sx={{ mb: 1.5, textAlign: 'left' }} >
          <small>Name:</small> <br /> {name}
        </Typography>
        <hr style={{ color: '#2B93DD' }}/>
        <Typography sx={{ mb: 1.5, textAlign: 'left' }} >
          <small>Birth Date:</small> {birthDate}
        </Typography>
        <Typography sx={{ mb: 1.5, textAlign: 'left' }} >
          <small>Email:</small> {email}
        </Typography>

        <details style={{ cursor: 'pointer', background: '#f4fbff', padding: '5px', textAlign: 'left'}}>
          <summary className='detalhesName'>Address</summary>
          <Typography sx={{ mb: 1.5 }} variant="body2">
            <small>Country</small>
            <br />
            {address.country}
          </Typography>
          <Typography sx={{ mb: 1.5 }} variant="body2">
            <small>Zip Code</small>
            <br />
            {address.zipCode}
          </Typography>
          <Typography sx={{ mb: 1.5 }} variant="body2">
            <small>State</small>
            <br />
            {address.state}
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
  );
}