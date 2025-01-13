import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Grid,
  Box,
  Typography,
  Button,
  styled,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import { Data } from "./Data";

const AddtoCart = ({ ids }) => {
  const [addedCart, setAddedCart] = useState([]);
  const [dataShow, setDataShow] = useState(false);

  useEffect(() => {
    if (ids) {
      const items = Data.find((products) => products.id === ids);
      if (items) {
        setAddedCart(items);
        console.log("addto Card data is item", items);
        setDataShow(true);
      }
    }
  }, [ids]);

  useEffect(() => {
    if (addedCart) {
      console.log("addto Card data is traveled", addedCart);    
    }
  }, [addedCart]);

  return (
    <Box>
      <GridItem container spacing={3} p={2}>
        {dataShow ? (
          <Grid item xs={12}>
            <Card sx={{ display: "flex", alignItems: "center", p: "10px" }}>
              <CardMedia
                component="img"
                sx={{ width: 140, height: 150, p: "6px", borderRadius: "12px" }}
                image={addedCart.image}
              />
              <Box sx={{ flex: 1 , p:'1px'}}>
                <CardContent>
                  <Typography gutterBottom>{addedCart.productName}</Typography>
                  <Typography  
                      sx={{
                        marginBottom: 1,
                        fontSize: "0.85rem",
                        "@media (max-width: 600px)": { fontSize: "0.8rem" },
                      }}
                  >  
                  <Rating value={addedCart.rating || 0} size="small" />
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: "green", fontWeight: "bold" }}
                  >
                    ₹ {addedCart.price}
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

                <Button variant="contained" color="success" size="small" 
                     sx={{
                        fontSize: "12px",
                        "@media (max-width: 1300px) and (min-width: 850px)": {
                          fontSize: "11px",
                        },
                        "@media (max-width: 600px)": { fontSize: "11px" },
                        "@media (max-width: 450px)": { fontSize: "9px" },
                      }}
                >
                  Proceed to Buy
                </Button>
                <Button variant="contained" color="error" size="small"
                    sx={{
                        fontSize: "12px",
                        "@media (max-width: 1300px) and (min-width: 850px)": {
                          fontSize: "11px",
                        },
                        "@media (max-width: 600px)": { fontSize: "11px" },
                        "@media (max-width: 450px)": { fontSize: "9px" },
                      }}
                >
                  Remove card
                </Button>
                </CardActions>
              </Box>
            </Card>
          </Grid>
        ) : (
          <Grid item xs={12} >
            <Typography>Your Cart is Empty</Typography>
          </Grid>
        )}
      </GridItem>
    </Box>
  );
};

export default AddtoCart;


const GridItem = styled(Grid)({
  width: "50%",
  "@media (min-width: 300px) and (max-width: 700px)": {
    width: "100%",
  },
  "@media (min-width: 700px) and (max-width: 1200px)": {
    width: "80%",
  },
});
