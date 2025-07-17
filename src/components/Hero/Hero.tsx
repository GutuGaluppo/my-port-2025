import { ArrowDownward } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { JumpingTonsLetters } from "../JumpingLetters";
import {
  HeroContent,
  HeroDescription,
  HeroSection,
  ScrollIndicator,
  TopLight,
} from "./styled";

const Hero = () => {
  const handleScrollToWork = () => {
    const element = document.querySelector("#work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroSection id="home">
      <TopLight />
      <HeroContent>
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
          <HeroDescription variant="h4">
            From Sound Designer to Software Engineer.
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
    </HeroSection>
  );
};

export default Hero;
