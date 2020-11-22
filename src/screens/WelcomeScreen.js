import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';
import { useTranslation } from "react-i18next";

function WelcomeScreen(){
  const { t } = useTranslation();
  const welcomeList = {
    width: '100vw',
    marginLeft: '0',
    marginRight: '0',
    paddingLeft: '0',
    paddingRight: '0',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',            
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundImage: "linear-gradient(315deg, rgb(236, 234, 226), rgba(250, 250, 250, 0)), url('https://res.cloudinary.com/do3nu0tns/image/upload/v1598477019/nr9dylwpsjtwb3uco01a.jpg')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    marginTop: '-10rem',
    marginBottom: '-10rem',
    overflow: 'hidden',
    listStyle: 'none',
    fontSize: '3rem',
    textDecoration: 'none',
    fontFamily: 'var(--secondary-font)',
  }

  
  return <div>
  <Header />
    <ul style={welcomeList}>
      <br />
      <Link to="/who">
        <li>{t('home.welcome.who')}</li>
      </Link>
      <Link to="/cgv">
        <li>{t('home.welcome.cgv')}</li>
      </Link>
      <Link to="/contact">
        <li>{t('home.welcome.contact')}</li>
      </Link>
      <br />
    </ul>
    <Footer />
  </div>
}

export default WelcomeScreen;
