// JoinButton.js
import React, { useState, useEffect, useRef } from 'react';
import { Button, Box } from '@mui/material';
import SouthEastIcon from '@mui/icons-material/SouthEast';

const JoinButton = () => {
  const [arrowPosition, setArrowPosition] = useState(0);
  const [arrowOpacity, setArrowOpacity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const animationIntervalRef = useRef(null);
  
  useEffect(() => {
    // Only run animation when hovered
    if (isHovered) {
      animationIntervalRef.current = setInterval(() => {
        // Move arrow diagonally with fading
        if (arrowPosition < 10) {
          setArrowPosition(prev => prev + 1);
          setArrowOpacity(prev => prev - 0.1);
        } else {
          // Reset arrow position
          setArrowPosition(0);
          setArrowOpacity(1);
        }
      }, 100);
    } else {
      // Reset arrow when not hovered
      setArrowPosition(0);
      setArrowOpacity(1);
      clearInterval(animationIntervalRef.current);
    }
    
    return () => clearInterval(animationIntervalRef.current);
  }, [isHovered, arrowPosition]);
  
  return (
    <Button
      variant="contained"
      size="large"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href='/pages/NewJoin'
      sx={{
        backgroundColor: '#000',
        borderRadius: 2,
        padding: '12px 12px',
        fontSize: {
          xs: '0.9rem',
          sm: '1rem',
          md: '1.2rem',},
        fontWeight: '300',
        textTransform: 'none',
        color: 'white',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
        position: 'relative',
        overflow: 'hidden',
        minWidth: '150px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background: 'rgba(2, 1, 1, 0.74)',
          boxShadow: '10px 100px 80px 30px rgba(255, 255, 255, 0.7)',
        //   borderRadius: '50%',
        },
        '&:hover': {
          backgroundColor: '#222222',
        },
      }}
    >
      Join Our Ecosystem
      <Box
        sx={{
          marginLeft: '10px',
          display: 'flex',
          alignItems: 'center',
          transform: `translate(${arrowPosition}px, ${arrowPosition}px)`,
          opacity: arrowOpacity,
          transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
        }}
      >
        <SouthEastIcon fontSize="small" />
      </Box>
    </Button>
  );
};

export default JoinButton;