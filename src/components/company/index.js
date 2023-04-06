import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
};

function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack spacing={2} alignItems="center">
            <Typography
              align="center"
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              COMPANY
            </Typography>
            <TextField
              sx={{
                width: { sm: 200, md: 300 },
              }}
              id="standard-basic"
              label="Company Name"
              variant="standard"
            />

            <TextField
              sx={{
                width: { sm: 200, md: 300 },
              }}
              id="standard-basic"
              label="Company Number"
              variant="number"
            />

            <TextField
              sx={{
                width: { sm: 200, md: 300 },
              }}
              id="standard-basic"
              label="Company Address"
              variant="standard"
            />

            <TextField
              sx={{
                width: { sm: 200, md: 300 },
              }}
              id="standard-basic"
              label="Company email"
              variant="standard"
            />

            
          </Stack>
          <Stack
            sx={{ my: 4, mr: 8.5 }}
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
          >
            <Button size="small" variant="contained" color="success">
              SUBMIT
            </Button>
            <Button size="small" variant="contained" color="error">
              CANCLE
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}

