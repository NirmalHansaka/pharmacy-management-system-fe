import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TableComponent from "../../components/TableComponent";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { useState, useEffect } from "react";

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

function BasicModal({ getData }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [roleData, setRoleData] = useState({ role_name: "" });

  // const inputHandler = (e) => {
  //   //
  //   setRoleData((prev) => {
  //     return { ...prev, [e.target.id]: e.target.value };
  //   });
  // };

  const postHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/addRole", { ...roleData })
      .then((res) => {
        // console.log(res.roleData);
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
              ADD NEW ROLE
            </Typography>
            <TextField
              sx={{
                width: { sm: 200, md: 300 },
              }}
              //   id="role-name"
              label="ROLE Name"
              variant="standard"
              onChange={(e) => {
                // inputHandler(e);
                setRoleData((prev) => {
                  console.log(roleData);
                  return { ...prev, role_name: e.target.value };
                });
              }}
              //   value={roleData.role_name}
            />
          </Stack>
          <Stack
            sx={{ my: 4, mr: 8.5 }}
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
          >
            <Button
              size="small"
              variant="contained"
              color="success"
              onClick={postHandler}
            >
              SUBMIT
            </Button>
            <Button size="small" variant="contained" color="error">
              CANCLE
            </Button>
          </Stack>
          <h2>{roleData.role_name}</h2>
        </Box>
      </Modal>
    </div>
  );
}
const Role = () => {
  const [receiveData, setReceiveData] = useState([]);

  const roleTitle = ["role_id", "role_name"];

  const getData = () => {
    axios.get("http://localhost:8000/getRole").then((data) => {
      console.log(data.data);
      setReceiveData(data.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteHandler = (id, e) => {
    e.preventDefault();

    axios
      .delete(`http://localhost:8000/deleteRole/${id}`)
      .then((data) => {
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <BasicModal getData={getData}></BasicModal>
      <Paper>
        <TableComponent
          tableData={receiveData}
          tableHeaders={roleTitle}
          deleteHandler={deleteHandler}
        />
      </Paper>
    </>
  );
};

export default Role;
