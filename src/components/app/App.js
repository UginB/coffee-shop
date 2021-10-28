import CoffeeLinks from '../coffee-links/coffee-links';
import MainSection from '../main-section/main-section';
import AboutSection from '../about/about';
import BestSection from '../best/best';
import FooterSection from '../footer/footer';

import './App.scss';

function App() {
  return (
    <div className="App">
      <CoffeeLinks/>
      <MainSection/>
      <AboutSection />
      <BestSection />
      <FooterSection />
    </div>
  );
}

export default App;
