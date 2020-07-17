import { Toolbar, Button, Typography } from '@material-ui/core';
import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     toolbar: {
//       borderBottom: `1px solid ${theme.palette.divider}`,
//     },
//     toolbarTitle: {
//       flex: 1,
//     },
//     toolbarSecondary: {
//       justifyContent: 'space-between',
//       overflowX: 'auto',
//     },
//   }));

export default function Header(props) {
  return (
    <>
      <Toolbar>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap

        >
          My Blog
        </Typography>
        <Button size="small">Search</Button>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
    </>
  );
}
