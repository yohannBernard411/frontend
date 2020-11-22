import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

function CgvScreen() {
  const { t } = useTranslation();
  const container = {
    overflowX: 'hidden',
  }
  const cgvTitle = {
    color: 'var(--my-blue)',
    paddingTop: '15px',
    paddingBottom: '10px',
  }
  const page = {
    width: '100%',
    padding: '0 7%',
    fontFamily: 'var(--secondary-font)',
  }
  const space_img = {
    width: '100%',
  }
  const img = {
    width: '86%',
    margin: '0 auto',
  }
  const justifyText = {
    textAlign: 'justify',
    width: '86%',
  }
  
  return <div>
    <Header />
    <div style={container}>
      <h1 style={cgvTitle}>{t("home.condition.title")}</h1>
      <div style={page}>
        <div style={space_img}>
          <img style={img} src="http://res.cloudinary.com/do3nu0tns/image/upload/c_fill,h_500,w_900/bfr68apqqttfr6pnfp0b" alt="Conditions" />
        </div>
        <p style={justifyText}>{t('home.description')}</p>
        <p style={justifyText}>{t("home.condition.texte1")}</p>
        <p style={justifyText}>{t("home.condition.texte2")}</p>
        <p style={justifyText}>{t("home.condition.texte3")}</p>
        <p style={justifyText}>{t("home.condition.texte4")}</p>
        <p style={justifyText}>{t("home.condition.texte5")}</p>
        <p style={justifyText}>{t("home.condition.texte6")}</p>
        <p style={justifyText}>{t("home.condition.texte7")}</p>
        <p style={justifyText}>{t("home.condition.texte8")}</p>
        <p style={justifyText}>{t("home.condition.texte9")}</p>
        <p style={justifyText}>{t("home.condition.texte10")}</p>
        <p style={justifyText}>{t("home.condition.texte11")} </p>
        <h2>{t("home.condition.soustitre1")}</h2>
        <p style={justifyText}>{t("home.condition.texte12")} </p>
        <h2>{t("home.condition.soustitre2")}</h2>
        <p style={justifyText}>{t("home.condition.texte13")}</p>
        <p style={justifyText}>{t("home.condition.texte14")} </p>
        <Link to="/cgv">
          <p style={justifyText}>{t("home.condition.texte15")}</p>
        </Link>
        <p style={justifyText}>{t("home.condition.texte16")}</p>
        <p style={justifyText}>{t("home.condition.texte17")}</p>
        <p style={justifyText}>{t("home.condition.texte18")}</p>
        <h2>{t("home.condition.soustitre3")}</h2>
        <p style={justifyText}>{t("home.condition.texte19")}</p>
        <h2>{t("home.condition.soustitre4")}</h2>
        <p style={justifyText}>{t("home.condition.texte20")}</p>
        <p style={justifyText}><strong>{t("home.condition.strong1")}</strong></p>
        <p style={justifyText}>{t("home.condition.texte21")}</p>
        <h2>{t("home.condition.soustitre5")}</h2>
        <p style={justifyText}>{t("home.condition.texte22")}</p>
        <h2>{t("home.condition.soustitre6")}</h2>
        <p style={justifyText}>{t("home.condition.texte23")}</p>
        <h2>{t("home.condition.soustitre7")}</h2>
        <p style={justifyText}>{t("home.condition.texte24")}</p>
        <h2>{t("home.condition.soustitre8")}</h2>
        <p style={justifyText}>{t("home.condition.texte25")}</p>
        <h2>{t("home.condition.soustitre9")}</h2>
        <p style={justifyText}>{t("home.condition.texte26")}</p>
        <h2>{t("home.condition.soustitre10")}</h2>
        <p style={justifyText}>{t("home.condition.texte27")}</p>
        <p style={justifyText}>{t("home.condition.texte27bis")}</p>
        <p style={justifyText}>{t("home.condition.texte27ter")}</p>
        <h2>{t("home.condition.soustitre11")}</h2>
        <p style={justifyText}>{t("home.condition.texte28")}</p>
        <h2>{t("home.condition.soustitre12")}</h2>
        <p style={justifyText}>{t("home.condition.texte29")}</p>
        <h2>{t("home.condition.soustitre13")}</h2>
        <p style={justifyText}>{t("home.condition.texte30")}</p>
        <h2>{t("home.condition.soustitre14")}</h2>
        <p style={justifyText}>{t("home.condition.texte31")}</p>
        <h2>{t("home.condition.soustitre15")}</h2>
        <p style={justifyText}>{t("home.condition.texte32")}</p>
        <h2>{t("home.condition.soustitre16")}</h2>
        <p style={justifyText}>{t("home.condition.texte33")}</p>
        <h2>{t("home.condition.soustitre17")}</h2>
        <p style={justifyText}>{t("home.condition.texte34")}</p>
        <h2>{t("home.condition.soustitre18")}</h2>
        <p style={justifyText}>{t("home.condition.texte35")}</p>
        <h2>{t("home.condition.soustitre19")}</h2>
        <p style={justifyText}>{t("home.condition.texte36")}</p>
        <p style={justifyText}>{t("home.condition.lien1")}</p>
        <Link to="https://www.donneespersonnelles.fr">
          <p style={justifyText}>https://www.donneespersonnelles.fr</p>
        </Link>
      </div>
    </div>
    <Footer />
  </div>
}

export default CgvScreen;
