import BasicShapes from "./BasicShapes";

const SquarePattern = () => {
  return (
    <div className="aspect-square flex flex-col flex-nowrap origin-center">
      <div className="w-[15%] ml-[60%]">
        <BasicShapes type="square" />
      </div>
      <div className="flex flex-nowrap mt-auto">
        <div className="w-[70%]"><BasicShapes type="square" /></div>
        <BasicShapes type="square" />
        <div className="w-[15%] ml-auto -mt-[5%]"><BasicShapes type="square" /></div>
        <BasicShapes type="square" />
      </div>
    </div>
  );
};

export default SquarePattern;
