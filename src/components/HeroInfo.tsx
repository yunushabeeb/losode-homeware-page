import Container from './Container';
import Content from './Content';
import { ProductCaption } from './ProductCaption';
import { heroInfoContent } from '../lib/data';

const HeroInfo = () => {
  return (
    <Container bg="bg-white">
      <>
        <div className="w-full text-center mx-auto sm:w-3/4 max-w-[900px] mb-8 sm:hidden md:flex">
          <Content
            title={heroInfoContent.title}
            description={heroInfoContent.description}
            buttonText={heroInfoContent.buttonText}
            variant="hero"
          />
        </div>
        <ProductCaption />
      </>
    </Container>
  );
};

export default HeroInfo;
