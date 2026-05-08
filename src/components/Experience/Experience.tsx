import { CalendarToday, LocationOn } from "@mui/icons-material";
import { Box, CardContent, Chip, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { experiencesData } from "../../data";
import {
  CompanyCard,
  CompanyHeader,
  CompanyName,
  ExperienceSection,
  JobDescription,
  JobDetails,
  JobTitle,
  SectionTitle,
  TechStack,
  TimelineConnector,
  TimelineContainer,
  TimelineContent,
  TimelineItem,
} from "./styled";

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle variant="h2" align="center">
            Professional Experience
          </SectionTitle>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            My journey from audio engineering to frontend development
          </Typography>
        </motion.div>

        <TimelineContainer>
          {experiencesData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <TimelineItem>
                <TimelineConnector current={exp.current} />
                <TimelineContent>
                  <CompanyCard current={exp.current}>
                    <CardContent sx={{ p: 4 }}>
                      <CompanyHeader>
                        <Box>
                          <CompanyName variant="h4">{exp.company}</CompanyName>
                          <JobTitle variant="h5" current={exp.current}>
                            {exp.position}
                          </JobTitle>
                        </Box>
                        {exp.current && (
                          <Chip
                            label="Current"
                            color="primary"
                            size="small"
                            sx={{ fontWeight: 600 }}
                          />
                        )}
                      </CompanyHeader>

                      <JobDetails>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            mb: 1,
                          }}
                        >
                          <CalendarToday sx={{ fontSize: "1rem" }} />
                          <Typography variant="body2" color="text.secondary">
                            {exp.period}
                          </Typography>
                        </Box>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <LocationOn sx={{ fontSize: "1rem" }} />
                          <Typography variant="body2" color="text.secondary">
                            {exp.location}
                          </Typography>
                        </Box>
                      </JobDetails>

                      <JobDescription>
                        {exp.description.map((item, idx) => (
                          <Typography
                            key={idx}
                            variant="body2"
                            component="li"
                            sx={{ mb: 1 }}
                          >
                            {item}
                          </Typography>
                        ))}
                      </JobDescription>

                      <TechStack>
                        {exp.techStack.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            variant="outlined"
                            sx={{
                              borderColor: exp.current
                                ? "primary.main"
                                : "grey.400",
                              color: exp.current
                                ? "primary.main"
                                : "text.secondary",
                            }}
                          />
                        ))}
                      </TechStack>
                    </CardContent>
                  </CompanyCard>
                </TimelineContent>
              </TimelineItem>
            </motion.div>
          ))}
        </TimelineContainer>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
