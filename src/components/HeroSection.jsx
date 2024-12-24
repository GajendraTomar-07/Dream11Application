import React from "react";
import { Grid, Box, styled } from "@mui/material";
import AgricultureImg from "../assets/agricltureImg.jpeg";
import Desktop1 from "../assets/desktop1.jpeg";
import Desktop2 from "../assets/desktop2.jpeg";
import Desktop3 from "../assets/desktop3.jpeg";
import Slider from "react-slick";
import "./HeroSection.css";
import { useState, useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OfficialPartner from "./OfficialPartner";


export default function HeroSection() {
  // const [isSmallScreen, setIsSmallScreen] = useState(false);

  // useEffect(() => {
  // AOS.init({
  //   duration: 1000,
  //   // once: true,
  // });

  // const handleResize = () => {
  //   setIsSmallScreen(window.innerWidth <= 767);
  // };

  // handleResize(); // Initial check
  // window.addEventListener("resize", handleResize);

  // return () => {
  // window.removeEventListener("resize", handleResize);
  // };
  // }, []);

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
      <Grid
        sx={{
          backgroundImage: `url(${AgricultureImg})`,
          backgroundSize: "cover",
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
            backgroundImage: `url(${AgricultureImg})`,
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
                  alignItems: "center",
                }}
              >
                <img
                  src={Desktop1}
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
                  src={Desktop2}
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
                  src={Desktop3}
                  alt="desktop"
                  className="Img-header"
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
  '@media (min-width: 300px) and (max-width: 600px)': {
    // padding: '100px 10px 10px 10px',
  },
  '@media (min-width: 600px) and (max-width: 1100px)': {
    // padding: '10px 10px 10px 10px',
  }
})