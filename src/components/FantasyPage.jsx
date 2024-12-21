import React, { Component } from 'react';
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box';
import Slider from "react-slick";
import { Card, CardContent, Typography, Container } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsHockeyIcon from '@mui/icons-material/SportsHockey';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';

export default function FantasyPage() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <BoxContainer component="section">
      <Text variant="h6">
        <strong>Popular </strong> <b className='Header-clr'>Fantasy Sports</b><strong> in India</strong>
      </Text>

      <ParaTxt variant="body2" sx={{ opacity: '0.7' }}>
        <a href='#' className='col-p-tag'>Fantasy sports</a> is a platform for online gaming fantasy players create
        a virtual team of real sports players. Dream11 gives you plenty of options to
        create your fantasy sports team for the sport you would like to play and win!
        Here are the <a href='#' className='col-p-tag'>most popular fantasy sports</a> leagues to play.
      </ParaTxt>

      <Boxs>
        <Slider {...settings}>
          <div className='slider-conatiner'>
            <Cards>
              <CardContent>

                <HeadContainer>
                  <SportsBaseballIcon sx={{ mb: -0.6 }}/> Fantasy Cricket
                </HeadContainer>
                 
                <Typography variant="body2" sx={{mt: 3}}>
                  Play one of the biggest cricket leagues, the TATA IPL 2024. Use your
                  cricketing knowledge and join leagues like thr Big Bash League, Caribbean
                  Premier League and many others.
                </Typography>

              </CardContent>
            </Cards>
          </div>

          <div className='slider-conatiner'>
            <Cards>
              <CardContent>

                <HeadContainer>
                  <SportsSoccerIcon sx={{ mb: -0.6 }}/> Fantasy Football
                </HeadContainer>

                <Typography variant="body2" sx={{mt: 3}}>
                  Fantasy Football is a game in which participants created a fictional Team
                  of real-life football players and score points based on their actual performance
                  on the field of play.
                </Typography>

              </CardContent>
            </Cards>
          </div>

          <div className='slider-conatiner'>
            <Cards>
              <CardContent>

                <HeadContainer>
                  <SportsKabaddiIcon sx={{ mb: -0.6 }}/> Fantasy Kabaddi
                </HeadContainer>

                <Typography variant="body2" sx={{mt: 3}}>
                  Fantasy Kabaddi is a skill-based game of India's famous sport-Kabaddi.
                  Fantasy Kabaddi on Dream11 brings a new perspective to fantasy Kabaddi
                  in the world of fantasy sports.
                </Typography>

              </CardContent>
            </Cards>
          </div>

          <div className='slider-conatiner'>
            <Cards>
              <CardContent>

                <HeadContainer>
                  <SportsBaseballIcon  sx={{ mb: -0.6 }}/> Fantasy Baseball
                </HeadContainer>

                <Typography variant="body2" sx={{mt: 3}}>
                  Fantasy Baseball has different formats and rules and therefore there are several
                  types of fantasy contests. Join fantasy constests for the most popular
                  Baseball tournaments on Dream11.
                </Typography>

              </CardContent>
            </Cards>
          </div>

          <div className='slider-conatiner'>
            <Cards>
              <CardContent>

                <HeadContainer>
                  <SportsBasketballIcon  sx={{ mb: -0.6 }}/> Fantasy Basketball
                </HeadContainer>

                <Typography variant="body2" sx={{mt: 3}}>
                  Get ready to play fantasy basketball across popular basketball leagues
                  and tournaments. Participate in daily fantasy matches, create or join NBA
                  contests and win on Dream11.
                </Typography>

              </CardContent>
            </Cards>
          </div>

          <div className='slider-conatiner'>
            <Cards>
              <CardContent>

                <HeadContainer>
                  <SportsHockeyIcon  sx={{ mb: -0.6 }}/> Fantasy Hockey
                </HeadContainer>

                <Typography variant="body2" sx={{mt: 3}}>
                  In fantasy hockey, your mission is to pick a team that is better than others, Create
                  your team for the most popular hockey leagues, namely Men's Pro Hockey League
                  and many more.
                </Typography>

              </CardContent>
            </Cards>
          </div>

          <div className='slider-conatiner'>
            <Cards>
              <CardContent>

                <HeadContainer>
                  <SportsVolleyballIcon  sx={{ mb: -0.6 }}/> Fantasy Volleyball
                </HeadContainer>

                <Typography variant="body2" sx={{mt: 3}}>
                  If you love fantasy sports and volleyball, fantasy volleyball is like a cherry
                  on top of the cake. Fantasy Volleyball helps you wim=n rewards and enjoy the sport
                  as well.
                </Typography>

              </CardContent>
            </Cards>
          </div>

          <div className='slider-conatiner'>
            <Cards>
              <CardContent>

                <HeadContainer>
                  <SportsHandballIcon  sx={{ mb: -0.6 }}/> Fantasy Handball
                </HeadContainer>

                <Typography variant="body2" sx={{mt: 3}}>
                  Play Fantasy Handball and participate in daily contests across various professional
                  handball leagues, and international tournaments available on Dream11. Get ready to play now!
                </Typography>

              </CardContent>
            </Cards>
          </div>

        </Slider>
      </Boxs>

    </BoxContainer>
  )
}

const BoxContainer = styled(Box)({
  background: ' #f5f5f5',
})

const Text = styled(Typography)({
  fontSize: '26px',
  color: ' #1a1a1a',
  letterSpacing: '-1px',
  fontWeight: '900',
  fontFamily: 'robotomedium',
  width: '50%',
  margin: '0 auto',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  padding: '30px 0px 10px 0px',
  '@media (min-width: 300px) and (max-width: 800px)': {
    width: '100%',
  }
})

const ParaTxt = styled(Typography)({
  fontFamily: 'robotomedium',
  width: '70%',
  margin: '10px auto',
  fontSize: '16px',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  '@media (min-width: 300px) and (max-width: 800px)': {
    width: '100%',
  }
})

const Boxs = styled(Box)({
  width: '90%',
  margin: '0 auto',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'block',
  marginTop: '40px',
})

const Cards = styled(Card)({
  textAlign: 'center',
  width: '95%',
  height: '25vh',
  border: '0.9px solid rgb(255, 107, 107)',
  borderRadius: '20px',
  background: ' #f5f5f5',
  position: 'relative',
  overflow: 'visible',
  '@media (min-width: 300px) and (max-width: 800px)': {
    height: '30vh',
  }
})

const HeadContainer = styled(Container)({
  width: '60%',
  border: '0.9px solid rgb(255, 107, 107)',
  borderRadius: '20px',
  backgroundColor: 'white',
  color: 'red',
  padding: '5px 5px 10px 5px',
  position: 'absolute',
  left: '20%',
  top: '-20px',
})