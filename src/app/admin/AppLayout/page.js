"use client";
import React, { useState, useEffect } from 'react';
import {
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// Import components
import Dashboard from '../../admin/dashboard/Dashboard';
import Auth from '../auth/Auth';

// Create dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#111111',
      paper: '#1A1A1A',
    },
    primary: {
      main: '#E87811',
    },
    secondary: {
      main: '#90caf9',
    },
    text: {
      primary: '#ffffff',
      secondary: '#AFAFAF',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

const drawerWidth = 0;

const AppLayout = () => {
  const [open, setOpen] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    // Check if user is already authenticated
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setToken(storedToken);
      setAuthenticated(true);
    }
  }, []);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleMobileDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setToken(null);
    setAuthenticated(false);
    handleProfileMenuClose();
  };

  const handleAuth = (authToken) => {
    setToken(authToken);
    setAuthenticated(true);
  };

  // Drawer content
  // const drawer = (
  //   <Box sx={{ overflow: 'auto' }}>
  //     <Box
  //       sx={{
  //         display: 'flex',
  //         alignItems: 'center',
  //         padding: '16px',
  //         borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
  //       }}
  //     >
  //       <Avatar sx={{ bgcolor: '#E87811', mr: 2 }}>D</Avatar>
  //       <Typography variant="h6" noWrap component="div">
  //         Admin Portal
  //       </Typography>
  //     </Box>
  //     <List>
  //       <ListItem button selected sx={{ 
  //         '&.Mui-selected': {
  //           backgroundColor: 'rgba(232, 120, 17, 0.12)',
  //           '&:hover': {
  //             backgroundColor: 'rgba(232, 120, 17, 0.2)',
  //           },
  //         },
  //       }}>
  //         <ListItemIcon>
  //           <DashboardIcon sx={{ color: '#E87811' }} />
  //         </ListItemIcon>
  //         <ListItemText primary="Dashboard" />
  //       </ListItem>
  //       <ListItem button>
  //         <ListItemIcon>
  //           <PeopleIcon />
  //         </ListItemIcon>
  //         <ListItemText primary="Submissions" />
  //       </ListItem>
  //       <ListItem button>
  //         <ListItemIcon>
  //           <BarChartIcon />
  //         </ListItemIcon>
  //         <ListItemText primary="Analytics" />
  //       </ListItem>
  //     </List>
  //     <Divider sx={{ my: 2, backgroundColor: 'rgba(255, 255, 255, 0.12)' }} />
  //     <List>
  //       <ListItem button>
  //         <ListItemIcon>
  //           <SettingsIcon />
  //         </ListItemIcon>
  //         <ListItemText primary="Settings" />
  //       </ListItem>
  //       <ListItem button onClick={handleLogout}>
  //         <ListItemIcon>
  //           <LogoutIcon />
  //         </ListItemIcon>
  //         <ListItemText primary="Logout" />
  //       </ListItem>
  //     </List>
  //   </Box>
  // );

  const isMenuOpen = Boolean(anchorEl);
  const menuId = 'primary-account-menu';
  // const renderMenu = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     id={menuId}
  //     keepMounted
  //     open={isMenuOpen}
  //     onClose={handleProfileMenuClose}
  //     PaperProps={{
  //       sx: {
  //         backgroundColor: '#2A2A2A',
  //         color: 'white',
  //         boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  //       },
  //     }}
  //     transformOrigin={{ horizontal: 'right', vertical: 'top' }}
  //     anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
  //   >
  //     <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
  //     <MenuItem onClick={handleProfileMenuClose}>My account</MenuItem>
  //     <MenuItem onClick={handleLogout}>Logout</MenuItem>
  //   </Menu>
  // );

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        {authenticated ? (
          <>
            {/* AppBar */}
            {/* <AppBar
              position="fixed"
              sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                backgroundColor: '#1A1A1A',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              }}
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleMobileDrawerToggle}
                  sx={{ mr: 2, display: { sm: 'none' } }}
                 >
                  <MenuIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  aria-label="toggle drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { xs: 'none', sm: 'block' } }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                  Form Submissions Dashboard
                </Typography>
                <Box sx={{ display: 'flex' }}>
                  <IconButton color="inherit">
                    <MailIcon />
                  </IconButton>
                  <IconButton color="inherit">
                    <NotificationsIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                  >
                    <AccountCircleIcon />
                  </IconButton>
                </Box>
              </Toolbar>
            </AppBar> */}
            {/* {renderMenu} */}

            {/* Mobile Drawer */}
            {/* <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleMobileDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better mobile performance
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: drawerWidth,
                  backgroundColor: '#1A1A1A',
                  borderRight: '1px solid rgba(255, 255, 255, 0.12)',
                },
              }}
            >
              {drawer}
            </Drawer> */}

            {/* Desktop Drawer */}
            {/* <Drawer
              variant="persistent"
              open={open}
              sx={{
                display: { xs: 'none', sm: 'block' },
                width: open ? drawerWidth : 0,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: drawerWidth,
                  backgroundColor: '#1A1A1A',
                  borderRight: '1px solid rgba(255, 255, 255, 0.12)',
                  transition: (theme) => theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                  }),
                },
              }}
            >
              {drawer}
            </Drawer> */}

            {/* Main content */}
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                transition: (theme) => theme.transitions.create('margin', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen,
                }),
                marginLeft: open ? `${drawerWidth}px` : 0,
                p: 0,
                width: { xs: '100%', sm: `calc(100% - ${open ? drawerWidth : 0}px)` },
              }}
            >
              {/* <Toolbar />  */}
              {/* Spacer for AppBar */}
              <Dashboard />
            </Box>
          </>
        ) : (
          <Box sx={{ flexGrow: 1 }}>
            <Auth onAuth={handleAuth} />
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default AppLayout; 