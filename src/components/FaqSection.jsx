import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import FooterPage from './FooterPage';

export default function FaqSection() {

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {

    },
    '&::before': {
      display: 'none',
    },
  }));


  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ExpandMoreIcon sx={{ color: 'black' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, .03)',
  }));



  return (
    <>

      <Box sx={{ width: 'auto', display: 'flex', justifyContent: 'center', px: 2, }}>

        <div style={{ margin: '50px 10px', maxWidth: '600px', }}>
          <Typography variant='h5' fontWeight='bold' m='10px' textAlign='center'>FAQs</Typography>
          <Accordion sx={{ margin: '16px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'black' }} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography >What is Fantasy sports</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Fantasy sports is a strategy-based online sports game where you can create a virtual team of real players, playing in live matches worldwide. You earn points and win    </Typography>
            </AccordionDetails>
          </Accordion >
          <Accordion sx={{ margin: '16px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'black' }} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Is it safe to add money</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography >
                What's more? After you verify your personal details, you can withdraw the money that you win on Dream11 directly to your bank account. </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ margin: '16px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'black' }} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>How are Dream11 points</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography >
                Dream11 points system is calculated on the basis of the performance of the player in an actual match.  </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ margin: '16px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'black' }} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>When do I get Winnings</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography >
                A successfully processed withdrawal request via IMPS should get credited almost instantly or within 3 working days. NEFT should get credited within 3 working days </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ margin: '16px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'black' }} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>How do I use the Dream11</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography >
                1.Go to ‘Rewards’ at the bottom right corner
                <br />
                2.Click on ‘My Rewards’ and tap on ‘Have a discount coupon code?’
                <br />
                3. Enter your code, tap ‘Apply now'
                <br />
                4. Enter any contest and enjoy your discount
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ margin: '16px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'black' }} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>How should I Download the Dream11 app</Typography>
            </AccordionSummary>
            <AccordionDetails>

              <Typography>
                1. Select the match
                <br />
                2. Pay entry fee and join contests
                <br />
                3. Put your skills to test and create your Fantasy team
                <br />
                4. Check the real-time leaderboard while you watch the match LIVE
              </Typography>

            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ margin: '16px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'black' }} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Which type of contest can I join</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography >
                Select your favourite sport, click on a match from that sport, create your Dream11 and join any public, private, head-to-head or mega contests.  </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ margin: '16px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'black' }} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>How to Play on Dream11 App</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography >
                1. Head to www.dream11.com on your desktop or mobile browser
                <br />
                2. If you're an iOS user, you can also search for ‘Dream11’ in the App Store and download the app
                <br />
                3. Put your skills to test and create your Fantasy team
                <br />
              </Typography>
            </AccordionDetails>
          </Accordion>

        </div>
      </Box>
      <FooterPage />
    </>
  );
}