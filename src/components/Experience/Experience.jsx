import React from 'react';
import { Container, Typography, Box, Card, CardContent, Chip } from '@mui/material';
import { Work, LocationOn, CalendarToday } from '@mui/icons-material';
import { motion } from 'framer-motion';
import {
  ExperienceSection,
  SectionTitle,
  TimelineContainer,
  TimelineItem,
  TimelineConnector,
  TimelineContent,
  CompanyCard,
  CompanyHeader,
  CompanyName,
  JobTitle,
  JobDetails,
  JobDescription,
  TechStack,
} from './styled';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Loudly',
      position: 'Frontend Software Developer',
      period: '05/2022 - 02/2025',
      location: 'Berlin, Germany',
      description: [
        'Contributed to the implementation of cutting-edge AI music generation technology',
        'Enhanced application performance and reliability through state management updates',
        'Resolved issues with responsive layouts to ensure optimal user experiences on all devices',
        'Executed comprehensive code maintenance and refactoring to elevate code quality and system efficiency'
      ],
      technologies: ['React', 'TypeScript', 'RTK Query', 'Next.js', 'GraphQL'],
      current: true
    },
    {
      id: 2,
      company: 'Tilda',
      position: 'Full Stack Software Developer',
      period: '09/2021 - 03/2022',
      location: 'Berlin, Germany',
      description: [
        'Optimized and maintained the platform to ensure seamless performance',
        'Refactored code to improve quality and increase test coverage',
        'Developed and implemented an email notification manager for timely user updates',
        'Designed and integrated engaging web animations to enhance the user experience'
      ],
      technologies: ['React', 'Node.js', 'JavaScript', 'CSS3', 'Firebase'],
      current: false
    },
    {
      id: 3,
      company: 'SuperVista AG',
      position: 'Frontend Software Developer',
      period: '03/2019 - 08/2021',
      location: 'Brandenburg, Germany',
      description: [
        'Managed e-commerce platform, enabling users to search and purchase a wide range of glasses',
        'Refactored code to reduce loading and processing times',
        'Designed web animations to enhance visual effects and strengthen branding',
        'Gained key insights into tools and platforms through online courses and webinars'
      ],
      technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'E-commerce'],
      current: false
    },
    {
      id: 4,
      company: 'Multiple Companies',
      position: 'Sound Designer & Audio Director',
      period: '01/2003 - 10/2017',
      location: 'Brazil, Miami, Barcelona, Italy, Berlin',
      description: [
        'Sound designer, soundtrack composer, and audio director for multiple audiovisual productions',
        'Cartoon dubbing and voiceover for commercials - directing, recording, and acting',
        'Developed strong attention to detail and creative problem-solving skills',
        'Built experience in project management and client communication'
      ],
      technologies: ['Pro Tools', 'Logic Pro', 'Audio Engineering', 'Sound Design'],
      current: false
    }
  ];

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
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
            My journey from audio engineering to frontend development
          </Typography>
        </motion.div>

        <TimelineContainer>
          {experiences.map((exp, index) => (
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
                          <CompanyName variant="h5">
                            {exp.company}
                          </CompanyName>
                          <JobTitle variant="h6" current={exp.current}>
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
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                          <CalendarToday sx={{ fontSize: '1rem' }} />
                          <Typography variant="body2" color="text.secondary">
                            {exp.period}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <LocationOn sx={{ fontSize: '1rem' }} />
                          <Typography variant="body2" color="text.secondary">
                            {exp.location}
                          </Typography>
                        </Box>
                      </JobDetails>

                      <JobDescription>
                        {exp.description.map((item, idx) => (
                          <Typography key={idx} variant="body2" component="li" sx={{ mb: 1 }}>
                            {item}
                          </Typography>
                        ))}
                      </JobDescription>

                      <TechStack>
                        {exp.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            variant="outlined"
                            sx={{ 
                              borderColor: exp.current ? 'primary.main' : 'grey.400',
                              color: exp.current ? 'primary.main' : 'text.secondary'
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

