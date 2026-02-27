import { Nav } from './component/Nav';
import { AboutMe } from './component/AboutMe';
import { Contact } from './component/Contact';
import { Footer } from './component/Footer';
import { Hero } from './component/Hero';
import { Projects } from './component/Projects';

export default function App() {
  return (
    <div className="app container">
      <Nav />
      <Hero />
      <main>
        <AboutMe />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
