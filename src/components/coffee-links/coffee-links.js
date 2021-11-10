import { Component } from 'react';
import Logo from '../logo/logo';

import './coffee-links.scss';

class CoffeeLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'white',
      section: 'footer'
    }
  }

  componentDidMount() {
    this.setState({color: this.props.color, section: this.props.section})
  }

  render() {
    const {onVisibleSection} = this.props;

    let linkItemsClasses = 'links__items', linkSectionClasses = 'links';
    if (this.state.color === 'black') {linkItemsClasses += ' links__items_black'};
    if (this.state.section === 'footer') {linkSectionClasses += ' links_footer'}
    
    return (
      <nav className={linkSectionClasses}>
          <ul className={linkItemsClasses}>
              <li className="links__item"
                onClick={() => onVisibleSection('main')}>
                  <Logo color={this.state.color}/> 
                  Coffee house
              </li>
              <li className="links__item"
                onClick={() => onVisibleSection('OurCoffee')}>
                  Our coffee</li>
              <li className="links__item"
                onClick={() => onVisibleSection('ForYourPleasure')}>
                  For your pleasure</li>
          </ul>
      </nav>
    );
  }
}

export default CoffeeLinks;