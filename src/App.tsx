import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import {
  About,
  Contact,
  Experience,
  Footer,
  Navbar,
  Hero,
  Music,
  Work,
} from "./components";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          background: `linear-gradient(135deg, rgb(18,20,25) 0%, rgb(18,25,35) 100%)`,
        }}
      >
        <Navbar />
        <Hero />
        <About />
        <Work />
        <Music />
        <Experience />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
