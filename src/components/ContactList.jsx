import { Box } from "@mui/system";
import React, { useContext } from "react";
import { useEffect } from "react";
import { contactContext } from "../ContactContext";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const { contacts, getContacts } = useContext(contactContext);

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}
    >
      {contacts.map((item, ind) => (
        <ContactCard contact={item} key={ind} />
      ))}
    </Box>
  );
};

export default ContactList;
