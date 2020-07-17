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
import { uiConfig, OPEN_APP_HABIT } from './constants';

const styles = ({ spacing }: Theme) =>
  createStyles({
    container: {
      padding: spacing(3),
    },
  });

type Props = WithStyles<typeof styles>;

const SignIn: React.FC<Props> = ({ classes }) => {
  const { firestore, auth } = useContext(FirebaseContext);
  const habitsCollection = firestore.collection('habits');

  const signInSuccessWithAuthResult = (
    authResult: firebase.auth.UserCredential,
  ) => {
    if (authResult.user && authResult.additionalUserInfo?.isNewUser) {
      habitsCollection.add({
        ...OPEN_APP_HABIT,
        owner: authResult.user?.uid,
      });
    }
    return true;
  };

  return (
    <div className={classes.container}>
      <Typography variant="h5" align="center">
        Sign in
      </Typography>
      <Box marginTop={1}>
        <StyledFirebaseAuth
          uiConfig={{ ...uiConfig, callbacks: { signInSuccessWithAuthResult } }}
          firebaseAuth={auth}
        />
      </Box>
    </div>
  );
};

export default withStyles(styles)(SignIn);
