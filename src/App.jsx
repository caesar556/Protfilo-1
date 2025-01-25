import { NavBar, Hero, About, Story, Projects, Contact, Tech, Footer } from './components';

const App = () => {
  return (
    <div className="bg-primary">
      <div>
        <NavBar />
        <Hero />
      </div>
      <About />
      <Story />
      <Projects />
      <Contact />
      <Tech />
      <Footer />
    </div>
  );
};

export default App;
