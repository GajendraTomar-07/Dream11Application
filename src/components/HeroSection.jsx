import React from "react";
import { Grid, Box, styled } from "@mui/material";
import AgricultureImg from "../assets/background-Img.png";
import Desktop1 from "../assets/farmer-Photoroom.png";
import Desktop2 from "../assets/kisan2-removebg-preview.png";
import Desktop3 from "../assets/farmer1-Photoroom.png";
import Slider from "react-slick";
import "./HeroSection.css";
import { useState, useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OfficialPartner from "./OfficialPartner";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";


export default function HeroSection() {

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
    {/* <Sidebar/> */}
    {/* <MainContainer/> */}

      <Grid
        sx={{
          marginTop: '80px',
          backgroundImage: `url(${AgricultureImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          '@media (max-width: 600px)': {
            backgroundSize: 'auto',
            marginTop: '0px',
            backgroundPosition: 'center top',
          },
          '@media (max-width: 960px)': {
            marginTop: '0px',
            backgroundSize: 'cover',
          },
          "@media (max-width: 480px)": {
            backgroundImage: `url(${AgricultureImg})`,
            marginTop: '0px',
            backgroundColor: "#050c1f",
          },
        }}
      >
        <Grid item>
          <BoxContainer>
            <Slider {...settings} >
              <div
                data-aos="zoom-in"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                  alignItems: "center",
                }}
              >
                <img
                  src={Desktop3}
                  alt="desktop"
                  className="Img-header"
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
                  src={Desktop1}
                  alt="desktop"
                  className="Img-header2"
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
                  className="Img-header3"
                />
              </div>
            </Slider>
          </BoxContainer>
        </Grid>
      </Grid>
      <OfficialPartner />
    </>
  );
};

const BoxContainer = styled(Box)({
  padding: '50px 10px',
  overflow: 'visible',
  '@media (min-width: 300px) and (max-width: 600px)': {
    // padding: '100px 10px 10px 10px',
  },
  '@media (min-width: 600px) and (max-width: 1100px)': {
    // padding: '10px 10px 10px 10px',
  }
})