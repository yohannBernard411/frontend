import React, {useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import { useTranslation } from "react-i18next";

function ClothesScreen(props){
  const { t } = useTranslation();
  const productsUl = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  }
  const clotheTitlte = {
    color: 'var(--my-green)',
    paddingTop: '15px',
    paddingBottom: '10px',
  }
  const productsLi = {
    listStyleType: 'none',
    padding: '0',
    flex: '0 1 34rem',
    margin: '1rem',
    height: '50rem',
    borderBottom: '0.1rem #c0c0c0 solid',
  }
  const product = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  }
  const productImage = {
    maxWidth: '34rem',
    maxHeight: '34rem',
  }
  const productName = {
    fontSize: '2rem',
    fontWeight: 'bold',
  }
  const productBrand = {
    fontSize: '1.2rem',
    color: '#808080',
  }
  const  productPrice = {
    fontSize: '2rem',
    fontWeight: 'bold',
  }
  const productRating = {
    marginBottom: '1rem',
  }


  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
    return () => {
      //
    };
  }, [])

  const clothes = ["zero", "accessory", "collection"].includes(props.match.params.type) ? products.filter(product => product.category == props.match.params.type) : products;

  return loading ? <div>Loading...</div> :
  error ? <div>{error}</div> :
  <div>
    <Header />
    <h1 style={clotheTitlte}>{t("shop.title")}{props.match.params.type}</h1>
    <ul style={productsUl}>
      { clothes.map(product => 
        <li style={productsLi} key={product._id}>
          <div style={product}>
            <Link to={'/product/' + product._id}>
              <img style={productImage} src={product.image} alt="product" />
            </Link>
            <div style={productName}>
              <Link to={'/product/' + product._id}>{product.name}</Link>
            </div>
            <div style={productBrand}>{product.brand}</div>
            <div style={productPrice}>{product.price}</div>
            <div style={productRating}>{product.rating} Stars {product.reviews} reviews</div>
          </div>
        </li>
      )}
    </ul>
    <Footer />
  </div>
}

export default ClothesScreen;
