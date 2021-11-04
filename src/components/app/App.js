import { Component } from 'react';
import nextId from "react-id-generator";

import CoffeeLinks from '../coffee-links/coffee-links';
import MainSection from '../main-section/main-section';
import AboutSection from '../about/about';
import BestSection from '../best/best';
import FooterSection from '../footer/footer';
import OurCoffee from '../pages/our-coffee/our-coffee';
import ForYourPleasure from '../pages/for-your-pleasure/for-your-pleasure';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {img: '/img/goods/AROMISTICO_Coffee1kg.png', name: 'AROMISTICO Coffee 1 kg', price: '10.73$', id: nextId()},
        {img: '/img/goods/PrestoCoffeeBeans1kg.png', name: 'Presto Coffee Beans 1 kg', price: '15.99$', id: nextId()},
        {img: '/img/goods/SolimoCoffeeBeans2kg.png', name: 'Solimo Coffee Beans 2 kg', price: '6.99$', id: nextId()}
      ]
    }
  }
  
  render() {
    const {data} = this.state;

    return (
      <div className="App">
        <CoffeeLinks 
          color='white' 
          section='header'/>
        <MainSection/>
        <OurCoffee />
        <ForYourPleasure />
        <AboutSection 
          topic='Us'/>
        <AboutSection 
          topic='our beans'/>
        <AboutSection 
          topic='it'/>
        <BestSection data={data}/>
        <FooterSection />
      </div>
    );
  }
}

export default App;
