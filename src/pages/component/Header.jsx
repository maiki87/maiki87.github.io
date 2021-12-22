import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
  <Grid container component="header">
    <Grid item xs={12} sx={{ textAlign: 'center' }}>
      <Typography sx={{ fontWeight: "bold" }}>
        Portfolio Site
      </Typography>
    </Grid>
  </Grid>
  )
}

export default Header;