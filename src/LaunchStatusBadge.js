import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  success: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
  },
  upcoming: {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.warning.contrastText,
  },
}));

function LaunchStatusBadge({ success, upcoming }) {
  const classes = useStyles();

  if (success) {
    return <Chip label="Success" className={classes.success} />;
  } else if (upcoming) {
    return <Chip label="Upcoming" className={classes.upcoming} />;
  } else {
    return <Chip label="Failure" />;
  }
}

export default LaunchStatusBadge;
