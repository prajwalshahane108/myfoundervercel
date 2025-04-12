// pages/future.js
import React from 'react';
import { Box, Typography, Container, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';

const StatNumber = styled(Typography)(({ theme }) => ({
  color: '#E87811',
  fontSize: '48px',
  fontWeight: 700,
  marginBottom: '12px', // Increased for better spacing
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: '42px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '38px',
  }
}));

const StatTitle = styled(Typography)(({ theme }) => ({
  fontSize: '18px', // Increased slightly
  fontWeight: 600,
  marginBottom: '8px', // Increased for better spacing
  textAlign: 'center',
  color: '#FFFFFF',
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '15px',
  }
}));

const StatDescription = styled(Typography)(({ theme }) => ({
  fontSize: '15px', // Increased slightly
  color: '#CCCCCC',
  lineHeight: 1.5, // Improved line height
  textAlign: 'center',
  padding: '0 10px', // Added padding for better text wrapping
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '13px',
  }
}));

const FutureBuiltSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // Custom theme values
  const customTheme = {
    bgcolor: '#050505',
    highlightedText: '#E87811',
    text: '#FFFFFF',
    secondaryText: '#808080',
    accentColor: '#E87811',
  };

  // Styles
  const styles = {
    root: {
      backgroundColor: customTheme.bgcolor,
      color: customTheme.text,
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      maxWidth: '100vw',
      // Added margin for spacing around the component
      margin: { xs: '0px 0', md: '0px 0' },
    },
    outerContainer: {
      // Added padding on all sides
      padding: { 
        xs: '20px 16px', 
        sm: '25px 24px', 
        md: '0px 40px',
        lg: '0px 80px 50px 80px'
      },
    },
    container: {
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      height: { xs: 'auto', md: 'auto' }, // Removed fixed height for better responsiveness
      width: '100%',
      maxWidth: '1400px', // Set maximum width
      margin: '0 auto', // Center the container
      // border: '1px solid rgba(255, 255, 255, 0.1)', // Optional border
      borderRadius: '8px', // Optional rounded corners
      overflow: 'hidden', // Keep content within borders
    },
    imageSection: {
      flex: { xs: '1', md: '0.45' },
      backgroundImage: 'url("/built.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: { xs: '250px', sm: '300px', md: '450px', lg: '500px' }, // Taller on larger screens
      position: 'relative',
    },
    contentSection: {
      flex: { xs: '1', md: '0.55' },
      padding: { 
        xs: '30px 20px', 
        sm: '35px 25px', 
        md: '40px 30px',
        lg: '50px 40px'
      }, // Increased padding on all sides
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: { xs: '24px', sm: '28px', md: '34px', lg: '38px' },
      fontWeight: 700,
      marginBottom: { xs: '30px', sm: '35px', md: '40px' },
      textAlign: { xs: 'center', md: 'left' }, // Centered on mobile
      position: 'relative',
      '&::after': { // Added underline decoration
        content: '""',
        position: 'absolute',
        bottom: '-12px',
        left: { xs: '50%', md: '0' },
        transform: { xs: 'translateX(-50%)', md: 'none' },
        width: { xs: '60px', md: '80px' },
        height: '3px',
        backgroundColor: customTheme.accentColor,
      }
    },
    statsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: { xs: '30px', sm: '35px', md: '40px' },
      margin: { xs: '20px 0', md: '30px 0' }, // Added margin for spacing
    },
    statsRow: {
      display: 'flex',
      flexDirection: { xs: isMobile ? 'column' : 'row', md: 'row' },
      justifyContent: 'space-between',
      gap: { xs: '25px', md: '40px' }, // Increased gap
      width: '100%',
    },
    statBox: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: { xs: '15px', sm: '20px', md: '25px' }, // Increased padding
      // Added hover effect
      transition: 'all 0.3s ease',
      borderRadius: '8px',
      '&:hover': {
        backgroundColor: 'rgba(232, 120, 17, 0.05)',
        transform: 'translateY(-5px)',
      },
    },
    footerText: {
      fontSize: { xs: '15px', sm: '16px', md: '17px' },
      lineHeight: 1.6,
      marginTop: { xs: '35px', sm: '40px', md: '45px' }, // Increased top margin
      textAlign: 'center',
      padding: { xs: '0 15px', sm: '0 20px', md: '0 25px' }, // Added padding
      maxWidth: '800px', // Limit width for readability
      margin: '35px auto 15px', // Center and add top/bottom margin
    }
  };

  // Statistics data
  const stats = [
    {
      number: '70%',
      title: 'Youth Population',
      description: 'Saudi Arabia\'s dynamic under-35 population ready to innovate.',
    },
    {
      number: '$1.1B',
      title: 'Venture Investment',
      description: 'Government-backed funding supporting startup growth.',
    },
    {
      number: '2B+',
      title: 'Consumer Reach',
      description: 'Access to MENA, Asia, and Africa from a central position.',
    },
  ];

  return (
    <Box sx={styles.root}>
      <Box sx={styles.outerContainer}>
        <Box sx={styles.container}>
          {/* Image Section */}
          <Box sx={styles.imageSection} />

          {/* Content Section */}
          <Box sx={styles.contentSection}>
            <Typography variant="h1" sx={styles.title}>
              Where Your Future is Built
            </Typography>

            <Box sx={styles.statsContainer}>
              {isMobile ? (
                // Mobile layout: All stats in a single column
                <>
                  {stats.map((stat, index) => (
                    <Box key={index} sx={styles.statBox}>
                      <StatNumber variant="h2">
                        {stat.number}
                      </StatNumber>
                      <StatTitle variant="h6">
                        {stat.title}
                      </StatTitle>
                      <StatDescription variant="body2">
                        {stat.description}
                      </StatDescription>
                    </Box>
                  ))}
                </>
              ) : (
                // Tablet and Desktop layout
                <>
                  {/* First row with two stats */}
                  <Box sx={styles.statsRow}>
                    <Box sx={styles.statBox}>
                      <StatNumber variant="h2">
                        {stats[0].number}
                      </StatNumber>
                      <StatTitle variant="h6">
                        {stats[0].title}
                      </StatTitle>
                      <StatDescription variant="body2">
                        {stats[0].description}
                      </StatDescription>
                    </Box>
                    
                    <Box sx={styles.statBox}>
                      <StatNumber variant="h2">
                        {stats[1].number}
                      </StatNumber>
                      <StatTitle variant="h6">
                        {stats[1].title}
                      </StatTitle>
                      <StatDescription variant="body2">
                        {stats[1].description}
                      </StatDescription>
                    </Box>
                  </Box>
                  
                  {/* Second row with one stat */}
                  <Box sx={{
                    ...styles.statBox,
                    maxWidth: { sm: '280px', md: '320px', lg: '350px' }, // Increased max width
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: { sm: '10px', md: '15px' }, // Added top margin
                  }}>
                    <StatNumber variant="h2">
                      {stats[2].number}
                    </StatNumber>
                    <StatTitle variant="h6">
                      {stats[2].title}
                    </StatTitle>
                    <StatDescription variant="body2">
                      {stats[2].description}
                    </StatDescription>
                  </Box>
                </>
              )}
            </Box>

            <Typography variant="body1" sx={styles.footerText}>
              MyFounders.Club: Where the journey is meaningful, connections are powerful, and the future is yours to build.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FutureBuiltSection;