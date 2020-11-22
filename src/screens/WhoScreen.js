import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import { useTranslation } from "react-i18next";

function WhoScreen() {
  const { t } = useTranslation();
  const container = {
    width: '72%',
    overflowX: 'hidden',
    marginLeft: '14%',
    marginRight: '0',
    paddingLeft: '0',
    paddingRight: '0',
    textAlign: 'center',
  }
  const whoTitle = {
    color: 'var(--my-blue)',
    paddingTop: '15px',
    paddingBottom: '10px',
  }
  const whoPage = {
    textAlign: 'justify',
    fontFamily: 'var(--secondary-font)',
  }
  const imgCenter = {
    textAlign: 'center',
  }
  const homeWhoImg = {
    width: '100%',
    height: 'auto',
    marginBottom: '20px',
  }
  const whoListStyle = {
    listStyle: "inside url('https://res.cloudinary.com/do3nu0tns/image/upload/v1596704467/fmkbhzebi41m234lkoav.png')",
  }
  const whoList = {
    marginBottom: '15px',
    display: 'list-item',
  }
  const signature = {
    float: 'right',
    marginBottom: '80px',
  }
  return <div>
    <Header />
    <div style={container}>
      <h1 style={whoTitle}>{t('home.who.title')}</h1>
      <div style={whoPage}>
        <div style={imgCenter}>
          <img  style={homeWhoImg} src="http://res.cloudinary.com/do3nu0tns/image/upload/c_fill,h_500,w_900/twenozss89lby1vcxxxw" alt="Machine à coudre" />
        </div>
        <p>{t('home.who.texte1')}</p>
        <p>{t('home.who.texte2')}</p>
        <p>{t('home.who.texte3')}</p>
        <ul style={whoListStyle}>
          <li style={whoList}>{t('home.who.liste1')}
          </li>
          <li style={whoList}>{t('home.who.liste2')}
          </li>
          <li style={whoList}>{t('home.who.liste3')}
          </li>
        </ul>
        <p>{t('home.who.texte4')}
        </p>
        <p>{t('home.who.texte5')}
        </p>
        <p>{t('home.who.texte6')}
        </p>
        <p>{t('home.who.texte7')}</p>
        <p style={signature}>OcéNat</p>
      </div>
    </div>
    <Footer />
  </div>
}

export default WhoScreen;
