import React from "react";
import { Box, Typography } from "@mui/material";
import { indigo } from "@mui/material/colors";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

const Home = () => {
  const homePageStyles = {
    m: 5,
    fontWeight: "100",
    color: indigo[400],
    fontSize: "2em",
    "&:hover": {
      color: indigo[300],
    },
  };

  return (
    <Box>
      <Box sx={{ display: "flex", position: "relative", mt: 7 }}>
        <Typography component="div" variant="h1" sx={homePageStyles}>
          Contacts
        </Typography>
        <AddContact />
      </Box>
      <ContactList />
    </Box>
  );
};

export default Home;
