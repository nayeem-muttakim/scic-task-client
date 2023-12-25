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
import Button from "@mui/material/Button";
import { Login } from "@mui/icons-material";
import { Link } from "react-router-dom";

function NavBar() {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
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
