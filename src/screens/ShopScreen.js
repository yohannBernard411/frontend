import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';
import { useTranslation } from "react-i18next";

function ShopScreen(){
  const { t } = useTranslation();
  const shopList = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundImage: "linear-gradient(315deg, rgb(236, 234, 226), rgba(250, 250, 250, 0)), url('https://res.cloudinary.com/do3nu0tns/image/upload/v1598476905/ehk0z0clp1g7juqalc2s.jpg')",
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
      <Link to={"/shop/" + "zero"}>
        <li style={listItems}>{t('shop.menu.zero')}</li>
      </Link>
      <Link to={"/shop/" + "accessory"}>
        <li style={listItems}>{t('shop.menu.accessory')}</li>
      </Link>
      <Link to={"/shop/" + "collection"}>
        <li style={listItems}>{t('shop.menu.collection')}</li>
      </Link>
      <br />
    </ul>
    <Footer />
  </div>
}

export default ShopScreen;
