type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({children}) => {
  return <div className="col-span-12">{children}</div>;
};

export default Container;
