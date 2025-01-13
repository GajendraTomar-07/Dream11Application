import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { Box, Grid } from "@mui/material";
import styled from "@mui/system/styled";
import { Link, useNavigate } from "react-router-dom";
import { Data } from "./Data";
import ProductDetails from "./ProductDetails";
import Products from "./Products";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';


const ProductCard = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const [show ,setShow] = useState(true);

  const handleNavigation = (id) => {
    setData(id);
    setShow(false);
  };

  const handleBack = () =>{
    setShow(true);
  }

  useEffect(()=>{
    if(data !== null){
      console.log("selected item",data);
    }
  },[data]);

  return (  
    <>
    { !show ? <>
    <IconButton onClick={handleBack}><ArrowBackIcon/></IconButton>
    <ProductDetails data={data}/></> :
    <StyleBox>
        <Grid container spacing={3}  p={1}>
          {Data.map((item) => (
            <Grid item xs={12} sm={6} md={4}  key={item.id}>
              {/* <Link */}
              {/* to={`/ProductDetails/${product.id}`} */}
              {/* style={{ textDecoration: "none" }} */}
              {/* > */}
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  // p: "0px",
                  ":hover": { boxShadow: 7 },
                  "@media (max-width: 1200px) and (min-width: 850px)": {
                    flexDirection: "column", 
                    alignItems: "stretch",
                    p:'0px'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: 130,
                    height: 140,
                    p: "5px",
                    borderRadius: "12px",
                    "@media (max-width: 1300px) and (min-width: 850px)": {
                      width: 110,
                      height: 120,
                    },
                    "@media (max-width: 600px)": { width: 100, height: 120 },
                    "@media (max-width: 1200px) and (min-width: 850px)":{
                      width:"auto",
                      p:'8px',
                      borderRadius: "20px",
                    }
                    
                  }}
                  image={item.image}
                  title={item.productName} />
                <Box sx={{ flex: 1 }}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      component="div"
                      sx={{
                        fontSize: "1rem",
                        "@media (max-width: 600px)": { fontSize: "0.9rem" },
                        "@media (max-width: 375px)": { fontSize: "0.7rem" },
                      }}
                    >
                      {item.productName}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        marginBottom: 1,
                        fontSize: "0.85rem",
                        "@media (max-width: 600px)": { fontSize: "0.8rem" },
                      }}
                      >
                      <Rating
                        name={`rating-${item.id}`}
                        value={item.rating}
                        readOnly
                        size="small" />
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "green",
                        fontWeight: "bold",
                        fontSize: "1rem",
                        "@media (max-width: 600px)": { fontSize: "0.9rem" },
                      }}
                    >
                      ₹ {item.price}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      gap: "6px",
                      "@media (max-width: 600px)": {
                        flexDirection: "row",
                        alignItems: "stretch",
                      },
                      "@media (max-width: 1300px) and (min-width: 850px)": {
                        gap: "1px",
                      },
                    }}
                  >
                    <Button
                      variant="outlined"
                      color="success"
                      size="small"
                      sx={{
                        fontSize: "12px",
                        "@media (max-width: 1300px) and (min-width: 850px)": {
                          fontSize: "11px",
                        },
                        "@media (max-width: 600px)": { fontSize: "11px" },
                        "@media (max-width: 450px)": { fontSize: "9px" },
                      }}
                    >
                      Order
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      sx={{
                        fontSize: "12px",
                        "@media (max-width: 1300px) and (min-width: 850px)": {
                          fontSize: "11px",
                        },
                        "@media (max-width: 600px)": { fontSize: "11px" },
                        "@media (max-width: 450px)": { fontSize: "9px" },
                      }}
                      onClick={() => handleNavigation(item.id)}
                    >
                      View Cart
                    </Button>
                  </CardActions>
                </Box>
              </Card>
        </Grid>
             ))}
      </Grid>
      </StyleBox>
    } 
      </>

  );
};

export default ProductCard;

const StyleBox = styled(Box)({
  marginTop: 0,
  bgcolor: "#F0F0F0",
  // display: "flex",
  // flexDirection: "column",
  "@media (max-width: 1100px)": {
    marginLeft: "0px",
    padding: "10px",
  },
  "@media (max-width: 600px)": {
    // flexDirection: "column",
    alignItems: "center",
  },
  
});
