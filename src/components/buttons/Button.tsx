import type { IconType } from "react-icons";

type BtnProps = {
    cb: () => void;
    Icon: IconType;
    text:string;
}

const Button = ({cb,Icon,text}:BtnProps) => {
  return (
    <button onClick={cb} className="bg-gray-300 p-2 px-4 rounded-(--border-radius) hover:scale-110 duration-200 ease-in-out text-white font-semibold text-sm text-nowrap flex flex-nowrap items-center justify-between gap-2"
    style={{backgroundImage:"var(--gradient-blue)",boxShadow:"var(--box-shadow)"}}>{text} <Icon /></button>
  )
}

export default Button