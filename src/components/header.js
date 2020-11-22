import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from './Logo';
import Navbar from './Navbar';

function Header() {
  const header = {
    width: '100vw',
    height: '10rem',
    margin: '0',
    padding: '0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: '0',
    left: '0',
    zIndex: '5',
    overflow: 'hidden',
  }
  return <header style={header}>
    <Logo />
    <Navbar />
  </header>
}

export default Header;
