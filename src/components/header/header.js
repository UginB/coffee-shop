import './for-your-pleasure.scss'

const Header = (props) => {
    const {name} = props;
    return (
        <>
            <header className="forYourPleasure">
                <h1 className="title title_main">{name}</h1>
            </header>
        </>
    );
}
  
export default Header;