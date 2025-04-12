'use client';
import React from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Checkbox, 
  FormControlLabel, 
  Link,
  ThemeProvider,
  createTheme,
  useMediaQuery,
  Container
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Create a custom theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6C50F7',
    },
    background: {
      default: '#000000',
      paper: '#131313',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '20px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '4px',
            backgroundColor: 'rgba(25, 25, 25, 0.6)',
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.2)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.3)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#6C50F7',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'rgba(255, 255, 255, 0.7)',
          },
          '& .MuiInputBase-input': {
            color: 'white',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: 'rgba(255, 255, 255, 0.7)',
          '&.Mui-checked': {
            color: '#6C50F7',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default function NewsletterSignup() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <ThemeProvider theme={theme}>
      <Box 
        sx={{
          backgroundColor: 'black',
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          position: 'relative',
        }}
      >
        {/* Full Width Image Section */}
        <Box 
          sx={{
            width: '100%',
            height: {
              xs: '150px',  // smaller height on mobile
              sm: '180px',  // medium height on tablet
              md: '220px'   // default height on desktop
            },
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Box
            component="img"
            src="https://storage.tally.so/391feb34-80fa-43b7-8f05-b2e0e8639a56/MyFoundersClub-not-for-sharing-4-.pdf.png" 
            alt="Header Image"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/fallback-image.jpg'; // Provide a fallback image
            }}
          />
        </Box>

        {/* Form Section */}
        <Container maxWidth="lg">
          <Box 
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: {
                xs: 'center', // center on mobile
                sm: 'center', // center on tablet
                md: 'flex-start' // left-aligned on desktop
              },
              paddingLeft: {
                xs: '0',  // no padding on mobile (using Container)
                sm: '0',  // no padding on tablet (using Container)
                md: '5%'  // some padding on desktop
              },
            }}
          >
            <Box 
              sx={{
                marginTop: {
                  xs: '40px',  // less margin on mobile
                  sm: '60px',  // medium margin on tablet
                  md: '80px'   // full margin on desktop
                },
                marginBottom: {
                  xs: '40px',  // less margin on mobile
                  sm: '60px',  // medium margin on tablet
                  md: '80px'   // full margin on desktop
                },
                marginLeft: {
                  xs: '40px',  // less margin on mobile
                  sm: '60px',  // medium margin on tablet
                  md: '80px'   // full margin on desktop
                },
                width: '100%',
                maxWidth: {
                  xs: '90%',   // wider on mobile
                  sm: '80%',   // medium width on tablet
                  md: '400px'  // default width on desktop
                },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                paddingLeft: {
                  xs: '0',     // no extra padding on mobile
                  sm: '0',     // no extra padding on tablet
                  md: '0'      // no extra padding needed on desktop
                },
                boxSizing: 'border-box',
              }}
            >
              <Typography 
                variant="h3" 
                sx={{
                  color: 'white',
                  fontSize: {
                    xs: '1.75rem', // smaller on mobile
                    sm: '2rem',    // medium on tablet
                    md: '2.5rem'   // default on desktop
                  },
                  fontWeight: 'bold',
                  marginBottom: {
                    xs: '20px',   // less space on mobile
                    sm: '30px',   // medium space on tablet
                    md: '40px'    // default space on desktop
                  },
                  textAlign: 'left',
                  width: '100%',
                }}
              >
                Newsletter sign-up
              </Typography>

              <Box sx={{ width: '100%', position: 'relative' }}>
                <TextField 
                  variant="outlined"
                  label="Name"
                  fullWidth
                  InputProps={{
                    style: { color: 'white' }
                  }}
                  sx={{
                    marginBottom: {
                      xs: '15px',  // less space on mobile
                      sm: '18px',  // medium space on tablet
                      md: '20px'   // default space on desktop
                    }
                  }}
                />
                <Typography 
                  sx={{
                    color: 'white',
                    position: 'absolute',
                    right: '10px',
                    top: '15px',
                  }}
                >
                  *
                </Typography>
              </Box>

              <Box sx={{ width: '100%', position: 'relative' }}>
                <TextField 
                  variant="outlined"
                  label="Email"
                  fullWidth
                  InputProps={{
                    style: { color: 'white' }
                  }}
                  sx={{
                    marginBottom: {
                      xs: '15px',  // less space on mobile
                      sm: '18px',  // medium space on tablet
                      md: '20px'   // default space on desktop
                    }
                  }}
                />
                <Typography 
                  sx={{
                    color: 'white',
                    position: 'absolute',
                    right: '10px',
                    top: '15px',
                  }}
                >
                  *
                </Typography>
              </Box>

              <Box sx={{ 
                width: '100%', 
                display: 'flex', 
                alignItems: 'flex-start', 
                marginBottom: '10px',
                paddingRight: {
                  xs: '10px',  // smaller padding on mobile
                  sm: '20px',  // medium padding on tablet
                  md: '0'      // no padding on desktop
                }
              }}>
                <FormControlLabel
                  control={
                    <Checkbox 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.7)',
                        '&.Mui-checked': {
                          color: '#6C50F7',
                        },
                        padding: {
                          xs: '4px',  // smaller padding on mobile
                          sm: '6px',  // medium padding on tablet
                          md: '9px'   // default padding on desktop
                        }
                      }}
                    />
                  }
                  label={
                    <Typography 
                      sx={{
                        color: 'white',
                        fontSize: {
                          xs: '0.8rem',  // smaller on mobile
                          sm: '0.85rem', // medium on tablet
                          md: '0.9rem'   // default on desktop
                        },
                        lineHeight: 1.4
                      }}
                    >
                      Yes I would like to sign up for the weekly newsletter <span style={{ color: 'white' }}>*</span>
                    </Typography>
                  }
                />
              </Box>

              <Button 
                variant="contained" 
                sx={{
                  backgroundColor: '#6C50F7',
                  color: 'white',
                  padding: {
                    xs: '6px 16px',  // smaller on mobile
                    sm: '7px 18px',  // medium on tablet
                    md: '8px 20px'   // default on desktop
                  },
                  borderRadius: '4px',
                  fontSize: {
                    xs: '0.9rem',  // smaller on mobile
                    sm: '0.95rem', // medium on tablet
                    md: '1rem'     // default on desktop
                  },
                  marginTop: '20px',
                  alignSelf: 'flex-start',
                  '&:hover': {
                    backgroundColor: '#5b43d6',
                  },
                }}
                endIcon={<ArrowForwardIcon />}
              >
                Sign up
              </Button>
            </Box>
          </Box>
        </Container>

        {/* Footer */}
        <Box 
          sx={{
            position: 'fixed',
            bottom: {
              xs: '10px',  // smaller distance on mobile
              sm: '15px',  // medium distance on tablet
              md: '20px'   // default distance on desktop
            },
            right: {
              xs: '10px',  // smaller distance on mobile
              sm: '15px',  // medium distance on tablet
              md: '20px'   // default distance on desktop
            },
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.7)',
            padding: {
              xs: '4px 8px',   // smaller padding on mobile
              sm: '5px 10px',  // medium padding on tablet
              md: '5px 10px'   // default padding on desktop
            },
            borderRadius: '4px',
            zIndex: 10,
          }}
        >
          {/* Footer content commented out in original code */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}