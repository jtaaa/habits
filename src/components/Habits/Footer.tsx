import React from 'react';
import { Link } from 'react-router-dom';
import { isToday } from 'date-fns';
import { Box, Typography, Button } from '@material-ui/core';
import LINKS from 'utils/links';
import { TODAY } from 'utils/date';

type Props = {
  date?: Date;
};

const Footer: React.FC<Props> = ({ date = TODAY }) => {
  const to = isToday(date) ? LINKS.YESTERDAY : LINKS.HOME;
  const text = isToday(date) ? 'Edit yesterdays logs' : 'Back to todays logs';

  return (
    <Box marginTop={3}>
      <Button variant="outlined" fullWidth component={Link} to={to}>
        <Box padding={2}>
          <Typography variant="body1" align="center">
            {text}
          </Typography>
        </Box>
      </Button>
    </Box>
  );
};

export default Footer;
