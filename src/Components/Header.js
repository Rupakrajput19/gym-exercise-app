import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import logo from 'https://img.icons8.com/bubbles/344/amazon-alexa-logo.png';
import { theme } from './Theme';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';

const styles = {
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em',
    },
  },
  logo: {
    height: '8em',
    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em',
    },
  },
  logoContainer: {
    padding: 0,
    fontSize: 30,
    fontWeight: 'bold',
    color:"white",
    width: 'auto',
    margin: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  tabs: {
    marginLeft: 'auto',
    '& .MuiButtonBase-root.MuiTab-root': {
      color: '#fff',
      fontSize: 20,
    },
    '& .Mui-selected': {
      backgroundColor: '#807d7d',
      color: '#000',
      opacity: 0.7,
      borderRadius: 2,
    },
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
    color: 'white',
  },

  hamburgerMenuIcon: {
    height: '50px',
    width: '50px',
  },
  menuIconContainer: {
    marginLeft: 'auto',
    color: 'white',
    '&:hover': {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
    backgroundColor: '#000'
  },
};

const DesktopNavigation = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="nav tabs example"
      sx={styles.tabs}
    >
      <Tab sx={styles.tab} label="Home" component={Link} to="/home" />
      <Tab sx={styles.tab} label="Monday" component={Link} to="/monday" />
      <Tab sx={styles.tab} label="Tuesday" component={Link} to="/tuesday" />
      <Tab sx={styles.tab} label="Wednesday" component={Link} to="/wednesday" />
      <Tab sx={styles.tab} label="Thursday" component={Link} to="/thursday" />
      <Tab sx={styles.tab} label="Friday" component={Link} to="/friday" />
      <Tab sx={styles.tab} label="Saturday" component={Link} to="/saturday" />
    </Tabs>
  );
};

const MobileNavigation = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const drawerWidth = 275;

  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <Box sx={styles.toolbarMargin} width={drawerWidth} />
        <Paper>
          <List disablePadding>
            <ListItem
              divider
              button
              component={Link}
              to="/home"
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText className='navtext' disableTypography>Home</ListItemText>
            </ListItem>
            <ListItem
              divider
              button
              component={Link}
              to="/monday"
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText className='navtext' disableTypography>Monday</ListItemText>
            </ListItem>
            <ListItem
              divider
              button
              component={Link}
              to="/tuesday"
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText className='navtext' disableTypography>Tuesday</ListItemText>
            </ListItem>
            <ListItem
              divider
              button
              component={Link}
              to="/wednesday"
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText className='navtext' disableTypography>Wednesday</ListItemText>
            </ListItem>
            <ListItem
              divider
              button
              component={Link}
              to="/thursday"
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText className='navtext' disableTypography>Thursday</ListItemText>
            </ListItem>
            <ListItem
              divider
              button
              component={Link}
              to="/friday"
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText className='navtext' disableTypography>Friday</ListItemText>
            </ListItem>
            <ListItem
              divider
              button
              component={Link}
              to="/saturday"
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText className='navtext' disableTypography>Saturday</ListItemText>
            </ListItem>
          </List>
        </Paper>
      </SwipeableDrawer>
      <IconButton
        sx={styles.menuIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon sx={styles.hamburgerMenuIcon} />
      </IconButton>
    </React.Fragment>
  );
};

const Header = () => {
  const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Fragment>
      <AppBar
        position="fixed"
        sx={styles.appbar}
        // color="primary"
        elevation={9}
      >
        <Toolbar disableGutters={true}>
          <Button
            disableRipple
            component={Link}
            to="/home"
            sx={styles.logoContainer}
          >
            <Box alt="company logo" />
            THEGYM
          </Button>
          {isMobileMode ? <MobileNavigation /> : <DesktopNavigation />}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
