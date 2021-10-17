import {Link} from 'react-router-dom';
const NavBar = () => {
    const styles = {
        color: "white",
        backgroundColor:"#f1356d", 
        borderRadius: "2px"
    }
    return ( 
        <nav className="navbar">
            <h1>Swaggp Blog</h1>
            <ul className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/create">New Blog</Link>

            </ul>
        </nav>
     );
}
 
export default NavBar;