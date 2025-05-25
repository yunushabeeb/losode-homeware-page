import clsx from 'clsx';

const Content = ({
  title,
  description,
  buttonText,
  variant,
  index,
}: {
  title: string;
  description: string;
  buttonText?: string;
  variant: 'trends' | 'products' | 'hero' | 'product-caption';
  index?: number;
}) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1
        className={clsx(
          'text-[28px] text-center mx-auto font-semibold',
          variant === 'trends' && 'text-left ml-0 uppercase',
          variant === 'product-caption' && 'uppercase',
        )}
      >
        {title}
      </h1>
      <p
        className={clsx(
          'text-sm',
          variant === 'products' && 'text-center w-full mx-auto sm:w-3/4',
        )}
      >
        {description}
      </p>
      {buttonText && (
        <a
          href="#"
          className={clsx(
            variant === 'trends' || variant === 'hero'
              ? index !== 1
                ? 'py-2 px-4 bg-black text-white hover:bg-white hover:text-black hover:border-2 border-black text-base w-[254px] text-center flex items-center justify-center mr-auto shadow-[0_2px_0_rgba(0,0,0,0.75)]'
                : 'text-dark flex mr-auto underline'
              : variant === 'product-caption'
              ? 'no-underline'
              : 'text-dark underline',
            variant === 'trends' && 'ml-0',
            (variant === 'hero' || variant === 'product-caption') && 'mx-auto',
            variant === 'product-caption' &&
              ' no-underline py-2 px-4 text-[#000] bg-white w-[254px] text-center shadow-[0_2px_0_rgba(0,0,0,0.75)]',
          )}
        >
          {buttonText}
        </a>
      )}
    </div>
  );
};

export default Content;
