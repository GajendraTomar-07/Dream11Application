import React, { useState } from "react";
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

const Header = () => {
  const [language, setLanguage] = useState("EN");
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsSidebarOpen(false);
  };

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login')
  }
  const handleSingupClick = () => {
    navigate('/signup')
  }

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

          {/* <Select
            value={language}
            onChange={handleLanguageChange}
            size="large"
            sx={{
              width: "150px",
              height: "35px",
              backgroundColor: "#195226",
              border: "2px solid rgb(16, 54, 6)",
              borderRadius: "20px",
              color: "white",
              fontSize: "14px",
              "& .MuiSelect-select": {
                padding: "10px",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "& .MuiSvgIcon-root": {
                color: "#fff", 
              },
            }}
          >
            <MenuItem value="EN"><b>English</b></MenuItem>
            <MenuItem value="HI"><b>हिंदी</b></MenuItem>
            <MenuItem value="FR"><b>Français</b></MenuItem>
            <MenuItem value="ES"><b>Español</b></MenuItem>
          </Select> */}
       <IconButton onClick={handleLogout}>
              <LogoutIcon sx={{ color: "white", fontSize: "25px" }} />
            </IconButton>

        </Toolbar>
      </AppBar>


      {isSidebarOpen && (
        <Box
          sx={{          
            backgroundColor: "#1D4F06",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            zIndex: 10,
            border: "2px solid white",
            borderRadius: "10px",
            color: "white",
            position: 'absolute',
            marginLeft: '10px',
            px: '20px',
            opacity: '0.8',
            "@media (min-width: 300px) and (max-width: 800px)": {
              opacity: 1,
            },
          }}
          onClick={handleClose}
        >
          <List>
        
          <ListItem
              button
              sx={{ borderBottom: "1px solid white", paddingLeft: 0, py: '10px',cursor: 'pointer' }}
              // onClick={handleSingupClick}
            >
              {/* <ListItemIcon sx={{ minWidth: "auto", marginRight: 1, color: "white" }}>
                <LogoutIcon />
              </ListItemIcon> */}
              <ListItemText primary="Profile" />
              <ListItemSecondaryAction>
                <ArrowForwardIcon sx={{ color: "white" }} />
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem
              button
              sx={{ borderBottom: "1px solid white", paddingLeft: 0, py: '10px', cursor: 'pointer' }}
              onClick={handleLoginClick}
            >
              {/* <ListItemIcon sx={{ minWidth: "auto", marginRight: 1, color: "white" }}>
                <LoginIcon />
              </ListItemIcon> */}
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
              {/* <ListItemIcon sx={{ minWidth: "auto", marginRight: 1, color: "white" }}>
                <LogoutIcon />
              </ListItemIcon> */}
              <ListItemText primary="SignUp" />
              <ListItemSecondaryAction>
                <ArrowForwardIcon sx={{ color: "white" }} />
              </ListItemSecondaryAction>
            </ListItem>

          

            {/* <ListItem
              button
              sx={{ borderBottom: "1px solid white", paddingLeft: 0, py: '10px' }}
            >
              <ListItemIcon sx={{ minWidth: "auto", marginRight: 1, color: "white" }}>
                <SportsKabaddiIcon />
              </ListItemIcon>
              <ListItemText primary="Fantasy Kabaddi" />
              <ListItemSecondaryAction>
                <ArrowForwardIcon sx={{ color: "white" }} />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem
              button
              sx={{ borderBottom: "1px solid white", paddingLeft: 0, py: '10px' }}
            >
              <ListItemIcon sx={{ minWidth: "auto", marginRight: 1, color: "white" }}>
                <InstallMobileIcon />
              </ListItemIcon>
              <ListItemText primary="App Download" />
              <ListItemSecondaryAction>
                <ArrowForwardIcon sx={{ color: "white" }} />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem
              button
              sx={{ borderBottom: "1px solid white", paddingLeft: 0, py: '10px' }}
            >
              <ListItemIcon sx={{ minWidth: "auto", marginRight: 1, color: "white" }}>
                <SportsBaseballIcon />
              </ListItemIcon>
              <ListItemText primary="Fantasy Sports" />
              <ListItemSecondaryAction>
                <ArrowForwardIcon sx={{ color: "white" }} />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem
              button
              sx={{ borderBottom: "1px solid white", paddingLeft: 0, py: '10px' }}
            >
              <ListItemIcon sx={{ minWidth: "auto", marginRight: 1, color: "white" }}>
                <MilitaryTechIcon />
              </ListItemIcon>
              <ListItemText primary="Dream11 Winners" />
              <ListItemSecondaryAction>
                <ArrowForwardIcon sx={{ color: "white" }} />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem
              button
              sx={{ borderBottom: "1px solid white", paddingLeft: 0, py: '10px' }}
            >
              <ListItemIcon sx={{ minWidth: "auto", marginRight: 1, color: "white" }}>
                <MilitaryTechIcon />
              </ListItemIcon>
              <ListItemText primary="Dream11 Private Contest" />
              <ListItemSecondaryAction>
                <ArrowForwardIcon sx={{ color: "white" }} />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem
              button
              sx={{ borderBottom: "1px solid white", paddingLeft: 0, py: '10px' }}
            >
              <ListItemIcon sx={{ minWidth: "auto", marginRight: 1, color: "white" }}>
                <MilitaryTechIcon />
              </ListItemIcon>
              <ListItemText primary="IPL Fantasy" />
              <ListItemSecondaryAction>
                <ArrowForwardIcon sx={{ color: "white" }} />
              </ListItemSecondaryAction>
            </ListItem> */}
          </List>
        </Box>
      )}
      <HeroSection />
    </>
  );
};

export default Header;
