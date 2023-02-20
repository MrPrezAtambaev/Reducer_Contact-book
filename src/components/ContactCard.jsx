import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { contactContext } from "../ContactContext";
import { useNavigate } from "react-router-dom";

const ContactCard = ({ contact }) => {
  const { deleteContact, editContact } = React.useContext(contactContext);
  const navigate = useNavigate();

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name: {contact.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Surname: {contact.surname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Phone: {contact.phone}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            editContact(contact.id);
            navigate("/edit");
          }}
          style={{ backgroundColor: "blue", color: "white" }}
        >
          Edit
        </Button>
        <Button
          size="small"
          onClick={() => deleteContact(contact.id)}
          style={{ backgroundColor: "red", color: "white" }}
        >
          Delete
        </Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};

export default ContactCard;
