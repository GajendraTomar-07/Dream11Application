import React, { useEffect, useState } from "react";
import { Box, List, ListItem, ListItemText, ListItemIcon, ListItemSecondaryAction } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';

const Sidebar = () => {
  const [refresh,setRefresh] = useState(false);
  const navigate = useNavigate();

  const handleHomePage = () => {
    navigate("/");
  }

  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleSignupClick = () => {
    navigate("/signup");
  };
  const handleProductCard = () => {
    setRefresh(true);
    navigate("/products");
  };

  const handleAddcart = () => {
    navigate("/AddtoCart")
  }

  useEffect(()=>{
    if(refresh){
      window.location.reload()
    }
  })

  return (
    <Box
      sx={{
        width: "238px", 
        height: "85vh", 
        backgroundColor: "#1D4F06", 
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", 
        border: "2px solid white", 
        margin: '0px',
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
          sx={{ borderBottom: "1px solid white", py: "10px", cursor: "pointer" }}
          onClick={handleHomePage}
        >
          <ListItemIcon sx={{ minWidth: "auto", marginRight: 1, color: "white" }}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
          <ListItemSecondaryAction>
            <ArrowForwardIcon sx={{ color: "white" }} />
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem
          button
          sx={{ borderBottom: "1px solid white", py: "10px", cursor: "pointer" }}
          onClick={handleSignupClick}
        >
          <ListItemIcon sx={{ minWidth: "auto", marginRight: 1, color: "white" }}>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
          <ListItemSecondaryAction>
            <ArrowForwardIcon sx={{ color: "white" }} />
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem
          button
          sx={{ borderBottom: "1px solid white", py: "10px", cursor: "pointer" }}
          onClick={handleProductCard}
        >
          <ListItemIcon sx={{ minWidth: "auto", marginRight: 1, color: "white" }}>
            <ShoppingBagIcon />
          </ListItemIcon>
          <ListItemText primary="Products" />
          <ListItemSecondaryAction>
            <ArrowForwardIcon sx={{ color: "white" }} />
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem
          button
          sx={{ borderBottom: "1px solid white", py: "10px", cursor: "pointer" }}
          onClick={handleAddcart}
        >
          <ListItemIcon sx={{ minWidth: "auto", marginRight: 1, color: "white" }}>
            <ShoppingBagIcon />
          </ListItemIcon>
          <ListItemText primary="Your Carts" />
          <ListItemSecondaryAction>
            <ArrowForwardIcon sx={{ color: "white" }} />
          </ListItemSecondaryAction>
        </ListItem>


        <ListItem
          button
          sx={{ borderBottom: "1px solid white", py: "10px", cursor: "pointer" }}
          onClick={handleLoginClick}
        >
          <ListItemIcon sx={{ minWidth: "auto", marginRight: 1, color: "white" }}>
            <LoginIcon />
          </ListItemIcon>
          <ListItemText primary="LogIn" />
          <ListItemSecondaryAction>
            <ArrowForwardIcon sx={{ color: "white" }} />
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem
          button
          sx={{ borderBottom: "1px solid white", py: "10px", cursor: "pointer" }}
          onClick={handleSignupClick}
        >
          <ListItemIcon sx={{ minWidth: "auto", marginRight: 1, color: "white" }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="SignUp" />
          <ListItemSecondaryAction>
            <ArrowForwardIcon sx={{ color: "white" }} />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
