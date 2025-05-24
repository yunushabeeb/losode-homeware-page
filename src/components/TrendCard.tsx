import clsx from 'clsx';
import Content from './Content';

const TrendCard = ({
  index,
  title,
  description,
  buttonText,
  image,
}: {
  index: number;
  title: string;
  description: string;
  buttonText: string;
  image: string;
}) => {
  return (
    <section
      className={clsx(
        index === 1
          ? 'w-screen flex flex-row items-center gap-6'
          : 'w-full flex-1',
      )}
    >
      <img
        src={image}
        alt="Trend Card"
        className={clsx(
          'mb-4 object-cover object-top',
          index === 1 ? 'w-7/12 h-[400px]' : 'h-[429px] w-full',
        )}
      />

      <Content
        title={title}
        description={description}
        buttonText={buttonText}
        variant="trends"
        index={index}
      />
    </section>
  );
};

export default TrendCard;
