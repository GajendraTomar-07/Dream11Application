import { React,useState } from 'react';
import { DialogTitle,
    DialogContent,
    DialogActions,
    Divider,} from "@mui/material";

  import {
    Typography,
    Box,
    Input,
    Select,
    Grid,
    MenuItem,
    styled,
    Stepper,
    Step,
    StepLabel,
    StepIcon,
    Button,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Menu,
    Collapse,
    FormControl,
    InputLabel,
    Autocomplete,
    TextField,
    InputAdornment,
    Popper,
    PopperProps,
    Checkbox,
    ListItemText,
    Dialog,
    FormHelperText,
    List,
    ListItem,
    ListItemIcon,
    OutlinedInput,
    IconButton,
  } from "@mui/material";
  // import CloseIcon from '@material-ui/icons/Close';

// export default function Modal() {
  

const MaterialRatesModal = () => {
  const rows = [
    { task: "Floorboard", material: "18mm Structural Hardwood Plywood Sheet", unit: "m²", cost: 11.4, margin: 10, rate: 12.54 },
    { task: "Timber floor structure", material: "75x200mm C24 joists 400 cts, struts and hangers", unit: "m²", cost: 19.0, margin: 10, rate: 19.8 },
    { task: "Concrete padstone", material: "215x215x102mm", unit: "nr", cost: 20.0, margin: 10, rate: 22.0 },
    { task: "Hopper", material: "Small aluminium powder coated hopper", unit: "nr", cost: 32.0, margin: 10, rate: 35.2 },
    { task: "Waste pipe overground", material: "110mm UPVC pipe", unit: "m", cost: 15.0, margin: 10, rate: 16.5 },
  ];

  const [number, setNumber] = useState("10.00%");
  const [number1,setNumber1] = useState("0.00%");

  const handleChange = (e) => {
    setNumber(e.target.innerText); 
  };
  const handleChangeNumber1 = (e) => {
    setNumber1(e.target.innerText);
  } 

  return (
    <Dialog open={true} maxWidth="lg" fullWidth 
    sx={{
      "& .MuiDialog-paper": {
        borderRadius: "16px",
        padding: "15px", 
      },
    }}
    >
   <Box display="flex" justifyContent="space-between" alignItems="center" px={3} py={1}>
        <Typography variant="h6" sx={{ fontWeight: 700,fontSize:"24px",fontFamily:"Poppins", color:'#0F172A' }}>
          Material Rates
        </Typography>
        <IconButton>
          {/* <CloseIcon /> */}

        </IconButton>
      </Box>
      <DialogContent>
        {/* Margin */}
        <Box mb={2}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body1" sx={{ fontWeight: 600,fontSize:"16px",fontFamily:"Poppins",lineHeight:'24px', fontWeight:600 }}>
              Margin
            </Typography>
            <Box display="flex" alignItems="center" gap={1}>
              {/* <Typography  sx={{ fontWeight: 400,fontSize:"16px",fontFamily:"Poppins",lineHeight:"24px", padding:'10px',borderBottom:'1px solid #CBD5E1' }}>10.00 %</Typography> */}
              <Typography
        contentEditable
        onInput={handleChange} 
        sx={{
          fontWeight: 400,
          fontSize: '16px',
          fontFamily: 'Poppins',
          lineHeight:"24px",
          borderBottom:'1px solid #CBD5E1',
          padding: '4px', 
          outline: 'none', 
          // border: 'none', 
        }}
      >
        {number}
      </Typography>
              
             <Button size="small" variant="text" sx={{ fontWeight: 600,fontSize:"16px",fontFamily:"Poppins",textTransform: "none" ,color:"#237182" }}>
                Apply to All
              </Button>
            </Box>
          </Box>
        </Box>
        {/* Handling Charge */}
        <Box mb={3}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body1"  sx={{ fontWeight: 600,fontSize:"16px",fontFamily:"Poppins",lineHeight:'24px', fontStyle:'normal' }}>
              Handling Charge
            </Typography>
            <Box display="flex" alignItems="center" gap={1}>
             
              {/* <Typography sx={{ fontWeight: 400,fontSize:"16px",fontFamily:"Poppins",padding:'10px',borderBottom:'1px solid var(--Neutrals-Cool-gray-300, #CBD5E1)', width:'108' }}>0.00 %</Typography> */}
              <Typography
        contentEditable
        onInput={handleChangeNumber1} 
        sx={{
          fontWeight: 400,
          fontSize: '16px',
          fontFamily: 'Poppins',
          lineHeight:"24px",
          borderBottom:'1px solid #CBD5E1',
          padding: '4px', 
          outline: 'none', 
          // border: 'none', 
        }}
      >
        {number1}
      </Typography>

              <Button size="small" variant="text" sx={{ fontWeight: 600,fontSize:"16px",fontFamily:"Poppins",textTransform: "none",color:"#237182" }}>
                Apply to All
              </Button>
            </Box>
          </Box>
        </Box>
        {/* Material Rates Table */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: "#EDF5F8",
                }}
              >
                <TableCell sx={{fontFamily:'Poppins',fontSize:'14px',fontStyle:'normal',fontWeight:600,lineHeight:'22px', padding:'8px 16px',width:'272px'}}>Task</TableCell>
                <TableCell sx={{fontFamily:'Poppins',fontSize:'14px',fontStyle:'normal',fontWeight:600,lineHeight:'22px', padding:'8px 16px',width:'263px'}}>Material</TableCell>
                <TableCell sx={{fontFamily:'Poppins',fontSize:'14px',fontStyle:'normal',fontWeight:600,lineHeight:'22px',padding:'8px 16px',width:'77px',textAlign:'center'}}>Unit</TableCell>
                <TableCell sx={{fontFamily:'Poppins',fontSize:'14px',fontStyle:'normal',fontWeight:600,lineHeight:'22px',padding:'8px 16px',width:'108px',textAlign:'center'}}>Cost / Unit</TableCell>
                <TableCell sx={{fontFamily:'Poppins',fontSize:'14px',fontStyle:'normal',fontWeight:600,lineHeight:'22px',padding:'8px 16px',width:'108px',textAlign:'center'}}>Margin</TableCell>
                <TableCell sx={{fontFamily:'Poppins',fontSize:'14px',fontStyle:'normal',fontWeight:600,lineHeight:'22px',padding:'8px 16px',width:'108px',textAlign:'center'}}>Rate</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: index % 2 !== 0 ? "#EDF5F8" : "inherit",
                   
                  }}
                >
                  <TableCell sx={{fontFamily:'Poppins',fontSize:'16px',fontStyle:'normal',fontWeight:'400',lineHeight:'18px', height:'30px', padding:'4px 6px',}}>{row.task}</TableCell>
                  <TableCell sx={{fontFamily:'Poppins',fontSize:'16px',fontStyle:'normal',fontWeight:'400',lineHeight:'18px',height:'30px',padding:'4px 6px',}} >{row.material}</TableCell>
                  <TableCell sx={{fontFamily:'Poppins',fontSize:'16px',fontStyle:'normal',fontWeight:'400',lineHeight:'18px',height:'30px',width:'60px',padding:'4px 6px',textAlign:'center'}}>{row.unit}</TableCell>
                 <TableCell>  
                  <Typography sx={{fontFamily:'Poppins',fontSize:'16px',fontStyle:'normal',fontWeight:'400',lineHeight:'18px',height:'30px',width:'90px',padding:'4px 6px',borderBottom:'1px solid #CBD5E1',textAlign:'center'}}>£ {row.cost.toFixed(2)}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{fontFamily:'Poppins',fontSize:'16px',fontStyle:'normal',fontWeight:'400',lineHeight:'18px',height:'30px',width:'80',padding:'4px 6px',borderBottom:'1px solid #CBD5E1',textAlign:'center'}}>{row.margin.toFixed(2)} %</Typography>
                  </TableCell>
                  <TableCell sx={{fontFamily:'Poppins',fontSize:'16px',fontStyle:'normal',fontWeight:'400',lineHeight:'18px',height:'30px',width:'90',padding:'4px 6px',textAlign:'center'}}>£ {row.rate.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* mt={2} fontStyle="italic" fontSize="0.875rem" color="gray" */}
        {/* <Box sx={{mt:'14px' ,fontFamily:'Poppins',fontSize:'16px',fontStyle:'normal',fontWeight:'600',lineHeight:'22px', color:'#0F172A'}}>    
          Note: Changes only affect this project
        </Box> */}
      </DialogContent>
      
      <DialogActions sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <Box sx={{ fontFamily: 'Poppins', fontSize: '16px', fontStyle: 'normal', fontWeight: '600', lineHeight: '22px', color: '#0F172A',p:'11px' }}>
    Note: Changes only affect this project
  </Box>
  <Box sx={{ display: 'flex', gap: '10px' }}>
    <Button sx={{ fontWeight: 600, fontSize: '16px', fontFamily: 'Poppins', fontStyle: 'normal', padding: '7px 12px', borderRadius: '8px', color: '#325962', bgcolor: '#E0EDF0' }}>
      Close
    </Button>
    <Button sx={{ fontWeight: 600, fontSize: '16px', fontFamily: 'Poppins', fontStyle: 'normal', padding: '7px 12px', borderRadius: '8px', color: '#FFF', bgcolor: '#237182' }}>
      Save & Exit
    </Button>
  </Box>
</DialogActions>

    </Dialog>
   
  
  );
};
export default MaterialRatesModal;
