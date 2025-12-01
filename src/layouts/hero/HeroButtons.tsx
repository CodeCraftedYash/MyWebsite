import Button from "../../components/buttons/Button"
import { FaFileDownload } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const HeroButtons = () => {
  return (
    <div className="flex flex-nowrap justify-between gap-5">
        <Button cb={()=>alert("button was clicked")} text="Hire Me" Icon={FaArrowRight}/>
        <Button cb={()=>alert("button was clicked")} text="CV" Icon={FaFileDownload}/>
    </div>
  )
}

export default HeroButtons