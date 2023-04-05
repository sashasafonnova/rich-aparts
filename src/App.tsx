import React from 'react';
import { Route, Routes } from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';


import Header from './components/Header';
import FormQuestionBlock from './components/FormQuestionBlock';
import SubscribeBlock from './components/SubscribeBlock';
import Footer from './components/Footer';
import FooterBottom from './components/FooterBottom';
import ModalSignIn from './components/Modals/ModalSignIn';
import ModalBooking from './components/Modals/ModalBooking';
import ModalSubmited from './components/Modals/ModalSubmited';

import MainPage from './pages/MainPage';
import CatalogPage from './pages/CatalogPage';
import BonusesPage from './pages/BonusesPage';
import ContactsPage from './pages/ContactsPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductPage from './pages/ProductPage';



const App: React.FC = () => {

  const typeModal = useSelector((state: RootState) => state.modalSlice.type);
  

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:apartId" element={<ProductPage />} />
          <Route path="/bonuses" element={<BonusesPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/*" element={<NotFoundPage />} />


        </Routes>
        <FormQuestionBlock />
        <SubscribeBlock />
        <Footer />
        <FooterBottom />
        {typeModal === "booking" && <ModalBooking/>}
        {typeModal === "signInUp" && <ModalSignIn />}
        {typeModal === "formSuccess" && <ModalSubmited />}

      </div>
    </div>
  );
}

export default App;