import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import { useTranslation } from "react-i18next";

function ContactScreen() {
  const { t } = useTranslation();
  const container = {
    overflowX: 'hidden',
  }
  const myJustify = {
    textAlign: 'center',
  }
  const bottomSpace = {
    paddingBottom: '20px',
    width: '86%',
    marginLeft: '7%',
    fontFamily: 'var(--secondary-font)',
  }
  const homeTitle = {
    color: 'var(--my-blue)',
    paddingTop: '15px',
    paddingBottom: '10px',
  }
  const imgCentre = {
    textAlign: 'center',
  }
  const homeWhoImg = {
    width: '100%',
    height: 'auto',
    marginBottom: '20px',
  }
  return <div>
    <Header />
    <div style={container}>
      <h1 style={homeTitle}>{t("home.contact.title")}</h1>
      <div style={bottomSpace}>
        <div style={imgCentre}>
          <img style={homeWhoImg} src="http://res.cloudinary.com/do3nu0tns/image/upload/c_fill,h_500,w_900/qgeyumulkufhrnstkbue" alt="stylo" />
        </div>
        <p>{t("home.contact.texte1")}</p>
        <div style={myJustify}>
          <p>OcéNat Créations</p>
          <p>	16 rue des tilleuls,</p>
          <p>	16360 Baignes Ste Radegonde</p>
        </div>
        <p>{t("home.contact.texte2")}</p>
        <p style={myJustify}><a href="tel:0641311956"> 06.41.31.19.56</a></p>
        <p>Messenger :</p>
        <p style={myJustify}> @OceNat </p>
        <p>E-mail :</p>
        <p style={myJustify}> ocenat.creations@orange.fr</p>
      </div>
    </div>
    <Footer />
  </div>
}

export default ContactScreen;
