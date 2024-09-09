import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: { xs: 'center', md: 'space-between' },
        alignItems: 'center',
        p: { xs: 1, md: 2 },
        backgroundColor: "#152536",        
        borderTop: '1px solid #e0e0e0',
        width: '100%',
        boxSizing: 'border-box',
        flexDirection: { xs: 'column', md: 'row' },
        textAlign: { xs: 'center', md: 'left' },
        overflowX: 'hidden', 
        position: 'relative', 
        bottom: 0,
      }}
    >
      <Typography variant="body2" color="white" sx={{ mb: { xs: 1, md: 0 }, ml: { md: 1 }, whiteSpace: 'nowrap' }}>
        © {new Date().getFullYear()} Your Company. All Rights Reserved.
      </Typography>

      <Link
        component="button"
        variant="body2"
        onClick={scrollToTop}
        sx={{ 
          cursor: 'pointer',
          textDecoration: 'underline',
          color: 'white',
          '&:hover': {
            color: 'primary.dark',
          },
          mr: { xs: 0, md: 7 },
        }}
      >
        Go to Top
      </Link>
    </Box>
  );
};

export default Footer;
