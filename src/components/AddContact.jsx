import { Alert, Box, Button, createTheme, TextField } from "@mui/material";
import React from "react";
import { green, red } from "@mui/material/colors";
import { useContext } from "react";
import { contactContext } from "../ContactContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const navigate = useNavigate();
  const indigoTheme = createTheme({
    palette: {
      primary: {
        main: green[500],
      },
      secondary: {
        main: red[300],
      },
    },
  });

  const { top, addContact } = useContext(contactContext);

  const [contact, setContact] = useState({
    name: "",
    surname: "",
    phone: "",
  });

  const handleInput = (e) => {
    let obj = {
      ...contact,
      [e.target.name]: e.target.value,
    };
    setContact(obj);
    setAlert(false);
  };

  let [alert, setAlert] = useState(false);

  const handleSave = (newContact) => {
    if (!newContact.name || !newContact.phone || !newContact.surname) {
      setAlert(true);
      return;
    }
    addContact(newContact);
    setContact({
      name: "",
      surname: "",
      phone: "",
    });
  };

  const alertStyle = {
    mx: 2,
    position: "absolute",
    width: "50%",
    bottom: "-120%",
    left: 0,
  };

  const inpsStyles = {
    display: "flex",
    margin: "15vmin auto",
    justifyContent: "center",
  };
  return (
    <Box>
      <Box sx={inpsStyles}>
        <TextField
          name="name"
          onChange={handleInput}
          sx={{ mx: 2 }}
          value={contact.name}
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
        <TextField
          name="surname"
          onChange={handleInput}
          sx={{ mx: 2 }}
          value={contact.surname}
          id="outlined-basic"
          label="Surname"
          variant="outlined"
        />
        <TextField
          name="phone"
          onChange={handleInput}
          sx={{ mx: 2 }}
          value={contact.phone}
          id="outlined-basic"
          label="Phone"
          variant="outlined"
        />
        <Button
          variant="contained"
          theme={indigoTheme}
          sx={{ mx: 2 }}
          onClick={() => {
            handleSave(contact);
            navigate("/");
          }}
        >
          Create
        </Button>
        {alert ? (
          <Alert severity="warning" sx={alertStyle}>
            Odin input pustoi
          </Alert>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
};

export default AddContact;
