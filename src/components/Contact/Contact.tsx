import {
  Email,
  GitHub,
  LinkedIn,
  Phone,
} from "@mui/icons-material";
import { Box, CardContent, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  ContactCard,
  ContactIcon,
  ContactInfo,
  ContactSection,
  SectionTitle,
} from "./styled";
import Form from "../Form";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Email />,
      title: "Email",
      value: "galuppodev@gmail.com",
      link: "mailto:galuppodev@gmail.com",
    },
    {
      icon: <Phone />,
      title: "Phone",
      value: "+49 179 611 0375",
      link: "tel:+4917961103750",
    },
    {
      icon: <LinkedIn />,
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://linkedin.com/in/augusto-galuppo",
    },
    {
      icon: <GitHub />,
      title: "GitHub",
      value: "View my code",
      link: "https://github.com/gutugaluppo",
    },
  ];

  return (
    <ContactSection id="contact">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle variant="h1" align="center">
            Get In Touch
          </SectionTitle>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
            fontFamily="Instrument Serif"
          >
            Let's discuss your next project or just say hello
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          <Grid>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
                Contact Information
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ContactCard>
                      <CardContent sx={{ p: 3 }}>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 2 }}
                        >
                          <ContactIcon>{info.icon}</ContactIcon>
                          <ContactInfo>
                            <Typography
                              variant="subtitle2"
                              color="text.secondary"
                            >
                              {info.title}
                            </Typography>
                            {info.link ? (
                              <Typography
                                component="a"
                                href={info.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="body1"
                                sx={{
                                  color: "primary.main",
                                  textDecoration: "none",
                                  "&:hover": {
                                    textDecoration: "underline",
                                  },
                                }}
                              >
                                {info.value}
                              </Typography>
                            ) : (
                              <Typography variant="body1">
                                {info.value}
                              </Typography>
                            )}
                          </ContactInfo>
                        </Box>
                      </CardContent>
                    </ContactCard>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </ContactSection>
  );
};

export default Contact;
