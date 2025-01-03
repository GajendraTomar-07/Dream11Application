import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { Box, Grid } from "@mui/material";
import CardImg from "../assets/pexelImg1.webp";
import styled from "@mui/system/styled";

const ProductCard = () => {
  return (
    <>
      <StyleBox>
        <Grid container spacing={3} justifyContent="center" p={2}>
          {Array(6) // Replace 6 with the dynamic number of cards if needed
            .fill(null)
            .map((_, index) => (
              <Grid
                item
                xs={12} // Full-width on phones
                sm={6} // Two cards per row on tablets
                md={4} // Three cards per row on laptops/desktops
                key={index}
              >
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: "1px",
                    ":hover": { boxShadow: 7 },
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: 130,
                      height: 140,
                      p: "3px",
                      borderRadius: "12px",
                      "@media (max-width: 600px)": { width: 100, height: 110 },
                    }}
                    image={CardImg}
                    title="Product Image"
                  />
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
                        Lorem Ipsum Dolor Sit Amet 
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          marginBottom: 2,
                          fontSize: "0.85rem",
                          "@media (max-width: 600px)": { fontSize: "0.8rem" },
                        }}
                      >
                        <Rating
                          name="size-small"
                          defaultValue={2}
                          size="small"
                        />
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{
                        display: "flex",
                        // justifyContent: "center",
                        // flexWrap: "wrap",
                        // gap: "8px",
                        "@media (max-width: 600px)": {
                          flexDirection: "row",
                          alignItems: "stretch",
                        },
                      }}
                    >
                      <Button
                        variant="contained"
                        color="success"
                        size="small"
                        sx={{
                          fontSize: "0.8rem",
                          "@media (max-width: 600px)": { fontSize: "0.6rem" },
                          "@media (max-width: 375px)": { fontSize: "0.65rem" },
                        }}
                      >
                        Order
                      </Button>
                      <Button
                        variant="contained"
                        color="success"
                        size="small"
                        sx={{
                          fontSize: "0.8rem",
                          "@media (max-width: 600px)": { fontSize: "0.6rem" },
                          "@media (max-width: 375px)": { fontSize: "0.65rem" },
                        }}
                      >
                        Add to Cart
                      </Button>
                    </CardActions>
                  </Box>
                </Card>
              </Grid>
            ))}
        </Grid>
      </StyleBox>
    </>
  );
};

export default ProductCard;

const StyleBox = styled(Box)({
  marginTop: 0,
  marginLeft: "250px",
  bgcolor: "#F0F0F0",
  display: "flex",
  flexDirection: "row",
  "@media (max-width: 1100px)": {
    marginLeft: "0px",
    padding: "10px",
  },
  "@media (max-width: 600px)": {
    flexDirection: "column",
    alignItems: "center",
    // padding: "5px",
  },
});
