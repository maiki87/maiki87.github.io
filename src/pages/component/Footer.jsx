import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
  <Grid container component="footer">
    <Grid item xs={12} sx={{ textAlign: 'center' }}>
      <Typography>
        &copy;Mikami
      </Typography>
    </Grid>
  </Grid>
  )
}

export default Footer;