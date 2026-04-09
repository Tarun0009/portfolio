import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import GitHubActivity from "./components/GitHubActivity";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Projects />
      <GitHubActivity />
      <Contact />
      <Footer />
    </main>
  );
}
