import { Component } from 'react';

import './search-panel.scss'

class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        const buttonsData = [
            {country: 'Brazil'},
            {country: 'Kenya'},
            {country: 'Columbia'},
        ];
    
        const buttons = buttonsData.map(({country}) => {
            const active = this.props.filter === country;
            const clazz = active ? 'btn_active' : ''
    
            return (
                <button 
                    className={`btn ${clazz}`}
                    type='button'
                    key={country}
                    onClick={() => this.props.onFilter(country)}>
                        {country}
                </button>
            )
        })

        return (
            <section className="search">
                <div className="search__input">
                    <label htmlFor="search">Lookiing for</label>
                    <input 
                        id='search' 
                        type="text"
                        placeholder='start typing here...' 
                        onChange={this.onUpdateSearch}/>
                </div>
                <div className="search__filter">
                    <div className="search__filter__text">Or filter</div>
                    {buttons}
                </div>
            </section>
        );
    }
    
}
  
export default SearchPanel;