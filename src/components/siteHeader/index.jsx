import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AuthContext } from "../../contexts/authContext";
import Fade from '@mui/material/Fade';

const styles = {
  title: {
    flexGrow: 1,
  },
};

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const SiteHeader = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const { token, signout } = useContext(AuthContext);

  const menuOptions = [
    { label: "🔍", path: "/search" },
    { label: "Home", path: "/" },
    { label: "Trending", path: "/movies/trending" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "Fantasy Movie", path: "/fantasy/movie" },
  ];

  const handleMenuSelect = (pageURL) => {
    setAnchorEl(null)
    navigate(pageURL);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar position="fixed" elevation={0} color="primary">
        <Toolbar>
          <Typography variant="h4" sx={styles.title}>
            TMDB Client
          </Typography>
          <Typography variant="h6" sx={styles.title}>
            All you ever wanted to know about Movies!
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                size="large"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <>
              {menuOptions.map((opt) => (
                <Button
                  key={opt.label}
                  color="inherit"
                  onClick={() => handleMenuSelect(opt.path)}
                >
                  {opt.label}
                </Button>
              ))}
              <Button
                id="fade-button"
                color="inherit"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleMenu}
              >
                Favourites
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={() => handleMenuSelect("/movies/favourites")}>Favourite Movies</MenuItem>
                <MenuItem onClick={() => handleMenuSelect("/actors/favourites")}>Favourite Actors</MenuItem>
              </Menu>
              {token ? (
                <Button color="inherit" onClick={() => signout()}>
                  Sign out
                </Button>

              ) : <Button color="inherit" onClick={() => navigate("/login")}>
                Login
              </Button>
              }
            </>
          )}
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;
