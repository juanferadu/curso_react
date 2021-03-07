import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import { FormControl, MenuItem, Menu, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import "./NavBar.scss";
import CardWidget from "./CardWidget/CardWidget";

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="nav-bar__root">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className="nav-bar__menuButton"
            color="inherit"
            aria-label="menu"
          >
            <Button
              className="navbar-bar__menuButton"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Accesorios Hombre</MenuItem>
              <MenuItem onClick={handleClose}>Accesorios Mujer</MenuItem>
              <MenuItem onClick={handleClose}>Accesorios Niños</MenuItem>
            </Menu>
          </IconButton>
          <Typography variant="h6" className="nav-bar__title">
            Summer's Accesories
          </Typography>
          <div className="nav-bar__toolbarButtons">
          <Button color="inherit">
            Login
          </Button>
          {/* <IconButton
            edge="end"
            className="nav-bar__menuButton"
            color="inherit"
            aria-label="menu"
          >
            <CardWidget />
          </IconButton> */}
          </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
