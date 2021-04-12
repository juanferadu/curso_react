import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { MenuItem, Menu, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import "./NavBar.scss";
import CardWidget from "../CardWidget/CardWidget";
import {
  Link
} from "react-router-dom";

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
              <MenuItem><Link to="/">Home</Link></MenuItem>
              <MenuItem><Link to="/category/man">Accesorios Hombre</Link></MenuItem>
              <MenuItem><Link to="/category/woman">Accesorios Mujer</Link></MenuItem>
              <MenuItem><Link to="/category/kid">Accesorios Niños</Link></MenuItem>
            </Menu>
          </IconButton>
          <Typography variant="h6" className="nav-bar__title">
            Summer's Accesories
          </Typography>
          <div className="nav-bar__toolbarButtons">
          <Button color="inherit">
            Login
          </Button>
          <IconButton
            edge="end"
            className="nav-bar__menuButton"
            color="inherit"
            aria-label="menu"
          >           
          </IconButton>
          <CardWidget />
          </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
