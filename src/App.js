import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import RecentProjects from './components/RecentProjects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MainBody from './components/MainBody';

function App() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <section id='mainBody'>
        <MainBody />
      </section>
      <section id='aboutMe'>
        <AboutMe />
      </section>
      <section id='recentProjects'>
        <RecentProjects />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      <Footer />
    </div>
  );
}

export default App;
