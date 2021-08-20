import './Navbar.css'

function Navbar() {
    return (
        <div className="SearchBar">
            <input placeholder="Rechercher un plat" />
            <button className="SearchButton">RECHERCHER</button>
        </div>
    );
}

export default Navbar;
