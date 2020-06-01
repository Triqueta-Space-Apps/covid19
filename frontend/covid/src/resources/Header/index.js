import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './styles.css';

const Welcome = () => {
  return (
    <Toolbar className="Toolbar">
      <Typography variant="h1">
        VMC
      </Typography>
    </Toolbar>
  );
}

export default Welcome;