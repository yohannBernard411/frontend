import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';
import { useTranslation } from "react-i18next";

function ArticlesScreen(){
  const { t } = useTranslation();
  const shopList = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundImage: "linear-gradient(315deg, rgb(236, 234, 226), rgba(250, 250, 250, 0)), url('https://res.cloudinary.com/do3nu0tns/image/upload/v1598477047/qe7arwis6lwm6k8fplq6.jpg')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    marginTop: '-10rem',
    marginBottom: '-10rem',
    overflow: 'hidden',
    listStyle: 'none',
  }
  const listItems = {
    fontSize: '3rem',
    textDecoration: 'none',
    fontFamily: 'var(--secondary-font)',
  }
  
  return <div>
  <Header />
    <ul style={shopList}>
      <br />
      <Link to="/wool">
        <li style={listItems}>{t('articles.menu.wool')}</li>
      </Link>
      <Link to="/labels">
        <li style={listItems}>{t('articles.menu.labels')}</li>
      </Link>
      <Link to="/spitzberg">
        <li style={listItems}>{t('articles.menu.spitzberg')}</li>
      </Link>
      <br />
    </ul>
    <Footer />
  </div>
}

export default ArticlesScreen;
