import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  const logo = {
    width: '15rem',
    height: '15rem',
    position: 'relative',
    left: '0',
    top: '2rem',
  }
  const upLeft = {
    width: '20rem',
    height: '20rem',
    borderRadius: '50%',
    backgroundImage: 'radial-gradient(red, yellow)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'relative',
    top: '-10rem',
    left: '-6rem',
  }
  const logoImg = {
    width: '12rem',
    height: '10rem',
    position: 'relative',
    top: '-20rem',
    left: '0',
  }
  return <div style={logo}>
    <div style={upLeft}></div>
    <Link to="/">
      <img src="https://zupimages.net/up/20/45/d7hl.png" alt="Logo" style={logoImg} />
    </Link>
  </div>
}

export default Logo;
