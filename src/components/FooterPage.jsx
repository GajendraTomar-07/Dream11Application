import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppLogo from './footer_logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FooterImg1 from './fifs_footer.webp';
import FooterImg2 from './fp-logo.webp';


export default function FooterPage() {
  return (
    <BoxContainer>
      <GridContent container spacing={2}>
        <Grid item sm={4}>
          <img src={AppLogo} className='app-logo' />
          <br />
          <Btn><FacebookIcon /></Btn>
          <Btn><TwitterIcon /></Btn>
          <Btn><LinkedInIcon /></Btn>
          <Btn><YouTubeIcon /></Btn>
          <Btn><InstagramIcon /></Btn>
          <Btn1><TelegramIcon /></Btn1>
        </Grid>
        <p className='border-bottom-p1'></p>
        <Grid item sm={2}>
          <Typography variant="subtitle2">
            <b>Fantasy Cricket</b>
          </Typography>
          <br />
          <Typography variant="subtitle2">
            <b>Fantasy Football</b>
          </Typography>
          <br />
          <Typography variant="subtitle2">
            <b>Fantasy Sports</b>
          </Typography>
          <br />
          <Typography variant="subtitle2">
            <b>How to play</b>
          </Typography>
          <br />
          <Typography variant="subtitle2">
            <b>Fantasy Cricket app Download</b>
          </Typography>
          <br />
          <Typography variant="subtitle2">
            <b>Dream11 Team Today</b>
          </Typography>
          <br />
          <Typography variant="subtitle2">
            <b>Security Vulnerability Disclosure Program</b>
          </Typography>
          <br />
        </Grid>
        <Grid item sm={2}>
          <Typography variant="subtitle2">
            <b>Dream11 Winners</b>
          </Typography>
          <br />
          <Typography variant="subtitle2">
            <b>Private Contest</b>
          </Typography>
          <br />
          <Typography variant="subtitle2">
            <b>About Us</b>
          </Typography>
          <br />
          <Typography variant="subtitle2">
            <b>Jobs</b>
          </Typography>
          <br />
          <Typography variant="subtitle2">
            <b>Help & Support</b>
          </Typography>
          <br />
          <Typography variant="subtitle2">
            <b>Community Guidelines</b>
          </Typography>
          <br />
          <Typography variant="subtitle2">
            <b>Dream11 Tech</b>
          </Typography>
          <br />
          <Typography variant="subtitle2">
            <b>Sitemap</b>
          </Typography>
          <br />
        </Grid>
        <p className='vertical-tag2'></p>
        <p className='border-bottom-p1'></p>
        <Grid item sm={3} sx={{ textAlign: 'center' }}>
          <Typography variant="subtitle">
            FOUNDING MEMBER
            <br />
            <img src={FooterImg1} className='app-logo1' />
          </Typography>
          <Typography variant="subtitle2">
            FAIRPLAY POLICY
            <br />
            <img src={FooterImg2} className='app-logo1' />
          </Typography>
        </Grid>
      </GridContent>
      <p className='border-bottom-p'></p>
      <br />
      <AddressBox>
        <Typography variant="button">
          CORPORATE OFFICE
        </Typography>
        <Typography variant="body2" >
          ONE BKC, Tower A, 12th & 14th Floor, Unit 1201 & 1202 and 1401 & 1402, Plot C-66,
          G Block, Bandra Kurla Complex, Bandra (East), Mumbai 400 051
        </Typography>
      </AddressBox>

      <AddressBoxPolicy>
        <Typography variant="subtitle1" >
          <b className='align-policy-tag'>Privacy Policy</b>
          <p className='vertical-tag'></p>
          <b className='align-policy-tag'>Terms & Conditions</b>
        </Typography>
      </AddressBoxPolicy>

      <GuidlineBox>
        <Typography variant="body2">
          This game may be habit-forming or financially risky. Play responsibly.
        </Typography>
      </GuidlineBox>

    </BoxContainer>
  )
}

const BoxContainer = styled(Box)({
  background: '#373737',
  color: 'white',
})

const GridContent = styled(Grid)({
  width: '100%',
  margin: '0 auto',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '30px 10px',
})

const Btn = styled(Button)({
  backgroundColor: 'white',
  color: '#373737',
  borderRadius: '50px',
  padding: '5px',
  margin: '10px 3px',
  textTransform: 'none'
})

const Btn1 = styled(Button)({
  backgroundColor: 'white',
  color: '#373737',
  borderRadius: '50px',
  padding: '5px',
  margin: '10px 3px',
  textTransform: 'none',
  '@media (min-width: 300px) and (max-width: 800px)': {
    display: 'none',
  }
})

const AddressBox = styled(Box)({
  margin: '0 auto',
  alignItems: 'center',
  textAlign: 'center',
  paddingBottom: '10px'
})

const AddressBoxPolicy = styled(Box)({
  margin: '0 auto',
  alignItems: 'center',
  textAlign: 'center',
  padding: '20px 0px',
  backgroundColor: '#282828',
})

const GuidlineBox = styled(Box)({
  margin: '0 auto',
  alignItems: 'center',
  textAlign: 'center',
  padding: '20px',
  backgroundColor: 'white',
  color: 'black',
})