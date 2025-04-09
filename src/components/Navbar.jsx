import React from 'react';
import {Link} from "react-router";

function Navbar(props) {
    const navbarStyle = {
        backgroundImage: 'url("https://images.unsplash.com/photo-1528834342297-fdefb9a5a92b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eWVsbG93JTIwZmxvd2VyfGVufDB8fDB8fHww")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '75px',  // Navbar yüksekliği
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };


    return (
        <nav className="navbar navbar-expand-lg" style={navbarStyle}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img
                        src="https://us.123rf.com/450wm/redgrphc/redgrphc2208/redgrphc220800143/189947057-beauty-vector-lotus-flowers-design-template-icon.jpg?ver=6"
                        alt="Çiçekçi Girl Logo"
                        style={{ width: '40px', height: '40px', marginRight: '10px' }}
                    />
                    Çiçekçi Girl
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link active" aria-current="page" href="#">Anasayfa</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/contact"} className="nav-link">İletişim</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/about"} className="nav-link">Hakkımızda</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;