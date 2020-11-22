import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import { useTranslation } from "react-i18next";

function SpitzbergScreen() {
  const { t } = useTranslation();
  const container = {
    width: '86%',
    marginLeft: '7%',
    paddingBottom: '20px',
    textAlign: 'justify',
    fontFamily: 'var(--secondary-font)',
  }
  const subTitle = {
    textAlign: 'center',
    fontFamily: 'var(--secondary-font)',
    fontWeight: 'lighter',
    fontSize: '3rem',
  }
  const imgCentre = {
    textAlign: 'center',
  }
  const imgTitle = {
    width: '100%',
    height: 'auto',
    marginBottom: '20px',
  }
  const spitzImage = {
    width: '250px',
    height: 'auto',
    marginBottom: '20px',
  }
  const split = {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-around',
    width: '100%'
  }
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
  return <div>
    <Header />
    <div>
      <h1 style={myTitle}>{t("articles.spitz.title")}</h1>
      <div style={container}>
        <div style={imgCentre}>
          <img style={imgTitle} src="http://res.cloudinary.com/do3nu0tns/image/upload/c_fill,h_900,w_500/q129e95o4lv0ngwsver3wsaar37d" alt="Veste" />
        </div>
        <p>{t("articles.spitz.texte1")}</p>
        <p>{t("articles.spitz.texte2")}</p>
        <p>{t("articles.spitz.texte3")}</p>
        <p>{t("articles.spitz.texte4")}</p>
        <p>{t("articles.spitz.texte5")}</p>
        <p>{t("articles.spitz.texte6")}</p>
        <p>{t("articles.spitz.texte7")}</p>
        <p>{t("articles.spitz.texte8")}</p>
        <p>{t("articles.spitz.texte9")}</p>
        <p>{t("articles.spitz.texte10")}</p>
        <p>{t("articles.spitz.texte11")}</p>
        <p>{t("articles.spitz.texte12")}</p>
        <p>{t("articles.spitz.texte13")}</p>
        <p>{t("articles.spitz.texte14")}</p>
        <p>{t("articles.spitz.texte15")}</p>
        <p>{t("articles.spitz.texte16")}</p>
        <p>{t("articles.spitz.texte17")}</p>
        <p>{t("articles.spitz.texte18")}</p>
        <p>{t("articles.spitz.texte19")}</p>
        <p>{t("articles.spitz.texte20")}</p>
        <p>{t("articles.spitz.texte21")}</p>
        <h2 style={subTitle}>{t("articles.spitz.subTitle1")}</h2>
        <p>{t("articles.spitz.texte22")}</p>
        <p>{t("articles.spitz.texte23")}</p>
        <p>{t("articles.spitz.texte24")}</p>
        <p>{t("articles.spitz.texte25")}</p>
        <p>{t("articles.spitz.texte26")}</p>
        <p>{t("articles.spitz.texte27")}</p>
        <p>{t("articles.spitz.texte28")}</p>
        <p>{t("articles.spitz.texte29")}</p>
        <p>{t("articles.spitz.texte30")}</p>
        <p>{t("articles.spitz.texte31")}</p>
        <p>{t("articles.spitz.texte32")}</p>
        <p>{t("articles.spitz.texte33")}</p>
        <p>{t("articles.spitz.texte34")}</p>
        <p>{t("articles.spitz.texte35")}</p>
        <p>{t("articles.spitz.texte36")}</p>
        <p>{t("articles.spitz.texte37")}</p>
        <p>{t("articles.spitz.texte38")}</p>
        <h2 style={subTitle}>{t("articles.spitz.subTitle2")}</h2>
        <p>{t("articles.spitz.texte39")}</p>
        <p>{t("articles.spitz.texte40")}</p>
        <p>{t("articles.spitz.texte41")}</p>
        <h2 style={subTitle}>{t("articles.spitz.subTitle3")}</h2>
        <div style={imgCentre}>
          <img style={spitzImage} src="http://res.cloudinary.com/do3nu0tns/image/upload/c_fill,h_900,w_500/bc97du7vvapyu533eh8qczv88h7t" alt="Dos" />
        </div>
        <h2 style={subTitle}>{t("articles.spitz.subTitle4")}</h2>
        <p>{t("articles.spitz.texte42")}</p>
        <p>{t("articles.spitz.texte43")}</p>
        <p>{t("articles.spitz.texte44")}</p>
        <p>{t("articles.spitz.texte45")}</p>
        <p>{t("articles.spitz.texte46")}</p>
        <p>{t("articles.spitz.texte47")}</p>
        <p>{t("articles.spitz.texte48")}</p>
        <p>{t("articles.spitz.texte49")}</p>
        <p>{t("articles.spitz.texte50")}</p>
        <p>{t("articles.spitz.texte51")}</p>
        <p>{t("articles.spitz.texte52")}</p>
        <p>{t("articles.spitz.texte53")}</p>
        <p>{t("articles.spitz.texte54")}</p>
        <p>{t("articles.spitz.texte55")}</p>
        <p>{t("articles.spitz.texte56")}</p>
        <p>{t("articles.spitz.texte57")}</p>
        <p>{t("articles.spitz.texte58")}</p>
        <p>{t("articles.spitz.texte59")}</p>
        <p>{t("articles.spitz.texte60")}</p>
        <p>{t("articles.spitz.texte61")}</p>
        <p>{t("articles.spitz.texte62")}</p>
        <p>{t("articles.spitz.texte63")}</p>
        <p>{t("articles.spitz.texte64")}</p>
        <p>{t("articles.spitz.texte65")}</p>
        <p>{t("articles.spitz.texte66")}</p>
        <p>{t("articles.spitz.texte67")}</p>
        <p>{t("articles.spitz.texte68")}</p>
        <p>{t("articles.spitz.texte69")}</p>
        <p>{t("articles.spitz.texte70")}</p>
        <p>{t("articles.spitz.texte71")}</p>
        <p>{t("articles.spitz.texte72")}</p>
        <p>{t("articles.spitz.texte73")}</p>
        <p>{t("articles.spitz.texte74")}</p>
        <p>{t("articles.spitz.texte75")}</p>
        <p>{t("articles.spitz.texte76")}</p>
        <h2 style={subTitle}>{t("articles.spitz.subTitle5")}</h2>
        <p>{t("articles.spitz.texte77")}</p>
        <p>{t("articles.spitz.texte78")}</p>
        <p>{t("articles.spitz.texte79")}</p>
        <p>{t("articles.spitz.texte80")}</p>
        <p>{t("articles.spitz.texte81")}</p>
        <p>{t("articles.spitz.texte82")}</p>
        <p>{t("articles.spitz.texte83")}</p>
        <p>{t("articles.spitz.texte84")}</p>
        <p>{t("articles.spitz.texte85")}</p>
        <p>{t("articles.spitz.texte86")}</p>
        <p>{t("articles.spitz.texte87")}</p>
        <p>{t("articles.spitz.texte88")}</p>
        <p>{t("articles.spitz.texte89")}</p>
        <div style={split}>
          <div style={imgCentre}>
            <img style={spitzImage} src="http://res.cloudinary.com/do3nu0tns/image/upload/c_fill,h_800,w_300/bl17c7qjh24ttgwlija8zumw7ram" alt="Manche gauche" />
          </div>
          <div style={imgCentre}>
            <img style={spitzImage} src="http://res.cloudinary.com/do3nu0tns/image/upload/c_fill,h_800,w_300/0n381lye5xjn372cq4f62zbr57bv" alt="Manche droite" />
          </div>
        </div>
        <h2 style={subTitle}>{t("articles.spitz.subTitle6")}</h2>
        <p>{t("articles.spitz.texte90")}</p>
        <p>{t("articles.spitz.texte91")}</p>
        <p>{t("articles.spitz.texte92")}</p>
        <p>{t("articles.spitz.texte93")}</p>
        <h2 style={subTitle}>{t("articles.spitz.subTitle7")}</h2>
        <p>{t("articles.spitz.texte94")}</p>
      </div>
    </div>
    <Footer />
  </div>
}

export default SpitzbergScreen;
