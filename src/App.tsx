import React from 'react';
import { Route, Routes } from "react-router-dom";


import Header from './components/Header';
import FormQuestionBlock from './components/FormQuestionBlock';
import SubscribeBlock from './components/SubscribeBlock';
import Footer from './components/Footer';
import FooterBottom from './components/FooterBottom';
import MainPage from './pages/Main';
import CatalogPage from './pages/Catalog';
import CardPage from './pages/Card';
import ModalSignIn from './components/ModalSignIn';
import BonusesPage from './pages/Bonuses';
import ContactsPage from './pages/Contacts';

import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import ModalBooking from './components/ModalBooking';


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
          <Route path="/bonuses" element={<BonusesPage />} />
          <Route path="/contacts" element={<ContactsPage />} />

        </Routes>
        {/* <CardPage /> */}
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