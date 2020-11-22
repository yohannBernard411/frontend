import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ClothesScreen from './screens/ClothesScreen';
import ArticlesScreen from './screens/ArticlesScreen';
import ShopScreen from './screens/ShopScreen';
import WhoScreen from './screens/WhoScreen';
import CgvScreen from './screens/CgvScreen';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import TRADUCTIONS from '../src/screens/traductions';
import ContactScreen from './screens/ContactScreen';
import SpitzbergScreen from './screens/SpitzbergScreen';
import LabelsScreen from './screens/LabelsScreen';
import WoolScreen from './screens/WoolScreen';


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: TRADUCTIONS,
    lng: "fr",
    fallbackLng: "fr",

    interpolation: {
      escapeValue: false
    }
  });


function App() {
  const { t } = useTranslation();
  return (
  <BrowserRouter>
    <div>
      <main>
        <div>
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/products" component={ProductsScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />


          <Route path="/spitzberg" component={SpitzbergScreen} />
          <Route path="/labels" component={LabelsScreen} />
          <Route path="/wool" component={WoolScreen} />
          <Route path="/contact" component={ContactScreen} />
          <Route path="/cgv" component={CgvScreen} />
          <Route path="/who" component={WhoScreen} />
          <Route path="/articlesmenu" component={ArticlesScreen} />
          <Route path="/shopmenu" component={ShopScreen} />
          <Route path="/welcomemenu" component={WelcomeScreen} />
          <Route path="/shop/:type" component={ClothesScreen} />
          <Route path="/signin" component={SigninScreen} />
          <Route path="/" exact={true} component={HomeScreen} />
        </div>
      </main>
    </div>
  </BrowserRouter>
  )
}

export default App;
