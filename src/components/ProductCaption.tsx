import Content from "./Content"

export const ProductCaption = () => {
  return (
    <div className="relative">
      <img
      src="/src/assets/images/products/product-caption.png"
      alt="Product Caption"
      className=""
      />
      <div
      className="absolute inset-0"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
      >
      <div className="flex justify-center h-full text-white mb-8 absolute left-0 right-0 top-8/12">
        <Content
          title="Contemporary Style with a Touch of Tradition"
          description="Discover our collection of elegant Boubous that seamlessly blend modern style with timeless tradition"
          buttonText="Shop BouBous"
          variant="product-caption"
        />
      </div>
      </div>
    </div>
  );
}
