import Container from './Container';
import Content from './Content';
import { ProductCaption } from './ProductCaption';

const HeroInfo = () => {
  return (
    <Container bg="bg-white">
      <>
        <div className="w-full text-center mx-auto sm:w-3/4 max-w-[900px] mb-8 sm:hidden md:flex">
          <Content
            title="Style that Moves with You. Effortless. Elevated. Everyday"
            description="Welcome to Losode Men where sharp tailoring meets modern essentials, and lifestyle is as considered as your wardrobe. From boardroom to after-hours, our curated edit is designed for professionals who value precision, comfort, and understated confidence. Discover pieces that work as hard as you do - fashion-forward yet timeless, always on your terms."
            buttonText="Shop Now"
            variant="hero"
          />
        </div>
        <ProductCaption />
      </>
    </Container>
  );
};

export default HeroInfo;
