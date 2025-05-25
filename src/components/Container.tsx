
const Container = ({
  children,
  bg,
}: {
  children: React.ReactNode;
  bg?: string;
}) => {
  return (
    <div className={`pt-[30px] pb-4 px-4 md:px-8 lg:px-12 ${bg}`}>
      {children}
    </div>
  );
};

export default Container