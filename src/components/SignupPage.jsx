import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import GIFLogin from '../assets/output-onlinegiftools1.gif';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";


export default function SignupPage() {
  return (
    <BoxContainer>
      <GridContent container spacing={2}>
        {/* <Grid item sm={6}>
          <img src={GIFLogin} className='login-img' />
        </Grid> */}
        <Grid item sm={6}>
          <Typography variant="h4">
            Signup Form
          </Typography>
          <br /><br />
          <TextField id="outlined-basic" type='text' fullWidth label="Name" variant="outlined" /><br /><br />
          <TextField id="outlined-basic" type='text' fullWidth label="Email" variant="outlined" /><br /><br />
          <TextField id="outlined-basic" type='text' fullWidth label="Phone Number" variant="outlined" /><br /><br />
          <TextField id="outlined-basic" type='password' fullWidth label="Password" variant="outlined" /><br /><br />
          <TextField id="outlined-basic" type='password' fullWidth label="Confirm Password" variant="outlined" /><br /><br />
          <Btn><b>Submit</b></Btn>
        </Grid>
      </GridContent>
    </BoxContainer>
  )
}


const BoxContainer = styled(Box)({
  height: '95vh',
  background: 'linear-gradient(to top right,rgb(107, 189, 107) 0%, #ccff99 100%)',
  padding: '15px',
  '@media (min-width: 300px) and (max-width: 800px)': {
    height: 'auto',
    padding: '10px 0px 10px 0px',
  }
})

const GridContent = styled(Grid)({
  width: '50%',
  margin: '0 auto',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  background: 'white',
  borderRadius: '20px',
  padding: '20px',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  backgroundColor: 'rgb(250, 247, 247)',
  '@media (min-width: 300px) and (max-width: 800px)': {
    width: 'auto',
    margin: '20px',
  }
})

const Btn = styled(Button)({
  textTransform: 'none',
  color: 'white',
  background: 'linear-gradient(to top right, #00ff00 0%, #ccff99 100%)',
  // color: 'black',
  padding: '10px 50px',
  fontSize: '16px'
})