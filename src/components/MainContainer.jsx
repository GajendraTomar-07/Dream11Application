// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Box,
//   IconButton,
//   styled,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import HeroSection from "./HeroSection";
// import LogoutIcon from "@mui/icons-material/Logout";
// import React, { useState, useEffect } from "react";
// import { Grid, useMediaQuery } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import Sidebar from "./Sidebar";
// import {
//   List,
//   ListItem,
//   ListItemText,
//   ListItemIcon,
//   ListItemSecondaryAction,
// } from "@mui/material";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// import { Link, useNavigate } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import LoginIcon from "@mui/icons-material/Login";
// import LoginPage from "./LoginPage";
// import SignupPage from "./SignupPage";

// const MainContainer = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const isSmallScreen = useMediaQuery("(max-width:850px)");
//   const navigate = useNavigate();
//   const [refresh, setRefresh] = useState(false);
//   const [login, setLogin] = useState(false);
//   const [signup, setSignup] = useState(false);
//   const [home, setHome] = useState(false);

//   useEffect(() => {
//     if (isSmallScreen) {
//       setIsSidebarOpen(false);
//     } else {
//       setIsSidebarOpen(true);
//     }
//   }, [isSmallScreen]);

//   const toggleSidebar = () => {
//     setIsSidebarOpen((prev) => !prev);
//   };

//   const handleLogout = () => {
//     console.log("Logout clicked");
//   };
 
//   const handleHome = () => {
//     navigate('/')
//   }

//   const handleLogin = () => {
//     navigate('/login');
//     console.log("login click")
//   }

//   const handleSignup = () => {
//     navigate('/signup');
//     console.log("signup click");
//   }

//   const handleSignupClick = () => {
//     // setSignup(true)
//     navigate('/signup');
//   };
//   const handleProductCard = () => {
//     setRefresh(true);
//     navigate("/products");
//   };

//   const handleAddcart = () => {
//     navigate("/AddtoCart");
//   };

// //   useEffect(() => {
// //     if (refresh) {
// //       window.location.reload();
// //     }
// //   });

//   return (
//     <>
//       <AppBar
//         position="static"
//         sx={{
//           backgroundColor: "#1D4F06",
//         }}
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
//             {isSmallScreen && (
//               <IconButton onClick={toggleSidebar}>
//                 {isSidebarOpen ? (
//                   <CloseIcon sx={{ color: "white" }} />
//                  ) : ( 
//                   <MenuIcon sx={{ color: "white" }} />
//                  )} 
//               </IconButton>
//             )}
//             <Typography variant="h5">Krish Culture</Typography>
//           </Box>
//           <IconButton onClick={handleLogout}>
//             <LogoutIcon sx={{ color: "white", fontSize: "25px" }} />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//      <Grid container>
//         <Grid
//           item
//           xs={isSmallScreen || !isSidebarOpen ? 12 : 10}
//           sx={{
//             marginLeft: isSmallScreen || !isSidebarOpen ? 0 : "250px",
//             overflow: "auto",
//             backgroundColor: "#f5f5f5",
//           }}
//         ></Grid>
//       </Grid>

//       <Box
//       sx={{
//         width: "238px", 
//         height: "85vh", 
//         backgroundColor: "#1D4F06", 
//         boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", 
//         border: "2px solid white", 
//         margin: '0px',
//         borderRadius: "10px",
//         color: "white",
//         opacity: "0.9",
//         display: "flex",
//         flexDirection: "column",
//         paddingTop: "15px", 
//       }}
//     >
//       <List>
//       <ListItem
//           button
//           sx={{ borderBottom: "1px solid white", py: "10px", cursor: "pointer" }}
//           onClick={handleHome}
//         >
//           <ListItemIcon sx={{ minWidth: "auto", marginRight: 1, color: "white" }}>
//             <HomeIcon />
//           </ListItemIcon>
//           <ListItemText primary="Home" />
//           <ListItemSecondaryAction>
//             <ArrowForwardIcon sx={{ color: "white" }} />
//           </ListItemSecondaryAction>
//         </ListItem>

//         <ListItem
//           button
//           sx={{ borderBottom: "1px solid white", py: "10px", cursor: "pointer" }}
//           onClick={handleSignupClick}
//         >
//           <ListItemIcon sx={{ minWidth: "auto", marginRight: 1, color: "white" }}>
//             <AccountCircleIcon />
//           </ListItemIcon>
//           <ListItemText primary="Profile" />
//           <ListItemSecondaryAction>
//             <ArrowForwardIcon sx={{ color: "white" }} />
//           </ListItemSecondaryAction>
//         </ListItem>

//         <ListItem
//           button
//           sx={{ borderBottom: "1px solid white", py: "10px", cursor: "pointer" }}
//           onClick={handleProductCard}
//         >
//           <ListItemIcon sx={{ minWidth: "auto", marginRight: 1, color: "white" }}>
//             <ShoppingBagIcon />
//           </ListItemIcon>
//           <ListItemText primary="Products" />
//           <ListItemSecondaryAction>
//             <ArrowForwardIcon sx={{ color: "white" }} />
//           </ListItemSecondaryAction>
//         </ListItem>

//         {/* <ListItem
//           button
//           sx={{ borderBottom: "1px solid white", py: "10px", cursor: "pointer" }}
//           onClick={handleAddcart}
//         >
//           <ListItemIcon sx={{ minWidth: "auto", marginRight: 1, color: "white" }}>
//             <ShoppingBagIcon />
//           </ListItemIcon>
//           <ListItemText primary="Your Carts" />
//           <ListItemSecondaryAction>
//             <ArrowForwardIcon sx={{ color: "white" }} />
//           </ListItemSecondaryAction>
//         </ListItem> */}


//         <ListItem
//           button
//           sx={{ borderBottom: "1px solid white", py: "10px", cursor: "pointer" }}
//           onClick={handleLogin}
//         >
//           <ListItemIcon sx={{ minWidth: "auto", marginRight: 1, color: "white" }}>
//             <LoginIcon />
//           </ListItemIcon>
//           <ListItemText primary="LogIn" />
//           <ListItemSecondaryAction>
//             <ArrowForwardIcon sx={{ color: "white" }} />
//           </ListItemSecondaryAction>
//         </ListItem>

//         <ListItem
//           button
//           sx={{ borderBottom: "1px solid white", py: "10px", cursor: "pointer" }}
//           onClick={handleSignupClick}
//         >
//           <ListItemIcon sx={{ minWidth: "auto", marginRight: 1, color: "white" }}>
//             <LogoutIcon />
//           </ListItemIcon>
//           <ListItemText primary="SignUp" />
//           <ListItemSecondaryAction>
//             <ArrowForwardIcon sx={{ color: "white" }} />
//           </ListItemSecondaryAction>
//         </ListItem>
//       </List>
//     </Box>
//       {/* { !home && */}
//       <GridContainer container>
//         <Grid
//           item
//           xs={isSmallScreen || !isSidebarOpen ? 12 : 10}
//           sx={{
//             marginLeft: isSmallScreen || !isSidebarOpen ? 0 : "250px",
//             overflow: "auto",
//             padding: 2,
//             backgroundColor: "#f5f5f5",
//           }}
//         >
//           <HeroSection />
//         </Grid>
//       </GridContainer>
//       {/* } */}
//       {/* {login && <LoginPage/>} */}
//       {/* {signup && <SignupPage/>} */}
//     </>
//   );
// };

// export default MainContainer;

// const GridContainer = styled(Grid)({
//   position: "absolute",
//   top: "70px",
//   height: "85vh",
//   overflowY: "scroll",
// });
