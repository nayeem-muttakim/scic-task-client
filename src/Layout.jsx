import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import NavBar from "./Components/NavBar/NavBar";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import useAuth from "./HOOKS/useAuth";
import { Logout } from "@mui/icons-material";

const Layout = () => {
  const { user, logOut } = useAuth();

  const signOut = () => {
    logOut()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const drawer = (
    <Box sx={{ textAlign: "center", color: "black" }}>
      <Typography variant="h5" sx={{ py: 2.1, fontWeight: 700 }}>
        TASKU
      </Typography>

      {/* pages */}
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

      {user  && <Box
        sx={{ position: "absolute", bottom: 14, bgcolor: "#457b9d" }}
        px={6.5}
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
      </Box>}
    </Box>
  );
  return (
    <Box>
      <NavBar />
      {/* Body */}
      <Box display={"flex"} gap={30}>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", lg: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 230,
              bgcolor: "inherit",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Box component="main" px={1}>
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
