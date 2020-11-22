import React from 'react';
import { Link } from 'react-router-dom';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

function Navbar() {
  const navbar = {
    width: '50%',
    height: '10rem',
    margin: '0',
    padding: '0',
  }
  const upRight = {
    width: '200%',
    height: '20rem',
    borderRadius: '50%',
    backgroundImage: 'radial-gradient(red, yellow)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'relative',
    top: '-10rem',
    right: '25%',
  
  }
  const mainMenu = {
    fontFamily: 'var(--secondary-font)',
    position: 'relative',
    zIndex: '2',
    top: '-200%',
    height: '100%',
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '0',
    fontSize: '3rem',
  }
  const welcome = {

  }
  const shop = {

  }
  const articles = {

  }
  const burger = {
    fontSize: '4rem',
    fontWeight: 'bold',
  }
  const cross = {
    display: 'none',
    width: '4rem',
  }
  const burgerMenu = {
    width: '20rem',
    height: '20rem',
    position: 'absolute',
    transition: 'right 0.3s',
    right: '-25rem',
    backgroundColor: 'orange',
    borderRadius: '2rem',
    zIndex: '20',
  }
  const { t } = useTranslation();
  function handlerFR(){
    i18n
      .init({
        lng: "fr",
        fallbackLng: "fr"
      })
    document.getElementById("flag").style.backgroundImage= "url(http://res.cloudinary.com/do3nu0tns/image/upload/v1594636554/uhp1p9zd9r3r5ebdhgut.png)";
  }

  function handlerEN(){
    i18n
      .init({
        lng: "en",
        fallbackLng: "en"
      })
      document.getElementById("flag").style.backgroundImage= "url(http://res.cloudinary.com/do3nu0tns/image/upload/v1594636536/tnwihq9ujhejylxdoie7.png)";
  }

  function handlerES(){
    i18n
      .init({
        lng: "es",
        fallbackLng: "es"
      })
      document.getElementById("flag").style.backgroundImage= "url(http://res.cloudinary.com/do3nu0tns/image/upload/v1594636570/xiavqojbs4lkpl7gpiaw.png)";
  }

  function handlerBurger(){
    document.querySelector(".dashs").style.display = "none";
    document.querySelector(".cross").style.display = "block";
    document.querySelector(".burgerMenu").style.right = '5rem';
  }
  function handlerCross(){
    document.querySelector(".dashs").style.display = "block";
    document.querySelector(".cross").style.display = "none";
    document.querySelector(".burgerMenu").style.right = '-25rem';
  }
  return <nav style={navbar}>
    <div style={upRight}></div>
      <ul style={mainMenu}>
        <Link to="/welcomemenu">
          <li style={welcome}>{t('navbar.home')}</li>
        </Link>
        <Link to="/shopmenu">
        <li style={shop}>{t('navbar.shop')}</li>
        </Link>
        <Link to="/articlesmenu">
        <li style={articles}>{t('navbar.articles')}</li>
        </Link>
        <li style={burger}><i className="fas fa-bars dashs" onClick={ handlerBurger }></i><i style={cross} className="fas fa-times cross" onClick={ handlerCross }></i></li>
    </ul>
    <div style={burgerMenu} className="burgerMenu">
      <ul>
        <li id="flag">
          <h3>{t('navbar.lang')}</h3>
          <div onClick={handlerFR}>Français</div>
          <div onClick={handlerEN}>Anglais</div>
          <div onClick={handlerES}>Espagnol</div>
          </li>
        <li>{t('navbar.connection')}</li>
        <li>{t('navbar.cart')}</li>
      </ul>
    </div>
  </nav>
}

export default Navbar;
