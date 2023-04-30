import logo from '../logo.svg';

export default function Navbar() {
    return (
        <nav>
            <img src={logo} className="nav--icons"/ >
                <h3 className = "nav--logo_text">ReactFacts</h3>
                <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}