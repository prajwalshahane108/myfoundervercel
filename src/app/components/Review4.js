import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { styled } from '@mui/material/styles';

// Styled components
const LogoContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: 20,
  width: '100%',
  marginTop: theme.spacing(4),
  height: 80,
  overflow: 'hidden',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    width: '15%',
    height: '100%',
    zIndex: 2,
    pointerEvents: 'none',
  },
  '&::before': {
    left: 0,
    background: 'linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent)',
  },
  '&::after': {
    right: 0,
    background: 'linear-gradient(to left, rgba(0, 0, 0, 0.29), transparent)',
  },
}));

const LogoTrack = styled(motion.div)({
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  width: 'max-content',
});

const LogoWrapper = styled(motion.div)(({ theme }) => ({
  margin: '0 24px',
  opacity: 0.7,
  transition: 'opacity 0.3s ease',
  '&:hover': {
    opacity: 1,
  },
}));

// Main component
const FeaturedLogos = () => {
  const theme = useTheme();
  const [trackWidth, setTrackWidth] = useState(0);
  
  // Logos data
  const logos = [
    { src: "https://framerusercontent.com/images/tnjkbQJwRbdGkxEcDO0Jqu1aTZM.svg", alt: "Riyadh Hub Logo" },
    { src: "https://framerusercontent.com/images/497xK9DhewPLaDj5d8bkw0cAg.svg", alt: "Dubai Hub Logo" },
    { src: "https://framerusercontent.com/images/gtA2k0HxvLgyb2ShavqPh2ut8M.svg", alt: "Scotland Hub Logo" },
    { src: "https://framerusercontent.com/images/v8pRoXjGv8Kuqg4GJYQjdWqJD0.svg", alt: "Singapore Hub Logo" },
    { src: "https://framerusercontent.com/images/z6DLxkMPmuYBeO3zshpNfjAxLg8.svg", alt: "Berlin Hub Logo" },
  ];
  
  // Duplicate logos for infinite scroll effect
  const duplicatedLogos = [...logos, ...logos, ...logos];
  
  // Calculate the width of all logos for animation
  useEffect(() => {
    // Estimate the width of each logo item (logo + margin)
    const estimatedItemWidth = 120; // Logo width + margins
    const totalWidth = duplicatedLogos.length * estimatedItemWidth;
    setTrackWidth(totalWidth);
  }, [duplicatedLogos.length]);
  
  return (
    <Box sx={{ backgroundColor: 'transparent', color: '#fff', py: 6, width: '100%' }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography 
            variant="h6" 
            component="h2" 
            align="center" 
            sx={{ 
              fontWeight: 400, 
              fontSize: { xs: '1rem', md: '1.2rem' }, 
              opacity: 0.8 
            }}
          >
            Our services are featured on
          </Typography>
        </motion.div>
        
        <LogoContainer>
          <LogoTrack
            initial={{ x: 0 }}
            animate={{ 
              x: [-trackWidth / 3, -trackWidth * 2/3] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 20,
              ease: "linear"
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <LogoWrapper
                key={`${logo.alt}-${index}`}
                whileHover={{ scale: 1.05 }}
              >
                <Box 
                  component="img" 
                  src={logo.src} 
                  alt={logo.alt}
                  sx={{ 
                    height: { xs: 30, md: 40 }, 
                    filter: 'brightness(0) invert(1)',
                  }} 
                />
              </LogoWrapper>
            ))}
          </LogoTrack>
        </LogoContainer>
      </Container>
    </Box>
  );
};

export default FeaturedLogos;