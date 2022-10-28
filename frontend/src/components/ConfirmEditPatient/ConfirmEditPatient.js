import * as React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "auto",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ConfirmEditPatient() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Patient Data
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

            <Button variant="contained"
              // onClick={handleClose}
              color="success">
              <Link to="/editPatient">Enter Edit</Link>
            </Button>
            <Button variant="outlined"
              color="error"
              onClick={handleClose}>
              Cancel
            </Button>

          </Typography>
        </Box>
      </Modal>
    </div>
  )
} 