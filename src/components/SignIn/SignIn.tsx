import React, { useContext } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {
  withStyles,
  Theme,
  createStyles,
  WithStyles,
  Typography,
  Box,
} from '@material-ui/core';
import { FirebaseContext } from 'modules/firebase';
import { uiConfig } from './constants';

const styles = ({ spacing }: Theme) =>
  createStyles({
    container: {
      padding: spacing(3),
    },
  });

type Props = WithStyles<typeof styles>;

const SignIn: React.FC<Props> = ({ classes }) => {
  const { auth } = useContext(FirebaseContext);

  return (
    <div className={classes.container}>
      <Typography variant="h5" align="center">
        Sign in
      </Typography>
      <Box marginTop={1}>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </Box>
    </div>
  );
};

export default withStyles(styles)(SignIn);
