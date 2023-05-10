import React from "react";
import "../comp/sample.css"
import Box from "@mui/material/Box";
import { FormControl,FormLabel  } from "@mui/material";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


function Cardform() {
  return (
    <Card sx={{ maxWidth:550 }}>
      <CardMedia/> 
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Update Payment Method
        </Typography>
          <p>Update Your Card Details </p>
        <Typography>
          <Box>
          <form>
            <FormControl>
              <FormLabel > Name on Card</FormLabel>
              <TextField  type="text"/>
              </FormControl>
              <FormControl>
              <FormLabel> Expiry</FormLabel>
            <TextField type="date" />
            </FormControl>
            <FormControl>
              <FormLabel> Card Number</FormLabel>
              <TextField />
              </FormControl>
              <FormControl>
              <FormLabel> CVV</FormLabel>
            <TextField />
            </FormControl>
          </form>
          </Box>
        </Typography>
      </CardContent>

      <CardActions className="btstyle">  
        <Button size="small">Cancel </Button>
        <Button variant="contained" color="success">
          Update
        </Button>
      </CardActions>
    </Card>
  );
}

export default Cardform;
