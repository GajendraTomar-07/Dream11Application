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
import React, { useState, useEffect } from "react";
import { Grid, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import ProductCard from "./ProductCard";

const Header = () => {
//   const [language, setLanguage] = useState("EN");
//   const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

//   const handleLanguageChange = (event) => {
//     setLanguage(event.target.value);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen((prev) => !prev);
//   };

//   const handleClose = () => {
//     setIsSidebarOpen(false);
//   };

//   const navigate = useNavigate();

//   const handleLoginClick = () => {
//     navigate('/login')
//   }
//   const handleSingupClick = () => {
//     navigate('/signup')
//   }

//   const handleLogout = () => {
//     navigate("/logout"); 
//   };

//   return (
//     <>
//       <AppBar
//         position="static"
//         sx={{
//           // backgroundColor: "rgb(67, 153, 67)"
//           backgroundColor: "#1D4F06"
//           }}
//       >
//         <Toolbar
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >

//           <Box
//             sx={{ display: "flex", alignItems: "center", gap: 3, padding: 1 }}
//           >
           
//             <Typography variant="h5">Krish Culture</Typography>
//           </Box>

       
//        <IconButton onClick={handleLogout}>
//               <LogoutIcon sx={{ color: "white", fontSize: "25px" }} />
//             </IconButton>

//         </Toolbar>
//       </AppBar>


//       <HeroSection />
//     </>
//   );
// };
//   export default Header;
// ====================

const [isSidebarOpen, setIsSidebarOpen] = useState(true);
const isSmallScreen = useMediaQuery("(max-width:850px)");

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
        <Sidebar />
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
      
      <HeroSection />
      </Grid>
    </Grid>
  </>
);
};

export default Header;
