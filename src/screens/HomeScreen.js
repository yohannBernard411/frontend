import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';
import { useTranslation } from "react-i18next";

function HomeScreen(props) {
  const { t } = useTranslation();
  const presentation = {
    fontSize: '3rem',
    margin: '0',
  }
  const oce = {
    color: 'var(--my-blue)',
  }
  const nat = {
    color: 'var(--my-green)',
  }
  const crea = {
    color: 'var(--my-orange)',
  }
  const title = {
    fontSize: '10rem',
    fontFamily: 'var(--primary-font)',
    fontWeight: 'lighter',
    margin: '0',
  }
  const homeScreen = {
    width: '100vw',
    height: '100vh',
    margin: '0',
    padding: '0',
    overflow: 'hidden',
  }
  const page = {
    position: 'relative',
    top: '-10rem',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundImage: 'linear-gradient(145deg, #d3ade9, #d3ade9 25%, #ffffff 75%, #ffffff)',
    alignItems: 'center',
    overflow: 'hidden',
  }
  const left = {
    width: '65%',
    height: '100%',
    fontFamily: 'var(--secondary-font)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
  const right = {
    width: '35%',
    height: '100%',
  }
  const ball = {
    backgroundImage: 'radial-gradient(rgb(248, 248, 54), rgb(253, 67, 67))',
    width: '70rem',
    height: '70rem',
    borderRadius: '50%',
    position: 'relative',
    top: '-15rem',
    left: '5rem',
  }
  const people = {
    position: 'relative',
    height: '70%',
    width: 'auto',
    top: '-70%',
    left: '10rem',
  }
  const cta = {
    width: '12rem',
    height: '5rem',
    zIndex: '8',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '0.1rem var(--my-blue) solid',
    borderRadius: '0.5rem',
    backgroundColor: '#dfcde9',
    fontWeight: 'bold',
    fontSize: '2rem',
    cursor: 'pointer',
    fontFamily: 'var(--secondary-font)',
    marginLeft: '10rem',
    '&:hover': {
      fontWeight: 'normal',
    backgroundColor: '#d3ade9',
    border: '0.1rem var(--my-orange) solid',
    }
  }

  return <div style={homeScreen}>
    <Header />
      <div style={page}>
        <div style={left}>
          <h1 style={title}>
            <span style={oce}>Oce </span>
            <span style={nat}> Nat </span>
            <span style={crea}> Créations</span>
          </h1>
          <p style={presentation}>{t('home.description')}</p>
          <Link to="/shop/notype"  style={cta}>
            {t('enter')}
          </Link>
        </div>
        <div style={right}>
          <div style={ball}></div>
          <img src="https://zupimages.net/up/20/45/yjgo.png" alt="People" style={people} />
        </div>
      </div>
    <Footer />
  </div>
}

export default HomeScreen;
