import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";
import Logo from "../logo.jpg";

const Header = () => {
  const pages = ["home", "about", "skills", "projects", "contact"];

  const [headerTab, setHeaderTab] = useState(null);

  const openMenu = (event) => {
    setHeaderTab(event.currentTarget);
  };

  const closeMenu = () => {
    setHeaderTab(null);
  };

  return (
    <>
      <AppBar sx={{ backgroundColor: "#152536" }}>
        <Toolbar>
          <Link to="home" smooth={true} duration={500}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <img src={Logo} alt="logo" width={85} height={55} />
            </IconButton>
          </Link>
          <Typography
            variant="h6"
            component="div"
            color="#01eeff"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            Portfolio
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                key={page}
                to={page}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                <Button color="inherit">
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={openMenu}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={headerTab}
              open={Boolean(headerTab)}
              onClose={closeMenu}
              anchorOrigin={{
                vertical: "bottom", 
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={closeMenu}>
                  <Link
                    to={page}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                  >
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            component="div"
            color="#01eeff"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
