import {
  Box,
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
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

const navItems = ["Home", "About", "Contact"];
const Layout = () => {
  const drawer = (
    <Box sx={{ textAlign: "center", color: "black" }}>
      <Typography variant="h6" sx={{ py: 2.1 }}>
        TASKU
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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
              width: 240,
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
