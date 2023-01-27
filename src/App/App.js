
import './App.css';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import MyWork from '../components/MyWork/MyWork';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Footer from '../components/Footer/Footer';
import AboutMe from '../components/AboutMe/AboutMe';
import { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen);

  return (
    <div className="App">
      <Header />
      <Hero />
      <MyWork setIsModalOpen={setIsModalOpen} />
      {isModalOpen ? <AboutMe setIsModalOpen={setIsModalOpen} /> : null}
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
