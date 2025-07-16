import React from 'react';
import { Typography, Button, Container, Box } from '@mui/material';
import { ArrowDownward, Work, Email } from '@mui/icons-material';
import { motion } from 'framer-motion';
import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  CTAButton,
  ScrollIndicator,
} from './styled';

const Hero = () => {
  const handleScrollToWork = () => {
    const element = document.querySelector('#work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection id="home">
      <Container maxWidth="lg">
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroTitle variant="h1">
              Frontend Software
              <br />
              <span style={{ color: '#1976d2' }}>Developer</span>
            </HeroTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroSubtitle variant="h4">
              From audio to frontend engineering
            </HeroSubtitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <HeroDescription variant="h6">
              I turn design into code, prioritizing clean architecture, smooth UX, 
              elegant solutions, and reusable components.
            </HeroDescription>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
              <CTAButton
                variant="contained"
                size="large"
                startIcon={<Work />}
                onClick={handleScrollToWork}
              >
                View My Work
              </CTAButton>
              <CTAButton
                variant="outlined"
                size="large"
                startIcon={<Email />}
                onClick={handleScrollToContact}
              >
                Get In Touch
              </CTAButton>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <ScrollIndicator onClick={handleScrollToWork}>
              <ArrowDownward />
              <Typography variant="caption">Scroll to explore</Typography>
            </ScrollIndicator>
          </motion.div>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default Hero;

