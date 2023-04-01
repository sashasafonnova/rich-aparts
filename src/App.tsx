import React from 'react';
import { Route, Routes } from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';


import Header from './components/Header';
import FormQuestionBlock from './components/FormQuestionBlock';
import SubscribeBlock from './components/SubscribeBlock';
import Footer from './components/Footer';
import FooterBottom from './components/FooterBottom';
import ModalSignIn from './components/ModalSignIn';
import ModalBooking from './components/ModalBooking';

import MainPage from './pages/MainPage';
import CatalogPage from './pages/CatalogPage';
import BonusesPage from './pages/BonusesPage';
import ContactsPage from './pages/ContactsPage';
import NotFoundPage from './pages/NotFoundPage';
import ApartamentPage from './pages/ProductPage';


const App: React.FC = () => {

  const modalSignInOpen = useSelector((state: RootState) => state.signInSlice.modalOpen)
  const modalBookingOpen = useSelector((state: RootState) => state.bookingSlice.modalOpen);
  const chosenLocation = useSelector((state: RootState) => state.bookingSlice.chosenLocation)


  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:apartId" element={<ApartamentPage />} />
          <Route path="/bonuses" element={<BonusesPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/*" element={<NotFoundPage />} />


        </Routes>
        <FormQuestionBlock />
        <SubscribeBlock />
        <Footer />
        <FooterBottom />
        {modalBookingOpen && <ModalBooking location={chosenLocation}/>}
        {modalSignInOpen && <ModalSignIn />}
      </div>
    </div>
  );
}

export default App;