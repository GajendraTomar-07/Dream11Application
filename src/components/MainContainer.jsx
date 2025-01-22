import React, { useEffect, useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
} from "@mui/material";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Grid, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import ProductCard from "./ProductCard";
import AddtoCart from "./AddtoCart";
import HeroSection from "./HeroSection";
import { Outlet } from 'react-router-dom';

const MainContainer = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isSmallScreen = useMediaQuery("(max-width:850px)");
  const [refresh, setRefresh] = useState(false);
  const [home, setHome] = useState(false);
  const [addCard, setAddCard] = useState(false);
  const navigate = useNavigate();


  const handleHomePage = () => {
    navigate("/herosection");
    // setHome(true);
    // setRefresh(false);
    // setAddCard(false);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  const handleProductCard = () => {
    // setRefresh(true);
    // setHome(false);
    // setAddCard(false);
    navigate("/products");
  };

  const handleAddcart = () => {
    navigate("/addtocart/:id");
    // setAddCard(true);
    // setRefresh(false);
    // setHome(false);
  };

  useEffect(() => {
    if (isSmallScreen) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [isSmallScreen]);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#1D4F06",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 3, padding: 1 }}
          >
            {isSmallScreen && (
              <IconButton onClick={toggleSidebar}>
                {isSidebarOpen ? (
                  <CloseIcon sx={{ color: "white" }} />
                ) : (
                  <MenuIcon sx={{ color: "white" }} />
                )}
              </IconButton>
            )}
            <Typography variant="h5">Krish Culture</Typography>
          </Box>
          <IconButton onClick={handleLogout}>
            <LogoutIcon sx={{ color: "white", fontSize: "25px" }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Main Grid Layout */}
      <Grid container sx={{ height: "calc(100vh - 64px)" }}>
        {/* Sidebar */}
        <Box
          sx={{
            position: "fixed",
            top: 64,
            left: isSidebarOpen ? 0 : "-250px",
            bottom: 0,
            width: "250px",
            // backgroundColor: "#1D4F06",
            transition: "left 0.3s ease",
            zIndex: 9999,
            color: "white",
            overflow: "auto",
            "@media (min-width: 300px) and (max-width: 500px)": {
              top: 50,
            },
          }}
        >
          <Box
            sx={{
              width: "238px",
              height: "85vh",
              backgroundColor: "#1D4F06",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              border: "2px solid white",
              margin: "0px",
              borderRadius: "10px",
              color: "white",
              opacity: "0.9",
              display: "flex",
              flexDirection: "column",
              paddingTop: "15px",
            }}
          >
            <List>
              <ListItem
                button
                sx={{
                  borderBottom: "1px solid white",
                  py: "10px",
                  cursor: "pointer",
                }}
                onClick={handleHomePage}
              >
                <ListItemIcon
                  sx={{ minWidth: "auto", marginRight: 1, color: "white" }}
                >
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
                <ListItemSecondaryAction>
                  <ArrowForwardIcon sx={{ color: "white" }} />
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem
                button
                sx={{
                  borderBottom: "1px solid white",
                  py: "10px",
                  cursor: "pointer",
                }}
                onClick={handleSignupClick}
              >
                <ListItemIcon
                  sx={{ minWidth: "auto", marginRight: 1, color: "white" }}
                >
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
                <ListItemSecondaryAction>
                  <ArrowForwardIcon sx={{ color: "white" }} />
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem
                button
                sx={{
                  borderBottom: "1px solid white",
                  py: "10px",
                  cursor: "pointer",
                }}
                onClick={handleProductCard}
              >
                <ListItemIcon
                  sx={{ minWidth: "auto", marginRight: 1, color: "white" }}
                >
                  <ShoppingBagIcon />
                </ListItemIcon>
                <ListItemText primary="Products" />
                <ListItemSecondaryAction>
                  <ArrowForwardIcon sx={{ color: "white" }} />
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem
                button
                sx={{
                  borderBottom: "1px solid white",
                  py: "10px",
                  cursor: "pointer",
                }}
                onClick={handleAddcart}
              >
                <ListItemIcon
                  sx={{ minWidth: "auto", marginRight: 1, color: "white" }}
                >
                  <ShoppingBagIcon />
                </ListItemIcon>
                <ListItemText primary="Your Carts" />
                <ListItemSecondaryAction>
                  <ArrowForwardIcon sx={{ color: "white" }} />
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem
                button
                sx={{
                  borderBottom: "1px solid white",
                  py: "10px",
                  cursor: "pointer",
                }}
                onClick={handleLoginClick}
              >
                <ListItemIcon
                  sx={{ minWidth: "auto", marginRight: 1, color: "white" }}
                >
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="LogIn" />
                <ListItemSecondaryAction>
                  <ArrowForwardIcon sx={{ color: "white" }} />
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem
                button
                sx={{
                  borderBottom: "1px solid white",
                  py: "10px",
                  cursor: "pointer",
                }}
                onClick={handleSignupClick}
              >
                <ListItemIcon
                  sx={{ minWidth: "auto", marginRight: 1, color: "white" }}
                >
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="SignUp" />
                <ListItemSecondaryAction>
                  <ArrowForwardIcon sx={{ color: "white" }} />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Box>

          {/* <Sidebar /> */}
        </Box>

        {/* Content Area */}
        <Grid
          item
          xs={isSmallScreen || !isSidebarOpen ? 12 : 10}
          sx={{
            marginLeft: isSmallScreen || !isSidebarOpen ? 0 : "250px",
            height: "calc(100vh - 64px)",
            overflow: "auto",
            // padding: 2,
            backgroundColor: "#f5f5f5",
          }}
        >
          <Outlet/>
         
        </Grid>
      </Grid>
    </>
  );
};

export default MainContainer;
