import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full text-(--color-text-dark) flex flex-nowrap items-center gap-1 py-2 justify-center bg-(--color-background) border-t-2 border-dashed">
        <h5>Made with</h5>
        <FaHeart className="text-red-500"/>
        <h5>by Yash Mishra</h5>
    </footer>
  )
}

export default Footer