import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { indigo } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import { useContext } from "react";
import { contactContext } from "../ContactContext";

const indigoTheme = createTheme({
  palette: {
    primary: {
      main: "#01579b",
    },
    secondary: {
      main: "#bf360c",
    },
  },
});

export default function Navbar() {
  const { handleTop } = useContext(contactContext);

  return (
    <Box sx={{ flexGrow: 1 }} id="nav">
      <AppBar position="fixed" theme={indigoTheme}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              ContactBook
            </Link>
          </Typography>
          <Button
            theme={indigoTheme}
            variant="contained"
            color="secondary"
            onClick={handleTop}
          >
            Add new contact
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
