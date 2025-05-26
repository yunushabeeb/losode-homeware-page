const ProductCard = ({
  title,
  description,
  image,
  href,
  price,
}: {
  title: string;
  description: string;
  image: string;
  href: string;
  price: string;
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="bg-[#F9F9F9]">
        <img src={image} alt={title} />
      </div>
      <h2 className="uppercase text-xl tracking-wider truncate mt-5 mb-2">
        {title}
      </h2>
      <p className="w-full font-light truncate">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <a href={href} className="underline">
          Buy Now
        </a>
        <p>₦{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
