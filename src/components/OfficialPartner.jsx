import React, { Component } from 'react';
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import LogoBCCI from './partner-bcci-logo.webp';
import LogoPKL from './pkl.webp';
import LogoSA20 from './partner-sa20.webp';
import LogoTata from './partner-tata-wpl.webp';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Winning1 from './winning.webp';
import Winning2 from './winning1.webp';
import Winning3 from './winning2.webp';


export default function OfficialPartner() {
  return (
    <BoxContainer component="section">
      <MainContainer>
        <Text variant="h6">
          <b>Official</b> <b className='Header-clr'>Partner</b>
        </Text>

        <GridContainer container spacing={2}>
          <Grid item sm={3}>
            <img src={LogoBCCI} className='img-logo' />
          </Grid>
          <Grid item sm={3}>
            <img src={LogoPKL} className='img-logo' />
          </Grid>
          <Grid item sm={3}>
            <img src={LogoSA20} className='img-logo' />
          </Grid>
          <Grid item sm={3}>
            <img src={LogoTata} className='img-logo' />
          </Grid>
        </GridContainer>
      </MainContainer>

      <Text variant="h6">
        <strong>It's easy to start playing </strong> <b className='Header-clr'>on Dream11</b>
      </Text>

      <div className='div-txt'>
        <Typography variant="subtitle2">
          <b>Play <a className='hrefTxt' href='#'>Fantasy Cricket</a> on Dream11 and win big!</b>
        </Typography>
      </div>

      <ParaTxt variant="body2" sx={{ opacity: '0.6' }}>
        Enter into the thrilling world of Fantasy sports, a strategy-based online
        sports game wherein you can create a virtual team of real players playing in
        real life matches. Create your team to win points based on all the players'
        performance in a live game.
      </ParaTxt>
      <br /><br />

      <GridContainer1 container spacing={2}>
        <Grid item xs={12} sm={4}>
          <CardContainer>
            <CardContent>
              <span className='step-number'>1</span>
              <div>
                <div className='div-head'>
                  <Typography variant="subtitle1">
                    <b>Select A Match</b>
                  </Typography>
                </div>
                <div>
                  <img src={Winning1} className='logo' />
                </div>
                <Typography variant="caption">
                  Choose an upcoming match that you want to play
                </Typography>
              </div>
            </CardContent>
          </CardContainer>
        </Grid>
        <Grid item xs={12} sm={4}>
          <CardContainer>
            <CardContent>
              <span className='step-number'>2</span>
              <div>
                <div className='div-head'>
                  <Typography variant="subtitle1">
                    <b>Create Team</b>
                  </Typography>
                </div>
                <div>
                  <img src={Winning2} className='logo' />
                </div>
                <Typography variant="caption">
                  Use your skills to pick the right players
                </Typography>
              </div>
            </CardContent>
          </CardContainer>
        </Grid>
        <Grid item xs={12} sm={4}>
          <CardContainer>
            <CardContent>
              <span className='step-number'>3</span>
              <div>
                <div className='div-head'>
                  <Typography variant="subtitle1">
                    <b>Join Contests</b>
                  </Typography>
                </div>
                <div>
                  <img src={Winning3} className='logo' />
                </div>
                <Typography variant="caption">
                  Choose between different contests and compete
                </Typography>
              </div>
            </CardContent>
          </CardContainer>
        </Grid>
      </GridContainer1>

    </BoxContainer>
  )
}


const BoxContainer = styled(Box)({
  background: 'linear-gradient(180deg, #fff2f2 0, rgba(255, 237, 237, 0) 77.72%);',
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
  padding: '30px 0px',
  '@media (min-width: 300px) and (max-width: 800px)': {
    width: '100%',
  }
})

const MainContainer = styled(Container)({
  width: '45%',
  margin: '0 auto',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  '@media (min-width: 300px) and (max-width: 800px)': {
    width: '100%',
  }
})

const GridContainer = styled(Grid)({
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  padding: 0,
  marginBottom: '40px',
  fontFamily: 'robotobold',
})

const GridContainer1 = styled(Grid)({
  width: '85%',
  margin: '0 auto',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  padding: 0,
  marginBottom: '40px',
  fontFamily: 'robotobold',
})

const ParaTxt = styled(Typography)({
  margin: '20px 0px',
  fontFamily: 'robotomedium',
  width: '70%',
  margin: '20px auto',
  fontSize: '16px',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  '@media (min-width: 300px) and (max-width: 800px)': {
    width: '100%',
  }
})

const CardContainer = styled(Card)({
  width: '100%',
  background: 'linear-gradient(to right, #eee 0, #fff 50%, #eee 100%)',
  border: '1px solid #dadada',
  borderRadius: '8px',
  fontFamily: 'robotobold',
  textAlign: 'left',
  position: 'relative',
  overflow: 'visible',
  '@media (min-width: 300px) and (max-width: 800px)': {
   marginBottom: '30px'
  }
})