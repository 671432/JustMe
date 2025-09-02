import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/Layout.css';
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { AboutMe } from "./pages/AboutMe";
import { Socials } from "./pages/Socials";

const basename = "/JustMe/";

function App() {
  return (
    <Router basename={basename}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/projects"
          element={
            <Layout pageTitle=" ▒ Projects ▒ ">
              <Projects />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout pageTitle=" ▒ About Me ▒ ">
              <AboutMe />
            </Layout>
          }
        />
        <Route
          path="/socials"
          element={
            <Layout pageTitle=" ▒ Socials & Projects ▒ ">
              <Socials />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
