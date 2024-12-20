import React from "react";
import { Grid, Box } from "@mui/material";
import Destop2024 from "../assets/Destop2024.webp";
import Desktop1 from "../assets/Desktop1.webp";
import Desktop2 from "../assets/Desktop2.webp";
import Desktop3 from "../assets/Desktop3.webp";
import Desktop4 from "../assets/desktop4.webp"
import Slider from "react-slick";
import "./HeroSection.css";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HeroSection = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      // once: true,
    });

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 767);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
     <Grid
       sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${Destop2024})`,
        // backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
          '@media (max-width: 600px)': {
          backgroundSize: 'auto',
          backgroundPosition: 'center top',
        },
        '@media (max-width: 960px)': {
          backgroundSize: 'cover',
        },
        "@media (max-width: 480px)": {
          backgroundImage: "none",
          backgroundColor: "#050c1f", 
        },
      }}
     >
      <Grid item>
    <Box  >
      <Slider {...settings} >
        <div  
        data-aos="zoom-in"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={isSmallScreen ? Desktop4 : Desktop1}
            alt="desktop"
            style={{ width: "50%", height: "85vh",margin:"auto",  marginTop: "80px", }}
          />
        </div>
        <div 
          data-aos="zoom-in"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={Desktop2}
            alt="desktop"
            style={{ width: "50%", height: "85vh",margin:"auto",  marginTop: "80px", }}
          />
        </div>
        <div  
         data-aos="zoom-in"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={Desktop3}
            alt="desktop"
            style={{ width: "50%", height: "85vh",margin:"auto",  marginTop: "80px",}}
          />
        </div>
       
      </Slider>
    </Box>
      </Grid>
     </Grid>
  );
};

export default HeroSection;
