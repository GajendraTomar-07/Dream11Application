
// import { Grid, Box, Typography, TextField,  Button, List, ListItemButton,
//     ListItem,
//     ListItemText,
//     ListItemIcon,ListItemSecondaryAction,
//     styled, } from '@mui/material'
// import { React ,useState } from 'react'
// import InboxIcon from '@mui/icons-material/Inbox';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import AxiosInstance from './api/AxiosInstance';


// const RazorpayPage = () => {
//   const [activeSection, setActiveSection] = useState("Cards");


//   const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

//   return (
//     <>
  
//     {/* <BoxContainer>

//               <Box sx={{height:'80vh', width:'70%', bgcolor:'grey', margin: '10px auto',display:'flex',borderRadius:'17px' }}>
//                 <Box sx={{padding:'15px',}}>
//                  <Typography gutterBottom>Gajendra Company</Typography>            
//                  </Box>
                
//                  <Box
//             sx={{
//               bgcolor: "white",
//               width: "72%",
//               borderRadius: "10px",
//               display: "flex",
//               float: 'right',
//               flexDirection: "column",
//               padding: "0px",
//               // gap: "1px",
//               margin:'10px 0px 10px 80px'
//             }}
//           >
//             <Typography
//               variant="h6"
//               sx={{
//                 textAlign: "center",
//                 borderBottom: "1px solid grey",
//                 padding: "8px",
//               }}
//             >
//               Payment Options
//             </Typography>

//             <Box
//               sx={{
//                 display: "flex",
//                 gap: "0px",
//                 flex: 1,
//               }}
//             >
//               <Box
//                 sx={{
//                   width: "34%",
//                   bgcolor: "#f0f0f0",
//                   borderRadius: "3px",
//                   padding: "8px",
//                 }}
//               >
             
//                  <List >
//               <ListItem
//                 button
//                 sx={{
//                   py: "10px",
//                   cursor: "pointer",
//                   bgcolor: activeSection === "Cards" ? "white" : "transparent",
//                   ":hover":{ bgcolor:'white'}
//                 }}
//                 onClick={() => setActiveSection("Cards")}
//               >
//                 <ListItemText primary="Cards" />
               
//               </ListItem>
//               <ListItem
//                 button
//                 sx={{
//                   py: "10px",
//                   cursor: "pointer",
//                   bgcolor: activeSection === "Netbanking" ? "white" : "transparent" ,
//                   ":hover":{ bgcolor:'white'}
//                 }}
//                 onClick={() => setActiveSection("Netbanking")}
//               >
//                 <ListItemText primary="Netbanking" />
               
//               </ListItem>
//               <ListItem
//                 button
//                 sx={{
//                   py: "10px",
//                   cursor: "pointer",
//                   bgcolor: activeSection === "Wallet" ? "white" : "transparent",
//                   ":hover":{ bgcolor:'white'}
//                 }}
//                 onClick={() => setActiveSection("Wallet")}
//               >
//                 <ListItemText primary="Wallet" />
                
//               </ListItem>
//               <ListItem
//                 button
//                 sx={{
//                   py: "10px",
//                   cursor: "pointer",
//                   bgcolor: activeSection === "Pay Later" ? "white" : "transparent",
//                   ":hover":{ bgcolor:'white'}
//                 }}
//                 onClick={() => setActiveSection ("Pay Later")}
//               >
//                 <ListItemText primary="Pay Later" />
               
//               </ListItem>
//               </List> 
//               </Box>

//               <Box
//                 sx={{
//                   flex: 1,
//                   borderRadius: "13px",
//                 }}
//               > 
//               {activeSection === "Cards" && (
//               <Box sx={{padding:'30px'}}>
//                 <Typography sx={{paddingBottom:'17px'}}>Add a new card</Typography>
//                 <TextField  placeholder="Card Number" variant="outlined" fullWidth  />
//                 <TextField  placeholder="MM/YY" variant="outlined" style={{ width: '189px' }}/>
//                 <TextField  placeholder="CVV" variant="outlined" style={{ width: '188px' }} />
//                 <TextField  placeholder="Enter name on card" variant="outlined" fullWidth/>
//                 <FormControlLabel sx={{paddingTop:'20px'}} required control={<Checkbox />} label="Save this card as per RBI guidelines" />
//                 <Button variant="contained" fullWidth size="medium" sx={{mt:'20px'}}>Continue</Button>
//                 </Box>
//                 )}

//            {activeSection === "Netbanking" && (
//                <Box sx={{padding:'25px'}}>
//                   <TextField
//                 placeholder="Search for Banks"
//                 variant="outlined"
//                 fullWidth
//                 sx={{
//                   '& .MuiInputBase-input': {
//                     height: "1em", 
//                   },
//                 }}
//               />
//                <Typography sx={{paddingBottom:'14px', paddingTop:'17px'}}>Suggested Banks</Typography>
              
//                <List sx={{border:'1px solid black', borderRadius:'10px'}}>
//           <ListItem  sx={{ borderBottom: "1px solid black", padding:'0px'}}>
//             <ListItemButton>
//               <ListItemIcon>
//                 <InboxIcon />
//               </ListItemIcon>
//               <ListItemText primary="Mobikwik" />
//             </ListItemButton>
//             <ListItemSecondaryAction>
//                   <ArrowForwardIosIcon sx={{ color: "black", fontSize:'15px' }} />
//                 </ListItemSecondaryAction>
//           </ListItem>
//           <ListItem  sx={{ borderBottom: "1px solid black", padding:'0px'}}>
//             <ListItemButton>
//               <ListItemIcon>
//                 <InboxIcon />
//               </ListItemIcon>
//               <ListItemText primary="Airtel Payment Bank" />
//             </ListItemButton>
//             <ListItemSecondaryAction>
//                   <ArrowForwardIosIcon sx={{ color: "black", fontSize:'15px' }} />
//                 </ListItemSecondaryAction>
//           </ListItem>
//           <ListItem  sx={{ borderBottom: "1px solid black", padding:'0px'}}>
//             <ListItemButton>
//               <ListItemIcon>
//                 <InboxIcon />
//               </ListItemIcon>
//               <ListItemText primary="Ola Money" />
//             </ListItemButton>
//             <ListItemSecondaryAction>
//                   <ArrowForwardIosIcon sx={{ color: "black", fontSize:'15px' }} />
//                 </ListItemSecondaryAction>
//           </ListItem>
//           <ListItem  sx={{ borderBottom: "1px solid black", padding:'0px'}}>
//             <ListItemButton>
//               <ListItemIcon>
//                 <InboxIcon />
//               </ListItemIcon>
//               <ListItemText primary="JioMoney" />
//             </ListItemButton>
//             <ListItemSecondaryAction>
//                   <ArrowForwardIosIcon sx={{ color: "black", fontSize:'15px' }} />
//                 </ListItemSecondaryAction>
//           </ListItem>
//           <ListItem  sx={{ padding:'0px'}}>
//             <ListItemButton>
//               <ListItemIcon>
//                 <InboxIcon />
//               </ListItemIcon>
//               <ListItemText primary="Freecharge" />
//             </ListItemButton>
//             <ListItemSecondaryAction>
//                   <ArrowForwardIosIcon sx={{ color: "black", fontSize:'15px' }} />
//                 </ListItemSecondaryAction>
//           </ListItem>
//           </List>
//                </Box>
//                 )}

//                {activeSection === "Wallet" && (
//                <Box sx={{padding:'30px'}}>
//                <Typography sx={{paddingBottom:'17px'}}>All Wallet Options</Typography>
              
//                <List sx={{border:'1px solid black', borderRadius:'10px'}}>
//           <ListItem  sx={{ borderBottom: "1px solid black", padding:'0px'}}>
//             <ListItemButton>
//               <ListItemIcon>
//                 <InboxIcon />
//               </ListItemIcon>
//               <ListItemText primary="Mobikwik" />
//             </ListItemButton>
//             <ListItemSecondaryAction>
//                   <ArrowForwardIosIcon sx={{ color: "black", fontSize:'15px' }} />
//                 </ListItemSecondaryAction>
//           </ListItem>
//           <ListItem  sx={{ borderBottom: "1px solid black", padding:'0px'}}>
//             <ListItemButton>
//               <ListItemIcon>
//                 <InboxIcon />
//               </ListItemIcon>
//               <ListItemText primary="Airtel Payment Bank" />
//             </ListItemButton>
//             <ListItemSecondaryAction>
//                   <ArrowForwardIosIcon sx={{ color: "black", fontSize:'15px' }} />
//                 </ListItemSecondaryAction>
//           </ListItem>
//           <ListItem  sx={{ borderBottom: "1px solid black", padding:'0px'}}>
//             <ListItemButton>
//               <ListItemIcon>
//                 <InboxIcon />
//               </ListItemIcon>
//               <ListItemText primary="Ola Money" />
//             </ListItemButton>
//             <ListItemSecondaryAction>
//                   <ArrowForwardIosIcon sx={{ color: "black", fontSize:'15px' }} />
//                 </ListItemSecondaryAction>
//           </ListItem>
//           <ListItem  sx={{ borderBottom: "1px solid black", padding:'0px'}}>
//             <ListItemButton>
//               <ListItemIcon>
//                 <InboxIcon />
//               </ListItemIcon>
//               <ListItemText primary="JioMoney" />
//             </ListItemButton>
//             <ListItemSecondaryAction>
//                   <ArrowForwardIosIcon sx={{ color: "black", fontSize:'15px' }} />
//                 </ListItemSecondaryAction>
//           </ListItem>
//           <ListItem  sx={{ padding:'0px'}}>
//             <ListItemButton>
//               <ListItemIcon>
//                 <InboxIcon />
//               </ListItemIcon>
//               <ListItemText primary="Freecharge" />
//             </ListItemButton>
//             <ListItemSecondaryAction>
//                   <ArrowForwardIosIcon sx={{ color: "black", fontSize:'15px' }} />
//                 </ListItemSecondaryAction>
//           </ListItem>
//           </List>
//                </Box>
//   )}

// {activeSection === "Pay Later" && (
//                <Box sx={{padding:'30px'}}>
//                <Typography sx={{paddingBottom:'15px'}}>Pay Later</Typography>
              
//                <List sx={{border:'1px solid black', borderRadius:'10px'}}>
//           <ListItem  sx={{ borderBottom: "1px solid black", padding:'0px'}}>
//             <ListItemButton>
//               <ListItemIcon>
//                 <InboxIcon />
//               </ListItemIcon>
//               <ListItemText primary="LazyPay" />
//             </ListItemButton>
//             <ListItemSecondaryAction>
//                   <ArrowForwardIosIcon sx={{ color: "black", fontSize:'15px' }} />
//                 </ListItemSecondaryAction>
//           </ListItem>
//           <ListItem  sx={{ borderBottom: "1px solid black", padding:'0px'}}>
//             <ListItemButton>
//               <ListItemIcon>
//                 <InboxIcon />
//               </ListItemIcon>
//               <ListItemText primary="ICICI" />
//             </ListItemButton>
//             <ListItemSecondaryAction>
//                   <ArrowForwardIosIcon sx={{ color: "black", fontSize:'15px' }} />
//                 </ListItemSecondaryAction>
//           </ListItem>
//           <ListItem  sx={{ borderBottom: "1px solid black", padding:'0px'}}>
//             <ListItemButton>
//               <ListItemIcon>
//                 <InboxIcon />
//               </ListItemIcon>
//               <ListItemText primary="ePayLater" />
//             </ListItemButton>
//             <ListItemSecondaryAction>
//                   <ArrowForwardIosIcon sx={{ color: "black", fontSize:'15px' }} />
//                 </ListItemSecondaryAction>
//           </ListItem>
//           <ListItem  sx={{ borderBottom: "1px solid black", padding:'0px'}}>
//             <ListItemButton>
//               <ListItemIcon>
//                 <InboxIcon />
//               </ListItemIcon>
//               <ListItemText primary="Kotak Mahindra Bank" />
//             </ListItemButton>
//             <ListItemSecondaryAction>
//                   <ArrowForwardIosIcon sx={{ color: "black", fontSize:'15px' }} />
//                 </ListItemSecondaryAction>
//           </ListItem>
//           <ListItem  sx={{ padding:'0px'}}>
//             <ListItemButton>
//               <ListItemIcon>
//                 <InboxIcon />
//               </ListItemIcon>
//               <ListItemText primary="Amazon Pay Later" />
//             </ListItemButton>
//             <ListItemSecondaryAction>
//                   <ArrowForwardIosIcon sx={{ color: "black", fontSize:'15px' }} />
//                 </ListItemSecondaryAction>
//           </ListItem>
//           </List>
//                </Box>
//   )}
//               </Box>
//             </Box>
//           </Box>

//               </Box>
       
//         </BoxContainer> */}
   


      
//     </>
//   )
// }

// export default RazorpayPage

// // const BoxContainer = styled(Box)({
// //     width: '100%',
// //     margin: '0 auto',
// //     alignContent:'center'
// // })

 import { React ,useState } from 'react'
 import AxiosInstance from './api/AxiosInstance';
 import axios from 'axios';


const RazorpayPage = () => {

  const handlePayment = async () => {
    try {
      const response = await axios.post('url', {
        amount: 500, 
      });  

      const { id: order_id, amount, currency } = response.data;
                        
      // Step 2: Razorpay checkout options
      const options = {
        key: 'rzp_test_2gBIK6S2FByn8l', 
        key_secret: 'QMIhp3ayZir2LvDDZI2bG0c', 
        amount: amount.toString(),
        currency: currency,
        
        name: 'Your Company Name',
        description: 'Test Transaction',
        order_id: order_id,
        handler: async function (response) {
          alert('Payment successful!');
          console.log(response);
        },
        prefill: {
          name: 'Gajendra Singh Tomar',
          email: 'gajendra@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#3399cc',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

      console.log(response.data)
    } catch (error) {
      console.error('Payment Error:', error);
    }
  };

  return (
    <div>
      <button onClick={handlePayment}>Pay with Razorpay</button>
    </div>
  );
}
export default RazorpayPage;