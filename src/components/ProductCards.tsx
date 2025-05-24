import { products } from '../lib/data';
import Container from './Container';
import Content from './Content';
import ProductCard from './ProductCard';

const ProductCards = () => {
  return (
    <Container bg="bg-[#F9F9F9]">
      <section>
        <Content
          title="Redefine the Standard"
          description="This season is not about fitting in. It is about standing out with intention. From precision tailoring to directional streetwear, We have curated pieces that move with you and speak for you. Think elevated essentials, unexpected textures, and silhouettes that shift the conversation. However you define style - refined, experimental, or somewhere in between, now is the time to own it, evolve it, and lead with it."
          variant="products"
        />
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {products.length > 0 &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              href={product.href}
              price={product.price}
            />
          ))}
      </div>
    </Container>
  );
};

export default ProductCards;
