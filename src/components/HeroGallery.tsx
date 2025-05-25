import HeroSlider from './HeroSlider';

const HeroGallery = () => {
  return (
    <header>
      <img
        src="/src/assets/images/hero/hero.png"
        alt="Hero Gallery"
        className="hero-gallery max-sm:hidden"
      />
      <div className="h-[542px] overflow-hidden sm:hidden">
        <HeroSlider />
      </div>
    </header>
  );
};

export default HeroGallery;
