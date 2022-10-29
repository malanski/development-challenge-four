import * as React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';

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
  
export default function ConfirmDeletePatient() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Button onClick={handleOpen}  title="Delete"><DeleteForeverTwoToneIcon /></Button>
            
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Waring
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Are you sure you want to <big>Delete</big> this patient's record?
            
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button sx={{ width: '176px', height: '40px', margin: '10px 10px 0 0'}} variant="contained"
                      onClick={handleClose}
                      color="success">
                      <DeleteForeverTwoToneIcon />
                      Confirm Delete
                    </Button>

                    <Button sx={{ width: '176px', height: '40px', margin: '10px 0 0 0' }} variant="outlined"
                      color="error"
                      onClick={handleClose}>
                      <CloseIcon />
                      Cancel
                    </Button>
                  </div>
                  
                </Typography>
              </Box>
            </Modal>
        </div>
    )
} 