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
          ? 'w-screen flex flex-col-reverse md:flex-row items-center gap-6'
          : 'w-full flex-1',
      )}
    >
      <img
        src={image}
        alt="Trend Card"
        className={clsx(
          'mb-4 object-cover object-top',
          index === 1
            ? 'w-full md:w-7/12 lg:w-11/12 h-[400px] lg:h-[450px] lg:object-center object-cover'
            : 'h-[429px] md:h-[550px] lg:h-[600px] xl:h-[700px] w-full md:object-center',
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
