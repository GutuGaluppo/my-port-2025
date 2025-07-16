import { ArrowDownward } from "@mui/icons-material";
import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { JumpingTonsLetters } from "../JumpingLetters";
import {
  HeroContent,
  HeroDescription,
  HeroSection,
  HeroTitle,
  ScrollIndicator,
} from "./styled";

const Hero = () => {
  const handleScrollToWork = () => {
    const element = document.querySelector("#work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // const handleScrollToContact = () => {
  //   const element = document.querySelector("#contact");
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <HeroSection id="home">
      <Container maxWidth="lg">
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroTitle variant="h1">{/* Gutu Galuppo */}</HeroTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <JumpingTonsLetters />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <HeroDescription variant="h6">
              I turn design into code, prioritizing clean architecture, smooth
              UX, elegant solutions, and reusable components.
            </HeroDescription>
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
