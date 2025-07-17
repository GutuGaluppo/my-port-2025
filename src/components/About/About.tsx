import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
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
  VerticalText,
} from "./styled";
import picture from "../../assets/gutu_pic.png";

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
            Hi, I'm Gutu Galuppo!
            <br />
            Sound Designer &
            <br />
            Software Engineer
          </SectionTitle>
        </motion.div>

        <Grid container spacing={6} alignItems="center">
          {/* <Grid item xs={12} md={6}> */}
          <VerticalText>A SMALL SUMMARY ABOUT ME</VerticalText>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ width: "100%" }}
          >
            <AboutContent>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Box sx={{ textAlign: "center", mb: 4 }}>
                  <Box
                    sx={{
                      position: "relative",
                      width: 250,
                      height: 250,
                      margin: "80px",
                      borderRadius: "5%",
                      backgroundImage: `url(${picture})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      zIndex: 2,
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: -50,
                        left: -50,
                        width: "300px",
                        height: "300px",
                        border: "2px solid",
                        borderRadius: "5%",
                        zIndex: 1,
                      },
                    }}
                    // src="/api/placeholder/200/200"
                    // alt="Augusto Galuppo"
                  />
                </Box>
              </motion.div>
              <Box
                sx={{
                  maxWidth: "700px",
                  color: "primary.contrastText",
                  textAlign: "right",
                  // textAlign: "justify",
                }}
              >
                <AboutText>
                  After years of working as a{" "}
                  <a
                    href="https://soundcloud.com/gutu_galuppo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sound Designer
                  </a>
                  , I encountered the captivating world of software engineering
                  and discovered a profound passion for programming. Today, I am
                  a Frontend Software Developer, transforming simple mock-ups
                  into semantic, responsive, reusable, scalable, and
                  high-performing applications.
                </AboutText>

                <AboutText>
                  With a strong emphasis on code quality and exceptional user
                  experiences, I am driven by curiosity and continually learning
                  new technologies and refining my skills. My unique background
                  in audio engineering brings a different perspective to
                  frontend development, focusing on harmony, rhythm, and user
                  experience flow.
                </AboutText>
              </Box>
            </AboutContent>
          </motion.div>
          {/* </Grid> */}

          {/* <Grid item xs={12} md={6}> */}
          {/* <motion.div
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
          </motion.div> */}
        </Grid>

        {/* <motion.div
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
        </motion.div> */}
      </Container>
    </AboutSection>
  );
};

export default About;
