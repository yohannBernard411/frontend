import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts, saveProduct, deleteProduct } from '../actions/productActions';
import Footer from '../components/footer';
import Header from '../components/header';

function ProductsScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [description, setDescription] = useState('');
  const productList = useSelector(state => state.productList);
  const { products } = productList;
  const productSave = useSelector(state=>state.productSave);
  const { loading: loadingSave, success: successSave, error: errorSave } = productSave;
  const dispatch = useDispatch();

  useEffect(() => {
    if(successSave){
      setModalVisible(false);
    }
    dispatch(listProducts());
    return () => {
      //
    };
  }, [successSave, dispatch]);

  const openModal = (product) => {
    setModalVisible(true);
    setId(product._id);
    setName(product.name);
    setPrice(product.price);
    setImage(product.image);
    setBrand(product.brand);
    setCategory(product.category);
    setCountInStock(product.countInStock);
    setDescription(product.description);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveProduct({_id: id, name, price, image, brand, category, countInStock, description}));
  }

  const deleteHandler = (product) => {
    dispatch(deleteProduct(product._id));
  }

  return (
  <div className="content content-margined">
    <Header />
    <div className="product-header">
      <h3>Products</h3>
      <button className="button primary" onClick={()=>openModal({})}>Create product</button>
    </div>
  {modalVisible && 
    <div className="form">
      <form onSubmit={submitHandler} >
        <ul className="form-container">
          <li>
            <h2>Create product</h2>
          </li>
          <li>
            {loadingSave && <div>Loading...</div>}
            {errorSave && <div>{errorSave}</div>}
          </li>
          <li>
            <label htmlFor="name">
              Name
            </label>
            <input type="text" value={name || ''} name="name" id="name" onChange={(e) => setName(e.target.value)} />
          </li>
          <li>
            <label htmlFor="price">
              Price
            </label>
            <input type="text" value={price || ''} name="price" id="price" onChange={(e) => setPrice(e.target.value)} />
          </li>
          <li>
            <label htmlFor="image">
              Image
            </label>
            <input type="text" value={image || ''} name="image" id="image" onChange={(e) => setImage(e.target.value)} />
          </li>
          <li>
            <label htmlFor="brand">
              Brand
            </label>
            <input type="text" value={brand || ''} name="brand" id="brand" onChange={(e) => setBrand(e.target.value)} />
          </li>
          <li>
            <label htmlFor="category">
              Category
            </label>
            <input type="text" value={category || ''} name="category" id="category" onChange={(e) => setCategory(e.target.value)} />
          </li>
          <li>
            <label htmlFor="countInStock">
              Count in stock
            </label>
            <input type="text" value={countInStock || ''} name="countInStock" id="countInStock" onChange={(e) => setCountInStock(e.target.value)} />
          </li>
          <li>
            <label htmlFor="description">
              Description
            </label>
            <textarea name="description" value={description || ''} id="description" onChange={(e) => setDescription(e.target.value)} />
          </li>
          <li>
            <button type="submit" className="button primary">{id?"Update":"Create"}</button>
          </li>
          <li>
            <button type="button" onClick={()=>setModalVisible(false)} className="button secondary">Back</button>
          </li>
        </ul>
      </form>
    </div>
    }
    
      <div className="product-list">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {products.map(product => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.name}</td>
              <td>{product.brand}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>
                <button className="button" onClick={()=>openModal(product)}>Edit</button>
                {' '}
                <button className="button" onClick={()=>deleteHandler(product)}>Delete</button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  )
}

export default ProductsScreen;