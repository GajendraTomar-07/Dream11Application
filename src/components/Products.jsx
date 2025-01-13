import React, { useState, useEffect } from "react";
import { Grid, Box, useMediaQuery } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Sidebar from "./Sidebar";
import ProductCard from "./ProductCard";
import { Data } from "./Data";
import ProductDetails from "./ProductDetails";

const Products = () => {
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
       
          {/* {Data.map((item, index) => ( */}
             <ProductCard /> 
         {/* ))} */}

         {/* {Data.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <ProductCard item={item} />
              </Grid>
            ))} */}

        </Grid>
      </Grid>
    </>
  );
};

export default Products;
