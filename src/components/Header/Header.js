import './Header.css'

function Header(){
    return (
        <div className="header">
                <div className="header-logo">
                    <span><h2 className="header-name">Valerie Yue</h2></span>
                </div>
                <div className="header-container">
                    <div className="nav-item"><a href="#about">About</a></div>
                    <div className="nav-item"><a href="#projects">Projects</a></div>
                    <div className="nav-item"><a href="#skills">Skills</a></div>
                </div>
        </div>
    )
}

export default Header;