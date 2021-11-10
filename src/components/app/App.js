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
      ],
        visibleSection: 'main'
    }
  }

  onVisibleSection = (visibleSection) => {
    this.setState({visibleSection});
  }

  render() {
    const {data, visibleSection} = this.state;
    let mainPageVis, ourCoffeePageVis, forYourPleasurePageVis;

    switch(visibleSection) {
      case 'main':
        mainPageVis = true;
        ourCoffeePageVis = false;
        forYourPleasurePageVis = false;
        break;
      case 'OurCoffee':
        mainPageVis = false;
        ourCoffeePageVis = true;
        forYourPleasurePageVis = false;
        break;
      case 'ForYourPleasure':
        mainPageVis = false;
        ourCoffeePageVis = false;
        forYourPleasurePageVis = true;
        break; 
      default: ;
    }
    
    return (
      <div className="App">
        <CoffeeLinks 
          color='white' 
          section='header'
          onVisibleSection={this.onVisibleSection}/>
        <MainSection 
          data={data} 
          visible={mainPageVis}/>
        <OurCoffee 
          data={data} 
          visible={ourCoffeePageVis}/>
        <ForYourPleasure 
          data={data} 
          visible={forYourPleasurePageVis}/>
        <FooterSection 
          onVisibleSection={this.onVisibleSection}/>
      </div>
    );
  }
}

export default App;