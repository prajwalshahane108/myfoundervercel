// pages/join.js
import React from 'react';
import { Box, Typography, Container, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import Link from 'next/link';
import Image from 'next/image';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
// Updated styled components for arrow buttons to match the previous code
const ArrowButton = styled(Box)(({ theme }) => ({
  height: '60px',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-5px)',
    '& .icon': {
      color: '#E87811',
    },
    '& svg polygon': {
      fill: 'rgba(232, 120, 17, 0.1)',
    },
    '& img.icon': {
      filter: 'brightness(1.5) sepia(1) hue-rotate(-5deg) saturate(5)',
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

// Main component
const JoinFoundersClub = () => {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(muiTheme.breakpoints.between('sm', 'md'));
  
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
      backgroundColor: "#050505",
      color: theme.text,
      position: 'relative',
      overflow: 'hidden',
      padding: { xs: '0 0 40px', md: '0 0 0px' },
    },
    imageContainer: {
      position: 'relative',
      width: '100%',
      height: { xs: '200px', sm: '250px', md: '300px', lg: '350px' },
      overflow: 'hidden',
    },
    heroContainer: {
      position: 'relative',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: { 
        xs: '40px 24px 50px', 
        sm: '50px 40px 60px', 
        md: '60px 60px 80px',
        lg: '70px 80px 90px'
      },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.4) 100%)',
        zIndex: 1,
      },
    },
    contentBox: {
      position: 'relative',
      zIndex: 2,
      width: '100%',
      maxWidth: '1100px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      fontSize: { xs: '26px', sm: '30px', md: '36px', lg: '40px' },
      fontWeight: 700,
      marginBottom: { xs: '32px', sm: '40px', md: '48px' },
      textAlign: 'center',
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-10px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: { xs: '60px', md: '80px' },
        height: '3px',
        backgroundColor: theme.accentColor,
        display: { xs: 'none', sm: 'block' },
      }
    },
    categoriesContainer: {
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      gap: { xs: '24px', sm: '30px', md: '20px' },
      marginTop: { xs: '24px', sm: '32px' },
      justifyContent: 'space-between',
      width: '100%',
    },
    categoryBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: { xs: '100%', md: '31%' },
      padding: { xs: '0 10px', md: '0 15px' },
    },
    categoryTitle: {
      fontSize: { xs: '18px', sm: '19px', md: '20px' },
      fontWeight: 600,
      color: theme.text,
      marginTop: '16px',
      textAlign: 'center',
    },
    categoryDescription: {
      fontSize: { xs: '14px', sm: '14px', md: '15px' },
      color: theme.secondaryText,
      marginTop: '8px',
      textAlign: 'center',
      lineHeight: 1.5,
    },
    tagline: {
      fontSize: { xs: '15px', sm: '16px', md: '18px' },
      fontWeight: 400,
      color: theme.text,
      marginTop: { xs: '32px', md: '40px' },
      textAlign: 'center',
      opacity: 0.9,
      maxWidth: '800px',
      margin: '0 auto',
      marginTop: { xs: '32px', md: '40px' },
      padding: { xs: '0 10px', md: '0' },
    },
    arrowsContainer: {
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'column', md: 'row' },
      gap: { xs: '16px', sm: '20px', md: '0' },
      marginBottom: { xs: '30px', sm: '35px', md: '40px' },
      alignItems: 'center', // Center on mobile
      width: '100%',
    },
    arrowWrapper: {
      width: { xs: '100%', sm: '80%', md: 'auto' }, // Full width on mobile, constrained on tablet
      maxWidth: { xs: '350px', sm: '400px', md: 'none' }, // Max width on smaller screens
      margin: { xs: '0 auto', md: '0' }, // Center on mobile
      flex: { md: 1 },
    },
    iconImage: {
      width: isMobile ? '22px' : '28px',
      height: isMobile ? '22px' : '28px',
      filter: 'brightness(1.5)',
      transition: 'all 0.3s ease',
    },
  };

  // Category data - using different icons to match your image
  const categories = [
    {
      title: 'Founders',
      description: 'Scale your business with our ecosystem support.',
      icon: <GroupsIcon className="icon" sx={{ fontSize: isMobile ? 22 : 28 }} />,
      path: '/',
    },
    {
      title: 'Investors',
      description: 'Discover high-potential opportunities in Saudi Arabia and globally',
      icon: (
        <Box 
          component="img" 
          src="/withdraw.png" 
          alt="Withdraw Icon"
          className="icon"
          width={isMobile ? '22px' : '28px'}
          sx={styles.iconImage} 
        />
      ),
      path: '/',
    },
    {
      title: 'Advisors',
      description: 'Share expertise and make a lasting impact.',
      icon: <EmojiObjectsIcon className="icon" sx={{ fontSize: isMobile ? 22 : 28 }} />,
      path: '/',
    },
  ];

  return (
    <Box sx={styles.root}>
      {/* Top Banner Image */}
      <Box sx={styles.imageContainer}>
        <Image 
          src="/join2.png" 
          alt="MyFounders.Club Event" 
          layout="fill"
          objectFit="cover"
          priority
        />
      </Box>
      
      <Box sx={styles.heroContainer}>
        <Box sx={styles.contentBox}>
          <Typography variant="h1" sx={styles.title}>
            Join MyFounders.Club
          </Typography>
          
          {/* Arrows Container - Updated to match ValueProposition style */}
          <Box sx={styles.arrowsContainer}>
            {categories.map((category, index) => (
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
                    {category.icon}
                  </CategoryIcon>
                </ArrowButton>
              </Box>
            ))}
          </Box>
          
          {/* Categories Content */}
          <Box sx={styles.categoriesContainer}>
            {categories.map((category, index) => (
              <Box key={`content-${index}`} sx={styles.categoryBox}>
                <Typography variant="h6" sx={styles.categoryTitle}>
                  {category.title}
                </Typography>
                <Typography variant="body2" sx={styles.categoryDescription}>
                  {category.description}
                </Typography>
              </Box>
            ))}
          </Box>
          
          <Typography variant="body1" sx={styles.tagline}>
            Together, we innovate. Together, we grow. Together, we achieve Vision 2030.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default JoinFoundersClub;