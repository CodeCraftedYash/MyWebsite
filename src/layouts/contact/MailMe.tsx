
import { useState } from "react";
import { IoMdMail } from "react-icons/io";  
import MessageModal from "../../components/modal/MessageModal";
const MailMe = () => {
    const [run,setRun] = useState(1);
    const handleClick = () => {
        navigator.clipboard.writeText("yashkumarmishra1000@gmail.com")
        setRun(prev => prev + 1);
    }
  return (
    <div style={{
        fontSize:"var(--font-size-sub-heading)"
    }}>
        <div className="w-fit relative">
        <a href="mailto:yashkumarmishra1000@gmail.com" onClick={handleClick} className="flex items-center gap-2 whitespace-nowrap ">Let's Talk <IoMdMail  className="text-red-600"/></a>
        {run && <MessageModal text="mail copied" success={true} key={run} />}
        </div>
    </div>
  )
}

export default MailMe