import { Component } from 'react';

import AboutSection from '../../about/about';
import SearchPanel from '../search-panel/search-panel';
import CoffeeItems from '../../coffee-items/coffee-items';

import './our-coffee.scss'

class OurCoffee extends Component {
    constructor(props) {
        super(props);
        this.state = {
          filter: 'all',
          term: '',
        }
    }

    onFilter = (filter) => {
        this.setState({filter});
    }
    
    filterEmp = (items, filter) => {
        switch (filter) {
          case 'moreThan1000': 
            return items.filter(item => item.salary > 1000) 
          case 'increase':
            return items.filter(item => item.increase)
          default:
            return items
        }
    }
    
    searchEmp = (items, term) => {
        if (term.length === 0) {
          return items;
        }
    
        return items.filter(item => {
          return item.name.indexOf(term) > -1
        })
    }
    
    onUpdateSearch = (term) => {
        this.setState({term});
    }

    render() {
        const {data} = this.props;
        const {term, filter} = this.state;

        const visibleData = this.filterEmp(this.searchEmp(data, term), filter);

        return (
            <>
                <header className="ourCoffee">
                    <h1 className="title title_main">Our Coffee</h1>
                </header>
                <AboutSection 
                    topic='our beans'/>
                <SearchPanel 
                    onFilter={this.onFilter} 
                    onUpdateSearch={this.onUpdateSearch}
                    filter={filter}/>
                <CoffeeItems 
                    data={data}
                    best={false}/>
                <AboutSection 
                    topic='it'/>
            </>
        );
    }
}
  
export default OurCoffee;