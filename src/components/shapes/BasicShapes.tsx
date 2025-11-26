type shapeType = {
  type: "circle" | "square" | "triangle" | "rectangle";
};
const BasicShapes = ({ type = "circle" }: shapeType) => {
  const shape = [
    <div
      className="bg-(--color-shapes) aspect-square rounded-full h-fit"
      style={{ boxShadow: "var(--box-shadow)" }}
    ></div>,
    <div
      className="bg-(--color-shapes) aspect-square h-fit"
      style={{ boxShadow: "var(--box-shadow)" }}
    ></div>,
    <div style={{ filter: "drop-shadow(var(--drop-shadow))" }}>
        <div
          className="bg-(--color-shapes) aspect-square h-fit"
          style={{
            clipPath: "polygon(50% 0, 0 100%, 100% 100%)",
          }}
        ></div>
      </div>,
      <div
      className="bg-(--color-shapes) aspect-video h-fit"
      style={{ boxShadow: "var(--box-shadow)" }}
    ></div>,
  ];
  const index = type == "circle" ? 0 : type == "square" ? 1 : type == "triangle" ? 2 : type == "rectangle" ? 3 : 0 ;
  return (
    <>
    {shape[index]}
    </>
  );
};

export default BasicShapes;
