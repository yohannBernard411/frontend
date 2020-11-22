import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import { useTranslation } from "react-i18next";

function WoolScreen() {
  const { t } = useTranslation();
  const myTitle = {
    fontSize: '4rem',
    fontFamily: 'var(--primary-font)',
    fontWeight: 'lighter',
    color: 'var(--my-orange)',
    marginTop: '3vh',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
  const container = {
    width: '86%',
    marginLeft: '7%',
    paddingBottom: '20px',
  }
  const imgCentre = {
    textAlign: 'center',
  }
  const homeWhoImg = {
    width: '100%',
    height: 'auto',
    marginBottom: '20px',
  }
  const textJustify = {
    textIndent: '30px',
    textAlign: 'justify',
    fontFamily: 'var(--secondary-font)',
  }
  const myListStyle = {
    paddingLeft: '0',
    
  }
  const subTitle = {
    textAlign: 'center',
    fontFamily: 'var(--secondary-font)',
    fontWeight: 'lighter',
    fontSize: '3rem',
  }
  return <div>
    <Header />
    <div>
      <h1 style={myTitle}>{t("articles.lin.titre1")}<br />{t("articles.lin.titre2")}</h1>
      <div style={container}>
        <div style={imgCentre}>
          <img style={homeWhoImg} src="http://res.cloudinary.com/do3nu0tns/image/upload/c_fill,h_500,w_900/msdk0dk50mrh0cugiylc" alt="Mouton" />
        </div>
        <p style={textJustify}>{t("articles.lin.texte1")}</p>
        <br /><br />
        <p style={textJustify}>{t("articles.lin.texte2")}</p>
        <br /><br />
        <h2 style={subTitle}>{t("articles.lin.soustitre1")}</h2>
        <ul style={myListStyle}>
          <li style={textJustify}>
            <strong>{t("articles.lin.strong1")}</strong>{t("articles.lin.liste1")}
          </li>
          <li style={textJustify}>
            <strong>{t("articles.lin.strong2")}</strong>{t("articles.lin.liste2")}
          </li>
          <li style={textJustify}>
            <strong>{t("articles.lin.strong3")}</strong>{t("articles.lin.liste3")}
          </li>
          <li style={textJustify}>
            <strong>{t("articles.lin.strong4")}</strong>{t("articles.lin.liste4")}
          </li>
          <li style={textJustify}>
            <strong>{t("articles.lin.strong5")}</strong>{t("articles.lin.liste5")}
          </li>
          <li style={textJustify}>
            <strong>{t("articles.lin.strong6")}</strong>{t("articles.lin.liste6")}
          </li>
          <li style={textJustify}>
            <strong>{t("articles.lin.strong7")}</strong>{t("articles.lin.liste7")}
          </li>
        </ul>
        <br /><br />
        <h2 style={subTitle}>{t("articles.lin.soustitre2")}</h2>
        <p style={textJustify}>{t("articles.lin.texte3")}</p>
        <ul style={myListStyle}>
          <li style={textJustify}>
            <strong>{t("articles.lin.strong21")}</strong>{t("articles.lin.liste21")}
          </li>
          <li style={textJustify}>
            <strong>{t("articles.lin.strong22")}</strong>{t("articles.lin.liste22")}
          </li>
          <li style={textJustify}>
            <strong>{t("articles.lin.strong23")}</strong>{t("articles.lin.liste23")}
          </li>
          <li style={textJustify}>
            <strong>{t("articles.lin.strong24")}</strong>{t("articles.lin.liste24")}
          </li>
          <li style={textJustify}>
            <strong>{t("articles.lin.strong25")}</strong>{t("articles.lin.liste25")}
          </li>
          <li style={textJustify}>
            <strong>{t("articles.lin.strong26")}</strong>{t("articles.lin.liste26")}
          </li>
        </ul>
        <p style={textJustify}>{t("articles.lin.texte4")}</p>
      </div>
    </div>
    <Footer />
  </div>
}

export default WoolScreen;
