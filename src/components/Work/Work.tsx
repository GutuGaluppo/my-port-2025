import { Code, Launch } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FilterTabs,
  ProjectActions,
  ProjectCard,
  ProjectContent,
  ProjectDescription,
  ProjectImage,
  ProjectTitle,
  SectionTitle,
  TechStack,
  WorkSection,
} from "./styled";

const Work = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Multi-Step Form",
      description:
        "A responsive multi-step form built with React and Material UI, featuring form validation and smooth transitions.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Material UI", "JavaScript"],
      category: "react",
      demoUrl: "https://codesandbox.io/s/multi-step-form-frontend-mentor",
      codeUrl: "https://codesandbox.io/s/multi-step-form-frontend-mentor",
      platform: "CodeSandbox",
    },
    {
      id: 2,
      title: "React Calendar Mobile",
      description:
        "Mobile-first calendar component with touch gestures and responsive design.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "CSS3", "JavaScript"],
      category: "react",
      demoUrl: "https://codesandbox.io/s/react-calendar-mobile",
      codeUrl: "https://codesandbox.io/s/react-calendar-mobile",
      platform: "CodeSandbox",
    },
    {
      id: 3,
      title: "GlassMorphism Design",
      description:
        "Modern glassmorphism UI components with backdrop blur effects and elegant animations.",
      image: "/api/placeholder/400/250",
      technologies: ["CSS3", "HTML5", "JavaScript"],
      category: "css",
      demoUrl: "https://codepen.io/gutugaluppo/pen/glassmorphism",
      codeUrl: "https://codepen.io/gutugaluppo/pen/glassmorphism",
      platform: "CodePen",
    },
    {
      id: 4,
      title: "Music Player Interface",
      description:
        "Beautiful music player interface with light mode design and smooth animations.",
      image: "/api/placeholder/400/250",
      technologies: ["CSS3", "HTML5", "JavaScript"],
      category: "css",
      demoUrl: "https://codepen.io/gutugaluppo/pen/music-player",
      codeUrl: "https://codepen.io/gutugaluppo/pen/music-player",
      platform: "CodePen",
    },
    {
      id: 5,
      title: "REST API Testing Tool",
      description:
        "Interactive tool for testing REST APIs with request/response visualization.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "JavaScript"],
      category: "fullstack",
      demoUrl: "https://codesandbox.io/s/rest-api-testing",
      codeUrl: "https://codesandbox.io/s/rest-api-testing",
      platform: "CodeSandbox",
    },
    {
      id: 6,
      title: "File Upload Component",
      description:
        "Drag and drop file upload component with progress tracking and preview.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "TypeScript", "CSS3"],
      category: "react",
      demoUrl: "https://codesandbox.io/s/file-upload",
      codeUrl: "https://codesandbox.io/s/file-upload",
      platform: "CodeSandbox",
    },
  ];

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "react", label: "React" },
    { value: "css", label: "CSS/Design" },
    { value: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const handleFilterChange = (event, newValue) => {
    setFilter(newValue);
  };

  return (
    <WorkSection id="work">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle variant="h2" align="center">
            My Work
          </SectionTitle>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            A collection of projects showcasing my frontend development skills
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FilterTabs>
            <Tabs
              value={filter}
              onChange={handleFilterChange}
              centered
              variant="scrollable"
              scrollButtons="auto"
            >
              {categories.map((category) => (
                <Tab
                  key={category.value}
                  label={category.label}
                  value={category.value}
                />
              ))}
            </Tabs>
          </FilterTabs>
        </motion.div>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {filteredProjects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard>
                  <ProjectImage>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <Box className="overlay">
                      <Button
                        variant="contained"
                        startIcon={<Launch />}
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Demo
                      </Button>
                    </Box>
                  </ProjectImage>

                  <ProjectContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        mb: 1,
                      }}
                    >
                      <ProjectTitle variant="h6">{project.title}</ProjectTitle>
                      <Chip
                        label={project.platform}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    </Box>

                    <ProjectDescription variant="body2">
                      {project.description}
                    </ProjectDescription>

                    <TechStack>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          variant="outlined"
                        />
                      ))}
                    </TechStack>

                    <ProjectActions>
                      <Button
                        size="small"
                        startIcon={<Launch />}
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </Button>
                      <Button
                        size="small"
                        startIcon={<Code />}
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </Button>
                    </ProjectActions>
                  </ProjectContent>
                </ProjectCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </WorkSection>
  );
};

export default Work;
