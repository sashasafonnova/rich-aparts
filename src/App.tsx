import React from 'react';
import { Route, Routes } from "react-router-dom";


import Header from './components/Header';
import FormQuestionBlock from './components/FormQuestionBlock';
import SubscribeBlock from './components/SubscribeBlock';
import Footer from './components/Footer';
import FooterBottom from './components/FooterBottom';
import MainPage from './pages/Main';
import CatalogPage from './pages/Catalog';
import BonusesPage from './pages/Bonuses';
import ContactsPage from './pages/Contacts';



const App: React.FC = () => {



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
        <FormQuestionBlock />
        <SubscribeBlock />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
