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
  variant: 'trends' | 'products';
  index?: number;
}) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1
        className={clsx(
          'text-[28px] text-center mx-auto font-semibold',
          variant === 'trends' && 'text-left uppercase',
        )}
      >
        {title}
      </h1>
      <p className={clsx('text-sm', variant === 'products' && 'text-center')}>
        {description}
      </p>
      {buttonText && (
        <a
          href="#"
          className={clsx(
            variant === 'trends'
              ? index !== 1
                ? 'py-1 px-4 bg-black text-white hover:bg-white hover:text-black hover:border-2 border-black text-base w-[254px] text-center flex items-center justify-center mr-auto'
                : 'text-dark text-center underline'
              : 'text-dark underline',
          )}
        >
          {buttonText}
        </a>
      )}
    </div>
  );
};

export default Content;
