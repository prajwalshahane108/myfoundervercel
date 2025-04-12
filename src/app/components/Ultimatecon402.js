// pages/advantage.js
import React from 'react';
import { Box, Typography, Container, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const BulletPoint = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: '12px',
  width: '100%',
}));

const Bullet = styled('span')(({ theme }) => ({
  color: '#FFFFFF',
  marginRight: '12px', // Increased spacing between bullet and text
  marginTop: '4px',
  fontSize: '16px',
  fontWeight: 'bold',
  flexShrink: 0,
}));

const FoundersAdvantageSection = () => {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  
  // Custom theme values
  const theme = {
    bgcolor: '#050505',
    highlightedText: '#E87811',
    text: '#FFFFFF',
    secondaryText: '#C0C0C0',
    accentColor: '#E87811',
  };

  // Styles
  const styles = {
    root: {
      backgroundColor: theme.bgcolor,
      color: theme.text,
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      maxWidth: '100%',
      // Increased horizontal padding
      padding: { 
        xs: '30px 24px', // More side padding on mobile
        sm: '40px 40px', 
        md: '50px 60px',  // Substantial side padding on desktop
        lg: '90px 80px 20px 80px'   // Even more side padding on large screens
      },
    },
    container: {
      width: '100%',
      maxWidth: '1200px', // Reduced max width to have more space on sides
      margin: '0 auto',
      padding: { xs: '0 10px', sm: '0 20px' }, // Additional inner padding
    },
    title: {
      fontSize: { xs: '24px', sm: '28px', md: '36px', lg: '40px' },
      fontWeight: 700,
      marginBottom: { xs: '24px', sm: '30px', md: '40px' },
      textAlign: { xs: 'center', md: 'left' },
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-10px',
        left: { xs: '50%', md: '0' },
        transform: { xs: 'translateX(-50%)', md: 'none' },
        width: { xs: '40px', sm: '60px', md: '80px' },
        height: '3px',
        backgroundColor: theme.accentColor,
        display: { xs: 'none', sm: 'block' },
      }
    },
    sectionTitle: {
      fontSize: { xs: '18px', sm: '20px', md: '24px' },
      fontWeight: 600,
      marginBottom: { xs: '16px', md: '20px' },
      textAlign: { xs: 'center', md: 'left' },
      color: theme.text,
    },
    sectionDescription: {
      fontSize: { xs: '14px', sm: '15px', md: '16px' },
      color: theme.secondaryText,
      marginBottom: { xs: '20px', md: '24px' },
      lineHeight: 1.5,
      textAlign: { xs: 'center', md: 'left' },
    },
    bulletText: {
      fontSize: { xs: '14px', sm: '15px', md: '16px' },
      color: theme.secondaryText,
      lineHeight: 1.5,
    },
    highlightedBullet: {
      fontSize: { xs: '15px', sm: '16px', md: '18px' },
      fontWeight: 600,
      color: theme.text,
      lineHeight: 1.5,
    },
    contentContainer: {
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      gap: { xs: '40px', sm: '50px', md: '80px' }, // Increased gap between columns
      width: '100%',
    },
    column: {
      width: '100%',
      flex: 1,
      // Add some space around the columns
      padding: { xs: '0', md: '0 10px' },
    },
    bulletContainer: {
      maxWidth: { xs: '100%', sm: '95%', md: '95%' }, // Slightly reduced width for spacing
      margin: { xs: '0 auto', md: '0' },
      paddingLeft: { xs: '10px', md: '15px' }, // Added space on left of bullet points
    }
  };

  // Why we're different bullet points
  const differentPoints = [
    'Only Saudi ecosystem with AI, blockchain, and tokenization integration',
    'Seven comprehensive programs from ideation to global scaling',
    'Direct Vision 2030 alignment and economic diversification',
    'International standards with deep Saudi market expertise',
  ];

  // Tangible results bullet points
  const resultsPoints = [
    '53% faster time-to-market',
    '2.8x higher funding success rate',
    '67% improved founder retention',
    '74% stronger international market entry',
  ];

  return (
    <Box sx={styles.root}>
      <Box sx={styles.container}>
        <Typography variant="h1" sx={styles.title}>
          The MyFounders.Club Advantage
        </Typography>
        
        <Box sx={styles.contentContainer}>
          <Box sx={styles.column}>
            <Typography variant="h2" sx={styles.sectionTitle}>
              Why We're Different
            </Typography>
            
            <Box sx={styles.bulletContainer}>
              {differentPoints.map((point, index) => (
                <BulletPoint key={`different-${index}`}>
                  <Bullet>•</Bullet>
                  <Typography variant="body1" sx={styles.bulletText}>
                    {point}
                  </Typography>
                </BulletPoint>
              ))}
            </Box>
          </Box>
          
          <Box sx={styles.column}>
            <Typography variant="h2" sx={styles.sectionTitle}>
              Tangible Results
            </Typography>
            
            <Typography variant="body1" sx={styles.sectionDescription}>
              Our members achieve measurable advantages in the competitive startup landscape.
            </Typography>
            
            <Box sx={styles.bulletContainer}>
              {resultsPoints.map((point, index) => (
                <BulletPoint key={`result-${index}`}>
                  <Bullet>•</Bullet>
                  <Typography variant="body1" sx={styles.highlightedBullet}>
                    {point}
                  </Typography>
                </BulletPoint>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FoundersAdvantageSection;