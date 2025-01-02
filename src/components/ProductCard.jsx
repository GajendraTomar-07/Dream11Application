import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Box } from '@mui/material';
import CardImg from "../assets/pexelImg1.webp";

const ProductCard = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
      <Card sx={{ display: 'flex', alignItems: 'center', maxWidth: 600, p:'3px' }}>
        <CardMedia
          component="img"
          sx={{ width: 160, height:160 }}
        image={CardImg}    
        
          title="green iguana"
        />
        <Box sx={{ flex: 1, padding: 2 }}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Lorem Ipsum Dolor Sit Amet Consectetur
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 2 }}>
              <Rating name="size-medium" defaultValue={2} />
            </Typography>
          </CardContent>
          <CardActions sx={{ display: 'flex', justifyContent:'end', gap: 1 }}>
            <Button size="large" variant="contained" color="success">
              Order
            </Button>
            <Button size="large" variant="contained" color="success">
              Add Card
            </Button>
          </CardActions>
        </Box>
      </Card>
    </Box>
  );
};

export default ProductCard;
