import { CssBaseline, ThemeProvider } from "@mui/material";
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
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Work />
        <Music />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
