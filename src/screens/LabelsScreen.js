import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

function LabelsScreen() {
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
  const textJustify = {
    textIndent: '30px',
    textAlign: 'justify',
    fontFamily: 'var(--secondary-font)',
  }
  const myListStyle = {
    paddingLeft: '0',
    listStyle: "inside url('https://res.cloudinary.com/do3nu0tns/image/upload/v1596704467/fmkbhzebi41m234lkoav.png')",
  }
  const subTitle = {
    textAlign: 'center',
    fontFamily: 'var(--secondary-font)',
    fontWeight: 'lighter',
    fontSize: '3rem',
  }
  const centrage = {
    textAlign: 'center',
  }
  const labelImage = {
    width: '250px',
    height: 'auto',
    marginBottom: '20px',
  }
  const titleImage = {
    width: '100%',
    height: 'auto',
    marginBottom: '20px',
  }
  return <div>
    <Header />
    <div>
      <h1 style={myTitle}>{t("articles.labels.title")}</h1>
      <div style={container}>
        <div style={centrage}>
          <img style={titleImage} src="http://res.cloudinary.com/do3nu0tns/image/upload/xggkwezo3plljwyrzvf2" alt="Labels" />
          <br /><br />
        </div>
        <p style={textJustify}>{t("articles.labels.texte1")}</p>
        <p style={textJustify}>{t("articles.labels.texte2")}</p>
        <p style={textJustify}>{t("articles.labels.texte3")}</p>
        <ul style={myListStyle}>
          <li style={textJustify}>{t("articles.labels.liste1")}</li>
          <li style={textJustify}>{t("articles.labels.liste2")}</li>
          <li style={textJustify}>{t("articles.labels.liste3")}</li>
          <li style={textJustify}>{t("articles.labels.liste4")}</li>
          <li style={textJustify}>{t("articles.labels.liste5")}</li>
        </ul>
        <p style={textJustify}>{t("articles.labels.texte4")}</p>
        <p style={textJustify}>{t("articles.labels.texte5")}</p>
        <p style={textJustify}>{t("articles.labels.texte6")}</p>
        <p style={textJustify}>{t("articles.labels.texte7")}</p>
        <div style={centrage}>
          <img style={labelImage} src="http://res.cloudinary.com/do3nu0tns/image/upload/pme7t79jllunmq7jiycz" alt="Global Organic Textil Standard" />
          <br /><br />
        </div>
        <p style={textJustify}>{t("articles.labels.texte8")}</p>
        <p style={textJustify}>{t("articles.labels.texte9")}</p>
        <ul style={myListStyle}>
          <li style={textJustify}>{t("articles.labels.liste21")}</li>
          <li style={textJustify}>{t("articles.labels.liste22")}</li>
          <li style={textJustify}>{t("articles.labels.liste23")}</li>
          <li style={textJustify}>{t("articles.labels.liste24")}</li>
          <li style={textJustify}>{t("articles.labels.liste25")}</li>
          <li style={textJustify}>{t("articles.labels.liste26")}</li>
          <li style={textJustify}>{t("articles.labels.liste27")}</li>
          <li style={textJustify}>{t("articles.labels.liste28")}</li>
          <li style={textJustify}>{t("articles.labels.liste29")}</li>
          <li style={textJustify}>{t("articles.labels.liste30")}</li>
          <li style={textJustify}>{t("articles.labels.liste31")}</li>
        </ul>
        <p style={textJustify}>{t("articles.labels.texte10")}</p>
        <ul style={myListStyle}>
          <li style={textJustify}>{t("articles.labels.liste40")}</li>
          <li style={textJustify}>{t("articles.labels.liste41")}</li>
          <li style={textJustify}>{t("articles.labels.liste42")}</li>
        </ul>
        <p style={textJustify}>{t("articles.labels.texte11")}</p>
        <p style={textJustify}><strong>{t("articles.labels.strong1")}</strong></p>
        <div style={centrage}>
          <img style={labelImage} src="http://res.cloudinary.com/do3nu0tns/image/upload/wovdvgzmimcexmsgfbz9" alt="Oeko-tex" />
          <br /><br />
        </div>
        <h3 style={subTitle}>{t("articles.labels.soustitre1")}</h3>
        <p style={textJustify}>{t("articles.labels.texte12")}<strong>{t("articles.labels.strong2")}</strong></p>
        <p style={textJustify}>{t("articles.labels.texte13")}</p>
        <p style={textJustify}>{t("articles.labels.texte14")}</p>
        <p style={textJustify}>{t("articles.labels.texte15")}</p>
        <p style={textJustify}>{t("articles.labels.texte16")}</p>
        <p style={textJustify}>{t("articles.labels.texte17")}</p>
        <p style={textJustify}>{t("articles.labels.texte18")}</p>
        <div style={centrage}>
          <img style={labelImage} src="http://res.cloudinary.com/do3nu0tns/image/upload/elhnwjc1hpz4wlf92bnj" alt="Oeko-tex green" />
          <br /><br />
        </div>
        <h3 style={subTitle}>{t("articles.labels.soustitre2")}</h3>
        <p style={textJustify}>{t("articles.labels.texte19")}<strong>{t("articles.labels.strong3")}</strong></p>
        <p style={textJustify}>{t("articles.labels.texte20")}<strong>{t("articles.labels.strong4")}</strong></p>
        <p style={textJustify}>{t("articles.labels.texte21")}</p>
        <div style={centrage}>
          <img style={labelImage} src="http://res.cloudinary.com/do3nu0tns/image/upload/pme7t79jllunmq7jiycz" alt="Global Organic Textile Standard" />
          <br /><br />
        </div>
        <h3 style={subTitle}>{t("articles.labels.soustitre3")}</h3>
        <p style={textJustify}>{t("articles.labels.texte22")}<strong>{t("articles.labels.strong5")}</strong></p>
        <p style={textJustify}>{t("articles.labels.texte23")}<strong>{t("articles.labels.strong6")}</strong></p>
        <div style={centrage}>
          <img style={labelImage} src="http://res.cloudinary.com/do3nu0tns/image/upload/nfoicea1byrgi9g7ligm" alt="Bio equitable" />
          <br /><br />
        </div>
        <h3 style={subTitle}>{t("articles.labels.soustitre4")}</h3>
        <p style={textJustify}>{t("articles.labels.texte24")}<strong>{t("articles.labels.strong7")}</strong>{t("articles.labels.texte25")}<strong>{t("articles.labels.strong8")}</strong>{t("articles.labels.texte26")}</p>
        <div style={centrage}>
          <img style={labelImage} src="http://res.cloudinary.com/do3nu0tns/image/upload/rxhxud2zabq1ym6klg0d" alt="Ecocert" />
          <br /><br />
        </div>
        <h3 style={subTitle}>{t("articles.labels.soustitre5")}</h3>
        <p style={textJustify}>{t("articles.labels.texte27")} <strong>{t("articles.labels.strong9")}</strong>{t("articles.labels.texte28")}</p>
        <p style={textJustify}>{t("articles.labels.texte29")}<strong>{t("articles.labels.strong10")}</strong>{t("articles.labels.texte30")}<strong>{t("articles.labels.strong10bis")}</strong>{t("articles.labels.texte30bis")}<strong>{t("articles.labels.strong11")}</strong></p>
        <p style={textJustify}>{t("articles.labels.texte31")}<strong>{t("articles.labels.strong12")}</strong>{t("articles.labels.texte32")}</p>
        <p style={textJustify}>{t("articles.labels.texte33")}<strong>{t("articles.labels.strong13")}</strong>{t("articles.labels.texte34")}<strong>{t("articles.labels.strong14")}</strong>{t("articles.labels.texte35")}</p>
        <p style={textJustify}>{t("articles.labels.texte36")}</p>
        <div style={centrage}>
          <img style={labelImage} src="http://res.cloudinary.com/do3nu0tns/image/upload/lrmrqgqlf7xgpvxr46pl" alt="Biore" />
          <br /><br />
        </div>
        <h3 style={subTitle}>{t("articles.labels.soustitre6")}</h3>
        <p style={textJustify}>{t("articles.labels.texte37")}<strong>{t("articles.labels.strong15")}</strong></p>
        <p style={textJustify}>{t("articles.labels.texte38")}<strong>{t("articles.labels.strong16")}</strong>{t("articles.labels.texte38")}<strong>{t("articles.labels.strong17")}</strong></p>
        <p style={textJustify}>{t("articles.labels.texte40")}<strong>{t("articles.labels.strong18")}</strong>{t("articles.labels.texte41")}</p>
        <p style={textJustify}>{t("articles.labels.texte42")}<strong>{t("articles.labels.strong19")}</strong>{t("articles.labels.texte43")}</p>
        <div style={centrage}>
          <img style={labelImage} src="http://res.cloudinary.com/do3nu0tns/image/upload/pmie6dpbhfu9z0lthc5o" alt="EcoLabel" />
          <br /><br />
        </div>
        <h3 style={subTitle}>{t("articles.labels.soustitre7")}</h3>
        <p style={textJustify}>{t("articles.labels.texte44")}<strong>{t("articles.labels.strong20")}</strong>{t("articles.labels.texte45")}<strong>{t("articles.labels.strong21")}</strong>{t("articles.labels.texte46")}<strong>{t("articles.labels.strong22")}</strong></p>
        <p style={textJustify}>{t("articles.labels.texte47")}</p>
        <div style={centrage}>
          <img style={labelImage} src="http://res.cloudinary.com/do3nu0tns/image/upload/pmxy2o9fi7dq2wdnlp0s" alt="Origine France Garantie" />
          <br /><br />
        </div>
        <h3 style={subTitle}>{t("articles.labels.soustitre8")}</h3>
        <p style={textJustify}>{t("articles.labels.texte48")}<strong>{t("articles.labels.strong23")}</strong>{t("articles.labels.texte49")}<strong>{t("articles.labels.strong24")}</strong></p>
        <p style={textJustify}>{t("articles.labels.texte50")}<strong>{t("articles.labels.strong25")}</strong>{t("articles.labels.texte51")}</p>
        <div style={centrage}>
          <img style={labelImage} src="http://res.cloudinary.com/do3nu0tns/image/upload/gejovurqdlabcqfmckqz" alt="Demeter" />
          <br /><br />
        </div>
        <h3 style={subTitle}>{t("articles.labels.soustitre9")}</h3>
        <p style={textJustify}>{t("articles.labels.texte52")}<strong>{t("articles.labels.strong26")}</strong>{t("articles.labels.texte53")}<strong>{t("articles.labels.strong27")}</strong></p>
        <p style={textJustify}>{t("articles.labels.texte54")}<strong>{t("articles.labels.strong28")}</strong>{t("articles.labels.texte55")}</p>
        <p style={textJustify}>{t("articles.labels.texte56")}<strong>{t("articles.labels.strong29")}</strong>{t("articles.labels.texte57")}<strong>{t("articles.labels.strong30")}</strong></p>
        <div style={centrage}>
          <img style={labelImage} src="http://res.cloudinary.com/do3nu0tns/image/upload/kuwvh0pcv5upkqdjjl4s" alt="Natural textil" />
          <br /><br />
        </div>
        <h3 style={subTitle}>{t("articles.labels.soustitre10")}</h3>
        <p style={textJustify}>{t("articles.labels.texte58")}</p>
        <p style={textJustify}>{t("articles.labels.texte59")}<strong>{t("articles.labels.strong31")}</strong>{t("articles.labels.texte60")}</p>
        <p style={textJustify}>{t("articles.labels.texte61")}<strong>{t("articles.labels.strong32")}</strong></p>
        <p style={textJustify}>{t("articles.labels.texte62")}<strong>{t("articles.labels.strong33")}</strong></p>
        <p style={textJustify}>{t("articles.labels.texte63")}<strong>{t("articles.labels.strong34")}</strong>{t("articles.labels.texte64")}</p>
        <div style={centrage}>
          <img style={labelImage} src="http://res.cloudinary.com/do3nu0tns/image/upload/oxc20motwjbkqbjxmxrf" alt="Naturleder" />
          <br /><br />
        </div>
        <h3 style={subTitle}>{t("articles.labels.soustitre11")}</h3>
        <p style={textJustify}>{t("articles.labels.texte65")}<strong>{t("articles.labels.strong35")}</strong></p>
        <p style={textJustify}>{t("articles.labels.texte66")}<strong>{t("articles.labels.strong36")}</strong>{t("articles.labels.texte67")}</p>
        <p style={textJustify}>{t("articles.labels.texte68")}<strong>{t("articles.labels.strong37")}</strong></p>
        <p style={textJustify}>{t("articles.labels.texte69")}</p>
        <div style={centrage}>
          <img style={labelImage} src="http://res.cloudinary.com/do3nu0tns/image/upload/e8absscyt0nss3mymagj" alt="Soil" />
          <br /><br />
        </div>
        <h3 style={subTitle}>{t("articles.labels.soustitre12")}</h3>
        <p style={textJustify}>{t("articles.labels.texte70")}</p>
        <p style={textJustify}>{t("articles.labels.texte71")}<strong>{t("articles.labels.strong38")}</strong></p>
        <p style={textJustify}>{t("articles.labels.texte72")}<strong>{t("articles.labels.strong39")}</strong></p>
        <div style={centrage}>
          <img style={labelImage} src="http://res.cloudinary.com/do3nu0tns/image/upload/hqwunxwx5gows74arjbo" alt="Epv" />
          <br /><br />
        </div>
        <h3 style={subTitle}>{t("articles.labels.soustitre13")}</h3>
        <p style={textJustify}>{t("articles.labels.texte73")}<strong>{t("articles.labels.strong40bis")}</strong>{t("articles.labels.texte73bis")}<strong>{t("articles.labels.strong40")}</strong></p>
        <div style={centrage}>
          <img style={labelImage} src="http://res.cloudinary.com/do3nu0tns/image/upload/intqjddvanipof6y5pf8" alt="Fair" />
          <br /><br />
        </div>
        <h3>{t("articles.labels.soustitre14")}</h3>
        <p style={textJustify}>{t("articles.labels.texte74")}<strong>{t("articles.labels.strong41")}</strong></p>
        <p style={textJustify}>{t("articles.labels.texte75")}<strong>{t("articles.labels.strong42")}</strong></p>
        <p style={textJustify}>{t("articles.labels.texte76")}</p>
        <div style={centrage}>
          <img style={labelImage} src="http://res.cloudinary.com/do3nu0tns/image/upload/swnkctr6ukwsqfpdqvs1" alt="Made in respect" />
          <br /><br />
        </div>
        <h3 style={subTitle}>{t("articles.labels.soustitre15")}</h3>
        <p style={textJustify}>{t("articles.labels.texte77")}<strong>{t("articles.labels.strong43")}</strong>{t("articles.labels.texte78")}</p>
        <p style={textJustify}>{t("articles.labels.texte79")}<strong>{t("articles.labels.strong44")}</strong></p>
        <p style={textJustify}>{t("articles.labels.texte80")}</p>
        <div style={centrage}>
          <img style={labelImage} src="http://res.cloudinary.com/do3nu0tns/image/upload/qvzpo9najamwrxivtart" alt="Organic Exchange" />
          <br /><br />
        </div>
        <h3>{t("articles.labels.soustitre16")}</h3>
        <p style={textJustify}>{t("articles.labels.texte81")}</p>
        <p style={textJustify}>{t("articles.labels.texte82")}<strong>{t("articles.labels.strong45")}</strong>{t("articles.labels.texte83")}<strong>{t("articles.labels.strong46")}</strong></p>
        <Link to="http://www.mescoursespourlaplanete.com/labels.php?idFamProd=10&idType=">
          <p style={textJustify}>{t("articles.labels.lien1")}</p>
        </Link>
      </div>

    </div>
    <Footer />
  </div>
}

export default LabelsScreen;
