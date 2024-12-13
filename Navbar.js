import React from 'react';
import logo from './logo-black-1.png.png';
import Star from './Frame.png';

function Navbar() {
    const navbarStyle = {
        fontFamily: 'monospace',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: '1em',
        color: '#1D1D1B',
        border: '1px solid #707070',
        height: '3.7em',
    };

    const linkStyle = {
        fontFamily: 'monospace',
        color: '#1D1D1B',
        textDecoration: 'underline wavy',
        fontSize: '1.2em',
        margin: '0 12px',
    };

    const logoStyle = {
        height: '40px',
        marginLeft: '35.5em',
    };

    const StarStyle = {
        height: '5.6em',
        marginRight: '36.8em',
        borderLeft: '0.2em solid #707070',
    };

    const linkStyleleft = {
        fontFamily: 'monospace',
        color: '#1D1D1B',
        textDecoration: 'underline wavy',
        fontSize: '1.2em',
        marginLeft: '31em',
    };

    return (
        <div style={navbarStyle}>
            <a href="/" style={linkStyle}>Home</a>
            <a href="/pages" style={linkStyle}>Pages</a>
            <a href="/team"  style={linkStyle}>Team</a>
            <a href="/footer" style={linkStyle}>Footer</a>
            <img className='logostyle' style={logoStyle} src={logo} alt="Logo" />
            <a style={linkStyleleft}> Cart=0    Search</a>
            <img style={StarStyle} src={Star} alt="Star" />
        </div>
    );
}

export default Navbar;