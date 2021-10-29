import { Component } from 'react';
import Logo from '../logo/logo';

import './coffee-links.scss';

class CoffeeLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'white'
    }
  }

  componentDidMount() {
    this.setState({color: this.props.color})
  }

  render() {
    return (
      <nav className="links">
          <ul className="links__items">
              <li className="links__item">
                <Logo color={this.state.color}/> 
                Coffee house
              </li>
              <li className="links__item">Our coffee</li>
              <li className="links__item">For your pleasure</li>
          </ul>
      </nav>
    );
  }
}

export default CoffeeLinks;