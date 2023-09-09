import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';

import java from '../../static/images/avatar/java.png';
import css from '../../static/images/avatar/css.png';
import html from '../../static/images/avatar/html.png';
import { Typography } from '@mui/material';
export default function InsetDividers() {
  return (
    <List
      sx={{
        width: '100%',
      }}

    >


      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="Java"
            src={ java }
            sx={{ width: 34, height: 34 }}
          />
        </ListItemAvatar>
        <ListItemText   primary={<Typography variant="h5" style={{ color: '#ff6f00' }}>JAVA</Typography>}  />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="CSS"
            src={css}
            sx={{ width: 34, height: 34 }}
          />
        </ListItemAvatar>
        <ListItemText  primary={<Typography variant="h5" style={{ color: 'red' }}>CSS</Typography>}   />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="HTML"
            src={html}
            sx={{ width: 34, height: 34 }}
          />
        </ListItemAvatar>
        <ListItemText  primary={<Typography variant="h5" style={{ color: 'blue' }}>HTML</Typography>}   />
      </ListItem>
    </List>
  );
}
