import { Component } from 'react';
import nextId from "react-id-generator";

import CoffeeLinks from '../coffee-links/coffee-links';
import MainSection from '../main-section/main-section';
import FooterSection from '../footer/footer';
import OurCoffee from '../pages/our-coffee/our-coffee';
import ForYourPleasure from '../pages/for-your-pleasure/for-your-pleasure';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {img: '/img/goods/AROMISTICO_Coffee1kg.png', country: 'Kenya', name: 'AROMISTICO Coffee 1 kg', price: '10.73$', id: nextId()},
        {img: '/img/goods/PrestoCoffeeBeans1kg.png', country: 'Columbia', name: 'Presto Coffee Beans 1 kg', price: '15.99$', id: nextId()},
        {img: '/img/goods/SolimoCoffeeBeans2kg.png', country: 'Brazil', name: 'Solimo Coffee Beans 2 kg', price: '6.99$', id: nextId()},
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
        <MainSection data={data}/>
        <OurCoffee data={data}/>
        <ForYourPleasure data={data}/>
        <FooterSection />
      </div>
    );
  }
}

export default App;