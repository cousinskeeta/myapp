import Subscribe from "./Subscribe"
import Claim from "./Claim"
import Connect from "./Connect"

const  Navbar = () => {
    return (
        <nav className= "navbar">
                <div className="left-button">
                    <Subscribe />
                </div>
                <div className="center-button">
                    <Claim />
                </div>
                <div className="right-button">
                    <Connect />
                </div>
        </nav>
    )
}

export default Navbar;