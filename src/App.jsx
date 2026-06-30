import { Fragment } from 'react';
import LenisScroll from './components/lenis-scroll';
import Navbar from './components/navbar';
import Footer from './components/footer';
import HomePageView from './pages/HomePageView';
import { Route, Routes } from 'react-router-dom';
import AboutPageView from './pages/AboutPageView';
import ContactPageView from './pages/ContactPageView';
import SericesPageView from './pages/SericesPageView';
import ProductPage from './pages/products/ProductDetailsView';
import TeamMember from './pages/products/TeamMember';

const App = () => {
  return (
    <Fragment>
      <LenisScroll />
      <Navbar />
      <Routes>
        <Route path="/*" element={<HomePageView />} />
        <Route path="/about-us" element={<AboutPageView />} />
        <Route path="/contact-us" element={<ContactPageView />} />
        <Route path="/services" element={<SericesPageView />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path='/team-member' element={<TeamMember/>}/>

      </Routes>
      <Footer />
    </Fragment>
  )
}

export default App