import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import useAuth from "../../HOOKS/useAuth";
import { Button } from "@mui/joy";
import { Logout } from "@mui/icons-material";

function NavBar() {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user, logOut } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const signOut = () => {
    logOut()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", color: "black" }}
    >
      <Typography
        variant="h6"
        sx={{ py: 2.1, bgcolor: "#a8dadc", fontWeight: 700 }}
      >
        TASKU
      </Typography>
      <Divider />
      <List>
        <ListItem>
          <ListItemButton>
            <Link
              style={{
                color: "black",
                marginInline: "auto",
                textDecoration: "none",
              }}
              to="/"
            >
              <ListItemText primary={"Home"} />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <Link
              style={{
                color: "black",
                marginInline: "auto",
                textDecoration: "none",
              }}
              to="/"
            >
              <ListItemText primary={"About"} />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <Link
              style={{
                color: "black",
                marginInline: "auto",
                textDecoration: "none",
              }}
              to="/"
            >
              <ListItemText primary={"Contact"} />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>

      {user && (
        <Box
          sx={{ position: "absolute", bottom: 0, bgcolor: "#457b9d" }}
          px={8.2}
          py={3}
        >
          <Button
            onClick={signOut}
            sx={{
              bgcolor: "#95d5b2",
              color: "black",
              fontSize: 13,
              fontWeight: 600,
            }}
            variant="contained"
          >
            SignOut <Logout sx={{ ml: 1 }} />
          </Button>
        </Box>
      )}
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: "#a8dadc" }}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" } }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Typography
            visibility={{ lg: "hidden" }}
            color={"black"}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 700 }}
          >
            TASKU
          </Typography>
          {user ? <>{"user"}</> : <Avatar />}
        </Toolbar>
      </AppBar>
      <nav>
        {/* responsive drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default NavBar;
