import {
  Email,
  GitHub,
  LinkedIn,
  LocationOn,
  Phone,
  Send,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  CardContent,
  Container,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ContactCard,
  ContactForm,
  ContactIcon,
  ContactInfo,
  ContactSection,
  FormCard,
  SectionTitle,
  SubmitButton,
} from "./styled";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

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
      icon: <LocationOn />,
      title: "Location",
      value: "Berlin, Germany",
      link: null,
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSnackbar({
        open: true,
        message: "Please fill in all required fields",
        severity: "error",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSnackbar({
        open: true,
        message: "Please enter a valid email address",
        severity: "error",
      });
      return;
    }

    // Simulate form submission
    console.log("Form submitted:", formData);

    setSnackbar({
      open: true,
      message: "Thank you for your message! I'll get back to you soon.",
      severity: "success",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <ContactSection id="contact">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle variant="h2" align="center">
            Get In Touch
          </SectionTitle>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            Let's discuss your next project or just say hello
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
                Contact Information
              </Typography>

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
            </motion.div>
          </Grid>

          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <FormCard>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                    Send me a message
                  </Typography>

                  <ContactForm component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          multiline
                          rows={4}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <SubmitButton
                          type="submit"
                          variant="contained"
                          size="large"
                          startIcon={<Send />}
                          fullWidth
                        >
                          Send Message
                        </SubmitButton>
                      </Grid>
                    </Grid>
                  </ContactForm>
                </CardContent>
              </FormCard>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </ContactSection>
  );
};

export default Contact;
