import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  AboutContent,
  AboutSection,
  AboutText,
  SectionTitle,
  SkillChip,
  SkillsContainer,
  StatItem,
  StatLabel,
  StatNumber,
  StatsContainer,
} from "./styled";
import { languages, skills, stats } from "../../data/aboutData";

const About = () => {
  return (
    <AboutSection id="about">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle variant="h2" align="center">
            About Me
          </SectionTitle>
        </motion.div>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <AboutContent>
                <AboutText variant="body1" paragraph>
                  After years of working as a Sound Designer, I encountered the
                  captivating world of software engineering and discovered a
                  profound passion for programming. Today, I am a Frontend
                  Software Developer, transforming simple mock-ups into
                  semantic, responsive, reusable, scalable, and high-performing
                  applications.
                </AboutText>

                <AboutText variant="body1" paragraph>
                  With a strong emphasis on code quality and exceptional user
                  experiences, I am driven by curiosity and continually learning
                  new technologies and refining my skills. My unique background
                  in audio engineering brings a different perspective to
                  frontend development, focusing on harmony, rhythm, and user
                  experience flow.
                </AboutText>

                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" gutterBottom>
                    Languages
                  </Typography>
                  {languages.map((lang, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography variant="body2">{lang.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {lang.level}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </AboutContent>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Box sx={{ textAlign: "center", mb: 4 }}>
                <Avatar
                  sx={{
                    width: 200,
                    height: 200,
                    margin: "0 auto",
                    mb: 3,
                    border: "4px solid",
                    borderColor: "primary.main",
                  }}
                  src="/api/placeholder/200/200"
                  alt="Augusto Galuppo"
                />
              </Box>

              <SkillsContainer>
                <Typography variant="h6" gutterBottom align="center">
                  Technical Skills
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    justifyContent: "center",
                  }}
                >
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <SkillChip label={skill} />
                    </motion.div>
                  ))}
                </Box>
              </SkillsContainer>
            </motion.div>
          </Grid>
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <StatsContainer>
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <StatItem>
                    <StatNumber variant="h3">{stat.number}</StatNumber>
                    <StatLabel variant="body2">{stat.label}</StatLabel>
                  </StatItem>
                </Grid>
              ))}
            </Grid>
          </StatsContainer>
        </motion.div>
      </Container>
    </AboutSection>
  );
};

export default About;
