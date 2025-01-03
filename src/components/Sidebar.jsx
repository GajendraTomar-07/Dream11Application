
import React, { useState } from "react";
import {
  Box,
   List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


const Sidebar = () => {

  
    const navigate = useNavigate();
  
    const handleLoginClick = () => {
      navigate('/login')
    }
    const handleSingupClick = () => {
      navigate('/signup')
    }
  
    const handleProductCard = () => {
      navigate('/products')
    }

  return (
  <>
  
  <Box
          sx={{         
            width: "200px",
            height: "89vh", 
            backgroundColor: "#1D4F06",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            border: "2px solid white",
            borderRadius: "10px",
            color: "white",
            position: 'absolute',
           
            px: '20px',
            opacity: '0.8',
            "@media (min-width: 300px) and (max-width: 800px)": {
              opacity: 1,
            },
          }}
         
        >
          <List>
        
          <ListItem
              button
              sx={{ borderBottom: "1px solid white", paddingLeft: 0, py: '10px',cursor: 'pointer' }}
              onClick={handleSingupClick}
            >
              <ListItemIcon sx={{ minWidth: "auto", marginRight: 1, color: "white" }}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
              <ListItemSecondaryAction>
                <ArrowForwardIcon sx={{ color: "white" }} />
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem
              button
              sx={{ borderBottom: "1px solid white", paddingLeft: 0, py: '10px', cursor: 'pointer' }}
              onClick={handleProductCard}
            >
              <ListItemIcon sx={{ minWidth: "auto", marginRight: 1, color: "white" }}>
                <ShoppingBagIcon />
              </ListItemIcon>
              <ListItemText primary="Product" />
              <ListItemSecondaryAction>
                <ArrowForwardIcon sx={{ color: "white" }} />
              </ListItemSecondaryAction> 
            </ListItem>
            <ListItem
              button
              sx={{ borderBottom: "1px solid white", paddingLeft: 0, py: '10px',cursor: 'pointer' }}
              onClick={handleLoginClick}
            >
              <ListItemIcon sx={{ minWidth: "auto", marginRight: 1, color: "white" }}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="LogIn" />
              <ListItemSecondaryAction>
                <ArrowForwardIcon sx={{ color: "white" }} />
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem
              button
              sx={{ borderBottom: "1px solid white", paddingLeft: 0, py: '10px',cursor: 'pointer' }}
              onClick={handleSingupClick}
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
  </>
  )
}

export default Sidebar