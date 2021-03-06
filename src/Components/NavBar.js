import React from "react";
import { FormControl, MenuItem, Menu, Button } from "@material-ui/core";
function NavBar() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navbar navbar-expand-sm bg-light">

       <Button className="navbar-nav__button" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Menu Principal
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
  
  </nav>
  );
}

export default NavBar;

