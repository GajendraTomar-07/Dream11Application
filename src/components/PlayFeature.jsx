import React, { Component } from 'react';
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Grid from '@mui/material/Grid';
import FantasyPage from './FantasyPage';


export default function PlayFeature() {
  return (
    <>
      <BoxContainer component="section">
        <Text variant="h6">
          <strong>How to </strong> <b className='Header-clr'>Play</b>
        </Text>

        <ParaTxt variant="body2" sx={{ opacity: '0.9' }}>
          Ready to challenge other sports fans? Watch this video to learn how to play
          on Dream11 and get started now. Compete with sports fans, make a perfect Dream11
          team with the best combination of players as per your knowledge and skill and win big.
        </ParaTxt>

        <BoxVedio>
          <img src='https://cdnflags.dream11.com/d11-static-pages/images/how_to_Play_22_sep.webp' alt="How to play hindi mai" className='youtube-Img' />
        </BoxVedio>

        <br /><hr className='hr-tag' /><br />

        <Text variant="h6">
          <strong>Reviews & </strong> <b className='Header-clr'>Rating</b>
        </Text>

        <BoxRating>
          <CardContainer>
            <CardContent>
              <div>
                <div className='div-icon'>
                  <AccountCircleIcon sx={{ fontSize: '60px', border: '4px solid #8f8e8e', borderRadius: '50%' }} />
                </div>
                <div className='div-title'>
                  <Typography variant="subtitle1">
                    <b>Manas Malhotra</b>
                  </Typography>
                </div>
              </div>
              <div className='middle-user'>
                <div className='div-container1'>
                  <Typography variant="caption">
                    <b>Mega Contest Winner</b>
                  </Typography>
                  <br />
                  <Typography variant="caption" sx={{ opacity: '0.8' }}>
                    MI vs RR
                  </Typography>
                </div>
                <div className='div-container2'>
                  <Txt variant="caption">
                    ₹1 Crore
                  </Txt>
                  <br />
                  <Typography variant="caption" sx={{ opacity: '0.8' }}>
                    WINNINGS
                  </Typography>
                </div>
              </div>
              <Typography variant="body2">
                I've been playing on Dream11 for many years and I have won earlier too.
                This time I won a Mega Contest! I'm an avid cricket follower. The best
                part was I got my winnings instantly into my bank account after the withdrawal.
              </Typography>
            </CardContent>
          </CardContainer>

          <CardContainer>
            <CardContent>
              <div>
                <div className='div-icon'>
                  <AccountCircleIcon sx={{ fontSize: '60px', border: '4px solid #8f8e8e', borderRadius: '50%' }} />
                </div>
                <div className='div-title'>
                  <Typography variant="subtitle1">
                    <b>Sagar Bhagat</b>
                  </Typography>
                </div>
              </div>
              <div className='middle-user'>
                <div className='div-container1'>
                  <Typography variant="caption">
                    <b>Mega Contest Winner</b>
                  </Typography>
                  <br />
                  <Typography variant="caption" sx={{ opacity: '0.8' }}>
                    PBKS VS DC
                  </Typography>
                </div>
                <div className='div-container2'>
                  <Txt variant="button">
                    ₹1 Crore
                  </Txt>
                  <br />
                  <Typography variant="caption" sx={{ opacity: '0.8' }}>
                    WINNINGS
                  </Typography>
                </div>
              </div>
              <Typography variant="body2">
                One of the many reasons why I trust Dream11 is because I get my winnings
                safely and instantly after the contest gets over. I also used my own cricket
                knowledge to enhance my fantasy cricket skills.
              </Typography>
            </CardContent>
          </CardContainer>


          <CardContainer>
            <CardContent>
              <div>
                <div className='div-icon'>
                  <AccountCircleIcon sx={{ fontSize: '60px', border: '4px solid #8f8e8e', borderRadius: '50%' }} />
                </div>
                <div className='div-title'>
                  <Typography variant="subtitle1">
                    <b>Anuj Yadav</b>
                  </Typography>
                </div>
              </div>
              <div className='middle-user'>
                <div className='div-container1'>
                  <Typography variant="caption">
                    <b>Mega Contest Winner</b>
                  </Typography>
                  <br />
                  <Typography variant="caption" sx={{ opacity: '0.8' }}>
                    GT vs MI
                  </Typography>
                </div>
                <div className='div-container2'>
                  <Txt variant="button">
                    ₹1 Crore
                  </Txt>
                  <br />
                  <Typography variant="caption" sx={{ opacity: '0.8' }}>
                    WINNINGS
                  </Typography>
                </div>
              </div>
              <Typography variant="body2">
                I used to always watch cricket and analyse the game. It was all about
                doing some good research and putting skills to work. I'm glad my knowledge
                and skills got rewarded and I won the Mega Contest.
              </Typography>
            </CardContent>
          </CardContainer>
        </BoxRating>

        <FooterBox>
          <Grid container spacing={2}>
            <Grid item sm={3}>
              <Typography variant="subtitle1">
                App Rating
              </Typography>
            </Grid>
            <Grid item sm={3}>
              <StarIcon sx={{ color: '#fccc38' }} />
              <StarIcon sx={{ color: '#fccc38' }} />
              <StarIcon sx={{ color: '#fccc38' }} />
              <StarIcon sx={{ color: '#fccc38' }} />
              <StarHalfIcon sx={{ color: '#fccc38' }} />
            </Grid>
            <Grid item sm={6}>
              <b>4.7 <p className='vertical-tag'></p> <b className='tag-rating'>2,750,143 rating</b></b>
            </Grid>
          </Grid>
        </FooterBox>
        <br />
      </BoxContainer>
      <FantasyPage />
    </>
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

const BoxVedio = styled(Box)({
  width: '100%',
  maxWidth: '463px',
  margin: '0 auto',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
});

const CardContainer = styled(Card)({
  width: '100%',
  background: 'white',
  borderRadius: '8px',
  fontFamily: 'Roboto, sans-serif',
  textAlign: 'left',
  overflow: 'visible',
  display: 'flex',
  flexDirection: 'column',
  margin: '10px 10px',
  position: 'relative',
  padding: '0px',
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  '@media (min-width: 300px) and (max-width: 600px)': {
    width: '100%',  
    margin: '20px 0px'
  },
  '@media (min-width: 600px) and (max-width: 1100px)': {
    width: '100%',
    margin: '20px 10px'
  }
});

const BoxRating = styled(Box)({
  width: '80%',
  background: ' #f5f5f5',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  boxSizing: 'border-box',
  overflowX: 'scroll',
  padding: '20px 10px',
  overflowY: 'scroll',
  "@media (min-width: 300px) and (max-width: 700px)": {
    width: "100%",
    height: '330px',
    flexDirection: 'column',
  },
  "@media (min-width: 700px) and (max-width: 1100px)": {
    width: "100%",
  },
});

const Txt = styled(Box)({
  width: '90px',
  display: 'inline-block',
  color: ' #ffd152',
  fontWeight: 900,
  fontSize: '16px',
  textShadow: '0 1px 0 #8d691e',
})

const FooterBox = styled(Box)({
  width: '40%',
  margin: '0 auto',
  alignItems: 'center',
  textAlign: 'center',
  padding: '8px 16px',
  background: 'white',
  color: 'black',
  marginBottom: '10px',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  '@media (min-width: 300px) and (max-width: 700px)': {
    width: '100%',
    padding: '0px',
  },
  "@media (min-width: 700px) and (max-width: 1100px)": {
    width: "80%",
    padding: '0px'
  },
})