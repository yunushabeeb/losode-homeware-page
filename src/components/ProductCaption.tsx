import Content from "./Content"
import { productCaption } from '../lib/data';

export const ProductCaption = () => {
  return (
    <div className="relative">
      <img
        src={productCaption.desktopImage}
        alt="Product Caption"
        className="max-sm:hidden"
      />
      <img
        src={productCaption.mobileImage}
        alt="Product Caption"
        className="sm:hidden"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
      >
        <div className="flex justify-center text-white mb-4 md:mb-8 absolute left-0 right-0 bottom-0  px-3">
          <Content
            title={productCaption.title}
            description={productCaption.description}
            buttonText={productCaption.buttonText}
            variant="product-caption"
          />
        </div>
      </div>
    </div>
  );
}
