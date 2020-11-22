import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import dotenv, { config } from 'dotenv';

dotenv.config();

const Footer = () => {
  const footer = {
    position: 'sticky',
    bottom: '0',
    width: '100vw',
    height: '10rem',
    margin: '0',
    padding: '0',
    overflow: 'hidden',
  }
  const downRight = {
    width: '140%',
    height: '200%',
    backgroundImage: 'radial-gradient(red, yellow)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderRadius: '50%',
    position: 'relative',
    top: '0',
    right: '-35%',
    
  }
  const mainIconMenu = {
    width: '50%',
    height: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    top: '-200%',
    right: '-50%',
    listStyleType: 'none',
    fontSize: '3rem',
  }
  const avatar = {
    width: '4rem',
    height: '4rem',
    fontSize: '4rem',
    cursor: 'pointer',
    textAlign: 'center',
  }
  const shoppingCart = {
    color: 'green',
    cursor: 'pointer',
  }
  const facebook = {
    color: '#3b5998',
    cursor: 'pointer',
  }
  const instagram = {
    color:  '#8a3ab9',
    cursor: 'pointer',
  }
  const subMenu = {
    position: 'absolute',
    right: '50rem',
    backgroundColor: 'orange',
    borderRadius: '1rem',
    transition: 'top 0.3s',
  }



  //handlers
  const handlerDeconnection = () => {
    if (window.confirm("Etes vous sûr de vouloir vous déconnecter?")) {
    Cookies.remove('userInfo');
    window.location = "/";
    }
  }
  const handlerAvatar = () => {
    const dropDownList = document.querySelector('.subMenu');
    dropDownList.classList.toggle('closeConnection');
    dropDownList.classList.toggle('openConnection');
  }

  //injections
  const connectMenu1 = <div style={subMenu} className="subMenu closeConnection">
    <h3>Connection</h3>
    <ul>
      <li>Editer profil</li>
      <li onClick={handlerDeconnection}>Se déconnecter</li>
    </ul>
  </div>
  const connectMenu2 = <div style={subMenu} className="subMenu closeConnection">
    <h3>Connection</h3>
    <ul>
      <Link to="/signin">
        <li><i class="far fa-envelope"></i> Se connecter par Mail</li>
      </Link>
      <li><a href="/auth/facebook"><i class="fab fa-facebook-square"></i> Se connecter par Facebook</a></li>
      <li><a href="/auth/google"><i class="fab fa-google-plus-square"></i> Se connecter par Google</a></li>
    </ul>
  </div>



//rendu
  return <footer style={footer}>
    <div style={downRight}></div>
    <ul style={mainIconMenu}>
      <li style={avatar}><i className="fas fa-user-tie" onClick={handlerAvatar}></i></li>
      <Link to="/cart">
        <li style={shoppingCart}><i className="fas fa-shopping-cart"></i></li>
      </Link>
      <a target="_blank" href="https://www.facebook.com/OceNat">
        <li style={facebook}><i className="fab fa-facebook"></i></li>
      </a>
      <a target="_blank" href="https://www.instagram.com/ocenat.creations/?hl=fr">
        <li style={instagram}><i className="fab fa-instagram"></i></li>
      </a>
    </ul>
    {Cookies.get('userInfo') ? connectMenu1 : connectMenu2}
  </footer>
}

export default Footer;
