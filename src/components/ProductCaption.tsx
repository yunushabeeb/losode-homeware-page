import Content from "./Content"

export const ProductCaption = () => {
  return (
    <div className="relative">
      <img
        src="/src/assets/images/products/product-caption.png"
        alt="Product Caption"
        className="max-sm:hidden"
      />
      <img
        src="/src/assets/images/products/product-caption-mobile.png"
        alt="Product Caption"
        className="sm:hidden"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
      >
        <div className="flex justify-center text-white mb-4 md:mb-8 absolute left-0 right-0 bottom-0  px-3">
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
