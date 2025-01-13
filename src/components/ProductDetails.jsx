import React, { useState, useEffect } from "react";
import { Grid, Box, useMediaQuery, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { Data } from "./Data";
import { useParams, useNavigate } from "react-router-dom";
import AddtoCart from "./AddtoCart";

const ProductDetails = ({ data }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isSmallScreen = useMediaQuery("(max-width:850px)");
  const isExtraSmallScreen = useMediaQuery("(max-width:600px)");
  const [selectedData, setSelectedData] = useState([]);
  const [cart,setCart] = useState(false);
  const [ids,setIds] = useState(null);

  // const product = Data.find((item) => item.id === parseInt(id));

  useEffect(() => {
    if (data) {
      const item = Data.find((product) => product.id === data);
      if (item) {
        setSelectedData(item);
        console.log("selected Data",item)
        setIds(item.id);
      }
    }
  }, [data]);

  // useEffect(() => {
    // if (selectedData) {
      // setHide(show);
    // }
  // }, [selectedData]);

  useEffect(() => {
    if (isSmallScreen) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [isSmallScreen]);

  const handleAddToCart = () => {
    setCart(true);
  };

  return (
    <>
    { !cart ? 
    <Grid container sx={{justifyContent:'center'}}>
      <Grid >
        <Card
          sx={{
            display: "flex",
            alignItems: "center", 
            margin: "20px",
            padding: "15px",
            marginTop: "20px",
            ":hover": { boxShadow: 7 },
            flexDirection: isSmallScreen || isExtraSmallScreen ? "column" : "row",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: isExtraSmallScreen ? "100%" : isSmallScreen ? "100%" : "400px",
              height: isExtraSmallScreen ? "auto" : isSmallScreen ? "auto" : "400px",
              borderRadius: "12px",
              padding: "3px",
              marginBottom: isSmallScreen || isExtraSmallScreen ? "0px" : "0",
              "@media (max-width: 1110px) and (min-width: 850px)": {
                width: "100%",
                height: 350,
              },
              "@media (max-width: 600px)": {
                width: "90%",
                height: "auto",
              },
            }}
            image={selectedData.image}
            title="Product Image"
          />
          <Box sx={{ padding: "10px", width: "100%" }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  marginBottom: "10px",
                  fontWeight: "bold",
                  fontSize: isSmallScreen || isExtraSmallScreen ? "16px" : "18px",
                  "@media (max-width: 1110px) and (min-width: 850px)": {
                    fontSize: "15px",
                  },
                }}
              >
                {selectedData.productName}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginBottom: "10px",
                  display: "flex",
                  gap: "11px",
                  "@media (max-width: 1110px) and (min-width: 850px)": {
                    fontSize: "14px",
                  },
                }}
              >
                <Rating name="size-small" value={selectedData.rating || 0} readOnly size="small" />
                <Typography sx={{ color: "#083e6a", fontSize: "13px", fontWeight: "bold" }}>
                  {selectedData.rating || 0} ratings
                </Typography>
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "green",
                  fontWeight: "bold",
                  fontSize: isSmallScreen || isExtraSmallScreen ? "1rem" : "1.2rem",
                  marginBottom: "10px",
                }}
              >
                ₹ {selectedData.price || "N/A"}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: isSmallScreen || isExtraSmallScreen ? "16px" : "17px",
                  "@media (max-width: 1110px) and (min-width: 850px)": {
                    fontSize: "14px",
                  },
                }}
              >
                About this item
              </Typography>
              <Typography
                sx={{
                  fontSize: isSmallScreen || isExtraSmallScreen ? "14px" : "16px",
                  "@media (max-width: 1110px) and (min-width: 850px)": {
                    fontSize: "12px",
                  },
                }}
              >
                <ul>
                  <li>Go to ‘Rewards’ at the bottom right corner</li>
                  <li>Click on ‘My Rewards’ and tap on ‘Have a discount coupon code?’</li>
                  <li>Enter your code, tap ‘Apply now’</li>
                  <li>Enter any contest and enjoy your discount</li>
                </ul>
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                gap: "8px",
                "@media (max-width: 1110px) and (min-width: 850px)": {
                  flexDirection: "row",
                },
              }}
            >
              <Button
                variant="contained"
                color="success"
                size="small"
                sx={{ fontSize: isSmallScreen || isExtraSmallScreen ? "14px" : "15px" }}
              >
                Order
              </Button>
              <Button
                variant="contained"
                color="success"
                size="small"
                sx={{ fontSize: isSmallScreen || isExtraSmallScreen ? "14px" : "15px" }}
                  onClick={handleAddToCart}    >
                Add to Cart
              </Button>
            </CardActions>
          </Box>
        </Card>
      </Grid>
    </Grid>
    :
     <AddtoCart ids={ids}/>
     }
    </>
  );
};

export default ProductDetails;
