import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";

const EnvestorModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname:"",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", formData);

    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
    });
    
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      PaperProps={{
        sx: {
          // // width: "600px",
          // margin: "auto",
        
          borderRadius:'20px'
        },
      }}
    >
      <DialogTitle
        id="responsive-dialog-title"
        sx={{ p: "20px", backgroundColor: "#d9faf7", textAlign: "center",  justifyContent: "center", }}
      >
      <b>  Investor Detail Form </b>
      </DialogTitle>
      <DialogContent
        sx={{ backgroundColor: "#e8f5e9", pb: "10px", textAlign: "center" }}
      >
        <TextField
          name="firstname"
          label="First Name"
          variant="outlined"
          value={formData.firstname}
          onChange={handleChange}
          sx={{ m: 2 }}
        />
         <TextField
          name="lastname"
          label="Last Name"
          variant="outlined"
          value={formData.lastname}
          onChange={handleChange}
          sx={{ m: 2 }}
        />
        <TextField
          name="email"
          type="email"
          label="Email"
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
          sx={{ m: 2 }}
        />
        <TextField
          name="phone"
          type="tel"
          label="Phone Number"
          variant="outlined"
          value={formData.phone}
          onChange={handleChange}
          sx={{ m: 2 }}
        />
       
      </DialogContent>
      <DialogActions
  sx={{
    p: "20px",
    backgroundColor: "#e8f5e9",
    textAlign: "center",
    justifyContent: {
      xs: "center", 
      sm: "flex-end", 
    },
    gap: 2, 
    paddingRight: {
      xs: 0, 
      sm: "55px", 
    },
  }}
>
<Button onClick={handleClose} size="large" variant="outlined" color="secondary">
    <b>Cancel</b>
  </Button>
  <Button onClick={handleSubmit} size="large" variant="contained" color="primary">
    <b>Submit</b>
  </Button>
 
</DialogActions>

    </Dialog>
  );
};

export default EnvestorModal;
