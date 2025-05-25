import { products, productsSection } from '../lib/data';
import Container from './Container';
import Content from './Content';
import ProductCard from './ProductCard';

const ProductCards = () => {
  return (
    <Container bg="bg-[#F9F9F9]">
      <section>
        <Content
          title={productsSection.title}
          description={productsSection.description}
          variant="products"
        />
      </section>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
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
