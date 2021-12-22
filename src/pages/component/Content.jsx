import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Table from '@mui/material/CardMedia';
import TableBody from '@mui/material/CardMedia';
import TableCell from '@mui/material/CardMedia';
import TableContainer from '@mui/material/CardMedia';
import TableHead from '@mui/material/CardMedia';
import TableRow from '@mui/material/CardMedia';
import Icon from './icon.png';

const headerContents = [
  {
    title: '名前'
  },
  {
    title: '年齢'
  },
  {
    title: '職業'
  },
  {
    title: '趣味'
  },
  {
    title: '作品'
  },
]

const contentsDetail = [
  {
    contents: 'Mikami Yoshiaki'
  },
  {
    contents: '18'
  },
  {
    contents: 'HighSchool Student'
  },
  {
    contents: 'Comic'
  },
  {
    contents: 'https://www.vivivit.com/maiki87'
  },
]

const Content = () => {
  return (
  <Grid container component="main" spacing={2}>
    <Grid item xs={4}>
      <Card>
        <CardMedia 
           component="img"
           height="400"
           image={Icon}
           alt="photo"
        />
      </Card>
  </Grid>

    <Grid item xs={2}>
    <Table sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr' }}>
      <TableHead>
        <TableRow>
          {headerContents.map((h) => (
            <TableCell key={h.title}>
              {h.title}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    </Table>
    </Grid>


  <Grid item xs={2}>
  <Table sx={{ display: 'grid', gridTemplateColumns: '10fr' }}>
    <TableHead>
        <TableRow>
          {contentsDetail.map((h) => (
            <TableCell key={h.contents}>
              {h.contents}
            </TableCell>
          ))}
      </TableRow>
    </TableHead>
    </Table>
  </Grid>
  </Grid>


 )


};

export default Content ;