import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { withStyles, Theme, createStyles, WithStyles } from '@material-ui/core';
import { FirebaseContext } from 'modules/firebase';
import LINKS from 'utils/links';

const styles = ({}: Theme) => createStyles({});

type Props = WithStyles<typeof styles>;

const SignOut: React.FC<Props> = () => {
  const { auth } = useContext(FirebaseContext);
  const [isSignedOut, setIsSignedOut] = useState(false);

  useEffect(() => {
    const signOut = async () => {
      await auth.signOut();
      setIsSignedOut(true);
    };
    signOut;
  }, [auth, setIsSignedOut]);

  if (isSignedOut) {
    return <Redirect to={LINKS.HOME} />;
  }

  return null;
};

export default withStyles(styles)(SignOut);
