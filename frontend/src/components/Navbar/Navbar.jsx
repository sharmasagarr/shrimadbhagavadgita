import "./Navbar.css";

function Navbar() {
    return (
        <div className="navBar outfit">
            <div className="brand baloo">' श्रीमद्भगवद्गीता '</div>
            <div className="nav-items">
                <div><button className="underline-effect">Home</button></div>
                <div><button className="underline-effect">Explore</button></div>
                <div><button className="underline-effect">About</button></div>
                <div>
                    <button className="collapsed">
                        <img src="/images/hamburger-icon.svg" alt="collapsed" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
