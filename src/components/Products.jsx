/* eslint-disable no-undef */



import { useState } from 'react';
import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import ProductCard from './ProductCard';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Select,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
} from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import AppLogo from '../assets/footer_logo.png'
import HeroSection from "./HeroSection";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";


const Products = () => {
     const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
   

     
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsSidebarOpen(false);
  };

  
  const handleLogout = () => {
    navigate("/logout"); 
  };
  
    return (
      <>
        <AppBar
        position="static"
        sx={{
          // backgroundColor: "rgb(67, 153, 67)"
          backgroundColor: "#1D4F06"
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
            <IconButton onClick={toggleSidebar}>

              {isSidebarOpen ? (
                <CloseIcon sx={{ color: "#fff", backgroundColor: "#195226", p: 0.5, borderRadius: '50px' }} />
              ) : (
                <MenuOpenIcon sx={{ color: "#fff", backgroundColor: "#195226", p: 0.4, borderRadius: '50px' }} />
              )}
            </IconButton>
            {/* <img src={AppLogo} className="app-logo" /> */}
            <Typography variant="h5">Krish Chakra</Typography>
          </Box>

       <IconButton onClick={handleLogout}>
              <LogoutIcon sx={{ color: "white", fontSize: "25px" }} />
            </IconButton>

        </Toolbar>
      </AppBar>

        <Sidebar />
      <ProductCard/>
     

        
       
      </>
    );
}

export default Products