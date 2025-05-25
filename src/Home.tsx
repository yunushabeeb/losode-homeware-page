import { useContext } from 'react';
import './App.css';
import Footer from './components/Footer';
import HeroGallery from './components/HeroGallery';
import HeroInfo from './components/HeroInfo';
import Nav from './components/Nav';
import ProductCards from './components/ProductCards';
// import TaglineGenerator from './components/TaglineGenerator';
import TrendsCards from './components/TrendsCards';
import  { ProviderContext, type ContextType } from './context/Provider';

function Home() {
  const { isSearching } = useContext(ProviderContext) as ContextType;

  return (
      <div>
        <Nav />
        {!isSearching && <HeroGallery />}
        {/* <TaglineGenerator /> */}
        {!isSearching && <HeroInfo /> }
        <ProductCards />
        {!isSearching && <TrendsCards /> }
        <Footer />
      </div>
  );
}

export default Home;
