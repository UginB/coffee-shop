import './search-panel.scss'

const SearchPanel = (props) => {

    const buttonsData = [
        {country: 'Brazil'},
        {country: 'Kenya'},
        {country: 'Columbia'},
    ];

    const buttons = buttonsData.map(({country}) => {
        const active = props.filter === country;
        const clazz = active ? 'btn_active' : ''

        return (
            <button 
                className={`btn ${clazz}`}
                type='button'
                key={country}
                onClick={() => props.onFilter(country)}>
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
                    placeholder='start typing here...' />
            </div>
            <div className="search__filter">
                <div className="search__filter__text">Or filter</div>
                {buttons}
            </div>
        </section>
    );
    
}
  
export default SearchPanel;