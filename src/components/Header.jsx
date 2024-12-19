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
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close"; 

const Header = () => {
  const [language, setLanguage] = useState("EN"); // Default language
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: {
            xs: "#580d0b", // Orange for screens smaller than 768px
            sm: "black", // Dark for screens 768px and above
          },
          paddingX: 1, // Add horizontal padding
          paddingY: 1, // Add vertical padding
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left Section: Menu and Logo */}
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 3, padding: 1 }}
          >
           <IconButton onClick={toggleSidebar}>
              {/* Conditionally render MenuOpenIcon or CloseIcon */}
              {isSidebarOpen ? (
                <CloseIcon sx={{ color: "#fff" }} />
              ) : (
                <MenuOpenIcon sx={{ color: "#fff" }} />
              )}
            </IconButton>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#fff",
                display: "flex",
                alignItems: "center",
              }}
            >
              <SportsEsportsIcon sx={{ fontSize: 24, mr: 0.5 }} />
              Dream11
            </Typography>
          </Box>

          <Select
            value={language}
            onChange={handleLanguageChange}
            size="large"
            sx={{
              width: "150px",
              height: "45px",
              backgroundColor: "#580d0b",
              border: "2px solid rgb(96, 28, 24)", // Add border
              borderRadius: "20px", // Rounded corners
              color: "white", // Set text color
              fontSize: "14px", // Font size
              "& .MuiSelect-select": {
                padding: "10px", // Inner padding
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none", // Remove outline
              },
            }}
          >
            <MenuItem value="EN">English</MenuItem>
            <MenuItem value="HI">हिंदी</MenuItem>
            <MenuItem value="FR">Français</MenuItem>
            <MenuItem value="ES">Español</MenuItem>
          </Select>
        </Toolbar>
      </AppBar>

     
      {isSidebarOpen && (
        <Box
          sx={{
            width: {
            //   xs: "100%", 
              sm: "250px", 
            },
            background:
              "linear-gradient(90deg, #431010 1.41%, rgba(35, 5, 5, 0.88) 100%)",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            padding: 2,
            zIndex: 10,
            border: "2px solid #B15656",
            borderRadius:"20px",
            color:"white",
          }}
        >
          <List>
            <ListItem
              button
              sx={{ borderBottom: "1px solid #B15656", paddingLeft: 0 }}
            >
              <ListItemIcon sx={{ minWidth: "auto", marginRight: 1 , color:"white"}}>
                <SportsBaseballIcon />
              </ListItemIcon>
              <ListItemText primary="Fantasy Cricket" />
              <ListItemSecondaryAction>
                <ArrowForwardIcon sx={{ color: "#B15656" }} />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem
              button
              sx={{ borderBottom: "1px solid #B15656", paddingLeft: 0 }}
            >
              <ListItemIcon sx={{ minWidth: "auto", marginRight: 1, color:"white" }}>
                <SportsBaseballIcon />
              </ListItemIcon>
              <ListItemText primary="Fantasy Football" />
              <ListItemSecondaryAction>
                <ArrowForwardIcon sx={{ color: "#B15656" }} />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem
              button
              sx={{ borderBottom: "1px solid #B15656", paddingLeft: 0 }}
            >
              <ListItemIcon sx={{ minWidth: "auto", marginRight: 1, color:"white"}}>
                <SportsBaseballIcon />
              </ListItemIcon>
              <ListItemText primary="Fantasy Kabaddi" />
              <ListItemSecondaryAction>
                <ArrowForwardIcon sx={{ color: "#B15656" }} />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem
              button
              sx={{ borderBottom: "1px solid #B15656", paddingLeft: 0 }}
            >
              <ListItemIcon sx={{ minWidth: "auto", marginRight: 1, color:"white" }}>
                <SportsBaseballIcon />
              </ListItemIcon>
              <ListItemText primary="App Download" />
              <ListItemSecondaryAction>
                <ArrowForwardIcon sx={{ color: "#B15656" }} />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Box>
      )}
    </>
  );
};

export default Header;
