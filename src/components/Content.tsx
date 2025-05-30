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
    <div
      className={clsx(
        'flex flex-col items-center',

        variant === 'product-caption' ? 'gap-3' : 'gap-4',
        index === 1 && 'lg:w-1/3 xl:w-6/12',
      )}
    >
      <h1
        className={clsx(
          'text-[28px] text-center mx-auto font-semibold',
          variant === 'trends' &&
            'text-left lg:text-[32px] ml-0 uppercase w-full',
          variant === 'product-caption' &&
            'uppercase lg:text-[38px] text-left sm:text-center',
          variant === 'hero' && 'lg:text-4xl',
          variant === 'products' && 'lg:text-4xl',
          variant === 'trends' && index !== 1 ? 'line-clamp-1' : 'line-clamp-2',
        )}
      >
        {title}
      </h1>
      <p
        className={clsx(
          'text-md tracking-wider',
          variant === 'products' &&
            'text-center lg:text-lg w-full mx-auto sm:w-3/4',
          variant === 'product-caption' &&
            'sm:text-center lg:text-lg mt-2 mb-3',
          variant === 'trends' && 'line-clamp-4 lg:text-lg',
          variant === 'hero' && 'lg:text-xl',
        )}
      >
        {description}
      </p>
      {buttonText && (
        <a
          href="#"
          className={clsx(
            'rounded-sm py-3 transition-all duration-200',
            variant === 'trends' || variant === 'hero'
              ? index !== 1
                ? 'py-2 px-4 bg-black text-white hover:bg-white hover:text-black border border-transparent hover:border-black text-base w-[254px] text-center flex items-center justify-center mr-auto'
                : 'text-dark flex mr-auto underline'
              : variant === 'product-caption'
              ? 'no-underline'
              : 'text-dark underline',
            variant === 'trends' && 'ml-0',
            (variant === 'hero' || variant === 'product-caption') && 'mx-auto',
            variant === 'product-caption' &&
              ' no-underline py-2 px-4 text-[#000] bg-white hover:bg-black border hover:text-white w-full sm:w-[254px] mx-auto text-center shadow-[0_2px_0_rgba(0,0,0,0.75)] font-light',
          )}
        >
          {buttonText}
        </a>
      )}
    </div>
  );
};

export default Content;
