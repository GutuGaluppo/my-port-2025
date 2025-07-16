import React from 'react';
import { Container, Typography, Grid, Box, Card, CardContent } from '@mui/material';
import { PlayArrow, MusicNote, Headphones } from '@mui/icons-material';
import { motion } from 'framer-motion';
import {
  MusicSection,
  SectionTitle,
  MusicDescription,
  SoundCloudContainer,
  MusicCard,
  MusicIcon,
  MusicTitle,
  MusicText,
} from './styled';

const Music = () => {
  const musicHighlights = [
    {
      icon: <MusicNote />,
      title: 'Sound Design Background',
      description: 'Over 15 years of experience in audio production, sound design, and music composition for various audiovisual projects.'
    },
    {
      icon: <Headphones />,
      title: 'Audio Engineering',
      description: 'Professional experience in recording, mixing, and mastering audio for commercials, cartoons, and multimedia productions.'
    },
    {
      icon: <PlayArrow />,
      title: 'Creative Process',
      description: 'My musical background brings a unique perspective to frontend development, focusing on rhythm, harmony, and user experience flow.'
    }
  ];

  return (
    <MusicSection id="music">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle variant="h2" align="center">
            Music & Audio
          </SectionTitle>
          <MusicDescription variant="h6" align="center">
            From sound design to frontend development - exploring the harmony between audio and code
          </MusicDescription>
        </motion.div>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {musicHighlights.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <MusicCard>
                  <CardContent sx={{ textAlign: 'center', p: 4 }}>
                    <MusicIcon>
                      {item.icon}
                    </MusicIcon>
                    <MusicTitle variant="h6" gutterBottom>
                      {item.title}
                    </MusicTitle>
                    <MusicText variant="body2">
                      {item.description}
                    </MusicText>
                  </CardContent>
                </MusicCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <SoundCloudContainer>
            <Typography variant="h5" align="center" gutterBottom sx={{ mb: 4 }}>
              Listen to My Music
            </Typography>
            
            {/* SoundCloud Embed - Grooweria Track */}
            <Box sx={{ mb: 4 }}>
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1234567890&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                title="Grooweria - Gutu Galuppo"
              />
            </Box>

            {/* Alternative: Direct link to SoundCloud profile */}
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                Explore more of my musical journey
              </Typography>
              <Box
                component="a"
                href="https://soundcloud.com/gutu_galuppo"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  color: 'primary.main',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                <PlayArrow />
                Visit my SoundCloud Profile
              </Box>
            </Box>
          </SoundCloudContainer>
        </motion.div>
      </Container>
    </MusicSection>
  );
};

export default Music;

