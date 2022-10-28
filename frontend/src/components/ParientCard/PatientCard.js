import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ConfirmDeletePatient from '../ConfirmDeletePatient/ConfirmDeletePatient';
import ConfirmEditPatient from '../ConfirmEditPatient/ConfirmEditPatient';



export default function PatientCard() {

  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, textAlign: 'right' }} gutterBottom>
          <small>Patient number:</small> 00#
        </Typography>


        {/* <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography> */}

        <Typography sx={{ mb: 1.5, textAlign: 'left' }} >
          <small>Name:</small> <br /> Fulano Beltrano de Cicrano
        </Typography>

        <Typography sx={{ mb: 1.5, textAlign: 'left' }} >
          <small>Email:</small> <br /> fulano123@gmail.com
        </Typography>

        <details>
          <summary className='detalhesName'>Address</summary>
          <Typography sx={{ mb: 1.5, textAlign: 'left' }} variant="body2">
            <small>Country</small>
            <br />
            {'"Latveria"'}
          </Typography>
          <Typography sx={{ mb: 1.5, textAlign: 'left' }} variant="body2">
            <small>Zip Code</small>
            <br />
            {'"00 000 000"'}
          </Typography>
          <Typography sx={{ mb: 1.5, textAlign: 'left' }} variant="body2">
            <small>County</small>
            <br />
            {'"Transilvania"'}
          </Typography>
          <Typography sx={{ mb: 1.5, textAlign: 'left' }} variant="body2">
            <small>City</small>
            <br />
            {'"Hatanaba"'}
          </Typography>
          <Typography sx={{ mb: 1.5, textAlign: 'left' }} variant="body2">
            <small>Street address</small>
            <br />
            {'"Rua dos Bobos, 00"'}
          </Typography>
          <Typography sx={{ mb: 1.5, textAlign: 'left' }} variant="body2">
            <small>Apt, suite, etc </small>
            <br />
            {'"apt 102"'}
          </Typography>
        </details>

      </CardContent>
      <CardActions>

        <ConfirmEditPatient />
        
        <ConfirmDeletePatient />
        
      </CardActions>
    </Card>
  );
}