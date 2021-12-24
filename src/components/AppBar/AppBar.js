import React from "react";
import { AppBar as MuiAppBar, Button } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const AppBar = () => {
  const { isAuth, signout } = useAuth();

  return (
    <MuiAppBar position="static" color="custom">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Workouts
        </Typography>

        {!isAuth && (
          <>
            <Button
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              component={RouterLink}
              to={"/login"}
              size="small"
              variant="contained"
            >
              Login
            </Button>
            <Button
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              component={RouterLink}
              size="small"
              sx={{ ml: 1 }}
              to={"/registration"}
              variant="contained"
            >
              Registration
            </Button>
          </>
        )}
        {isAuth && (
          <>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              component={RouterLink}
              to="/profile"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <IconButton onClick={signout}>
              <ExitToAppIcon />
            </IconButton>
          </>
        )}
      </Toolbar>
    </MuiAppBar>
  );
};
