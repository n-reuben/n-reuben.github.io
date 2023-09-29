// Sections
import Blog from './sections/blog';
import About from './sections/about';
import Contact from './sections/contact';
import HomeSection from './sections/home';
import Portfolio from './sections/portfolio';
import QuickLinks from './sections/quicklinks';

// -------------------

function Home() {
  return (
    <>
      <HomeSection />
      <QuickLinks />
      <About />
      <Portfolio />
      <Blog />
      <Contact />
    </>
  );
}

export default Home;
