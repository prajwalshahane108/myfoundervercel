// pages/value-proposition.js
import React from 'react';
import { Box, Typography, Container, useMediaQuery, useTheme as useMuiTheme } from '@mui/material';
import { styled } from '@mui/system';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import CloudOffOutlinedIcon from '@mui/icons-material/CloudOffOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
// Styled components for arrow buttons
const ArrowButton = styled(Box)(({ theme }) => ({
  height: '60px',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  '&:hover': {
    '& .icon': {
      color: '#E87811',
    },
    '& svg polygon': {
      fill: 'rgba(232, 120, 17, 0.1)',
    }
  },
  [theme.breakpoints.down('sm')]: {
    height: '50px',
  }
}));

const CategoryIcon = styled(Box)(({ theme }) => ({
  fontSize: '28px',
  color: '#FFFFFF',
  transition: 'all 0.3s ease',
  position: 'absolute', // Changed from relative to absolute
  zIndex: 1,
  transform: 'translateX(0)', // Center the icon
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
  }
}));

const ValuePropositionSection = () => {
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(muiTheme.breakpoints.down('md'));
  
  // Custom theme values
  const theme = {
    bgcolor: '#050505',
    highlightedText: '#E87811',
    text: '#FFFFFF',
    secondaryText: '#808080',
    accentColor: '#E87811',
  };

  // Styles
  const styles = {
    root: {
      backgroundColor: theme.bgcolor,
      color: theme.text,
      position: 'relative',
      overflow: 'hidden',
      margin: { xs: '0px 0', md: '0px 0' }, // Added top and bottom margin
    },
    outerContainer: {
      // Added additional padding on all sides
      padding: { 
        xs: '20px 16px', 
        sm: '30px 24px', 
        md: '40px 40px',
        lg: '50px 60px'
      },
    },
    innerContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
    },
    title: {
      fontSize: { xs: '24px', sm: '28px', md: '36px', lg: '40px' },
      fontWeight: 700,
      marginBottom: { xs: '12px', sm: '16px', md: '20px' },
      textAlign: { xs: 'center', md: 'left' }, // Centered on mobile
      position: 'relative',
    },
    subtitle: {
      fontSize: { xs: '15px', sm: '16px', md: '18px' },
      color: theme.secondaryText,
      marginBottom: { xs: '30px', sm: '35px', md: '40px' },
      textAlign: { xs: 'center', md: 'left' }, // Centered on mobile
      maxWidth: { md: '80%' }, // Added maximum width on larger screens
      lineHeight: 1.5,
    },
    arrowsContainer: {
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'column', md: 'row' },
      gap: { xs: '16px', sm: '20px', md: '0' },
      marginBottom: { xs: '30px', sm: '35px', md: '40px' },
      alignItems: 'center', // Center on mobile
    },
    arrowWrapper: {
      width: { xs: '100%', sm: '80%', md: 'auto' }, // Full width on mobile, constrained on tablet
      maxWidth: { xs: '350px', sm: '400px', md: 'none' }, // Max width on smaller screens
      margin: { xs: '0 auto', md: '0' }, // Center on mobile
      flex: { md: 1 },
    },
    valuesContainer: {
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'column', md: 'row' },
      gap: { xs: '24px', sm: '30px', md: '24px', lg: '30px' },
      marginTop: { xs: '20px', md: '30px' },
    },
    valueBox: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      // backgroundColor: 'rgba(255, 255, 255, 0.03)', // Very subtle background
      padding: { xs: '16px', sm: '20px', md: '24px' },
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
      },
      textAlign: { xs: 'center', md: 'left' }, // Center text on mobile
    },
    valueTitle: {
      fontSize: { xs: '17px', sm: '18px', md: '20px' },
      fontWeight: 600,
      marginBottom: { xs: '8px', md: '12px' },
      color: theme.text,
    },
    valueDescription: {
      fontSize: { xs: '14px', sm: '14px', md: '15px' },
      color: theme.secondaryText,
      lineHeight: 1.5,
    },
    subtleBorder: {
      position: 'relative', // Changed from absolute
      margin: '40px auto 0', // Added top margin and centered
      width: '80%',
      height: '1px',
      background: `linear-gradient(90deg, transparent, ${theme.accentColor}20, transparent)`,
    },
  };

  // Value proposition data with correct icons
  const values = [
    {
      title: 'AI-Matched Investment',
      description: 'Proprietary algorithms connect startups with aligned investors, reducing fundraising cycles by 40%.',
      icon: <CloudOffOutlinedIcon className="icon" sx={{ fontSize: isMobile ? 24 : 28 }} />,
    },
    {
      title: 'Token-Gated Resources',
      description: 'Tiered membership unlocks progressive access to premium tools as you grow.',
      icon: <LockOpenOutlinedIcon className="icon" sx={{ fontSize: isMobile ? 24 : 28 }} />,
    },
    {
      title: 'Blockchain-Verified Networks',
      description: 'Build trust quickly through our verified ecosystem of 1,200+ founders and 300+ investors.',
      icon: <ShieldOutlinedIcon className="icon" sx={{ fontSize: isMobile ? 24 : 28 }} />,
    },
    {
      title: 'Global Gateway',
      description: 'Launch into international markets through partnerships with innovation hubs across 4 continents.',
      icon: <LanguageOutlinedIcon className="icon" sx={{ fontSize: isMobile ? 24 : 28 }} />,
    },
  ];

  return (
    <Box sx={styles.root}>
      <Box sx={styles.outerContainer}>
        <Box sx={styles.innerContainer}>
          <Typography variant="h1" sx={styles.title}>
            Our Value Proposition
          </Typography>
          
          <Typography variant="body1" sx={styles.subtitle}>
            The premier token-gated ecosystem transforming Saudi entrepreneurs into global innovators.
          </Typography>
          
          {/* Arrows Container */}
          <Box sx={styles.arrowsContainer}>
            {values.map((value, index) => (
              <Box key={index} sx={styles.arrowWrapper}>
                <ArrowButton>
                  <svg width="100%" height={isMobile ? "50" : "60"} viewBox="0 0 300 60" preserveAspectRatio="none">
                    <polygon 
                      points={
                        isTablet 
                          ? "0,0 280,0 300,30 280,60 0,60 20,30" 
                          : index === 0 
                            ? "0,0 280,0 300,30 280,60 0,60 20,30" 
                            : "0,0 280,0 300,30 280,60 0,60 20,30"
                      } 
                      fill="transparent" 
                      stroke="#E87811" 
                      strokeWidth="1.5"
                    />
                  </svg>
                  <CategoryIcon>
                    {value.icon}
                  </CategoryIcon>
                </ArrowButton>
              </Box>
            ))}
          </Box>
          
          {/* Values Content */}
          <Box sx={styles.valuesContainer}>
            {values.map((value, index) => (
              <Box key={`content-${index}`} sx={styles.valueBox}>
                <Typography variant="h6" sx={styles.valueTitle}>
                  {value.title}
                </Typography>
                <Typography variant="body2" sx={styles.valueDescription}>
                  {value.description}
                </Typography>
              </Box>
            ))}
          </Box>
          
        </Box>
      </Box>
    </Box>
  );
};

export default ValuePropositionSection;