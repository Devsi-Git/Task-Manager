import { FaGithub, FaLinkedin } from "react-icons/fa";
import Circle from "./Circle";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="flex flex-col items-center gap-6 bg-white mx-auto mt-10 mb-6 p-4 rounded-2xl w-fitt h-35">
      <h4 className="text-[#6d6d6d] text-sm">contact us</h4>
      <div className="flex gap-5">
        <Circle address={"https://github.com/Devsi-Git"}>
          <FaGithub />
        </Circle>
        <Circle address={"mailto:yousefi.devsi@gmail.com"}>
          <MdEmail />
        </Circle>
        <Circle address={"https://github.com/Devsi-Git"}>
          <FaLinkedin />
        </Circle>
      </div>
    </footer>
  );
}

export default Footer;
