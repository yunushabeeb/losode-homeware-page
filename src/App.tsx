import './App.css'
import Footer from './components/Footer';
import HeroGallery from './components/HeroGallery';
import HeroInfo from './components/HeroInfo';
import Nav from './components/Nav';
import ProductCards from './components/ProductCards';
// import TaglineGenerator from './components/TaglineGenerator';
import TrendsCards from './components/TrendsCards';

function App() {
  return (
    <div>
      <Nav />
      <HeroGallery />
      {/* <TaglineGenerator /> */}
      <HeroInfo />
      <ProductCards />
      <TrendsCards />
      <Footer />
    </div>
  );
}

export default App;
