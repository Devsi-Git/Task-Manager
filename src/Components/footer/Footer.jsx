import { FaGithub, FaLinkedin } from "react-icons/fa";
import Circle from "./Circle";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="flex flex-col items-center gap-6 mx-auto mt-14 rounded-2xl w-fitt h-35">
      <h4 className="text-[#6d6d6d] dark:text-[#9d9cc4] text-sm">contact us</h4>
      <div className="flex gap-5">
        <Circle address={"https://github.com/Devsi-Git"}>
          <FaGithub className="dark:text-[#9290C3]" />
        </Circle>
        <Circle address={"mailto:yousefi.devsi@gmail.com"}>
          <MdEmail className="dark:text-[#9290C3]" />
        </Circle>
        <Circle address={"https://github.com/Devsi-Git"}>
          <FaLinkedin className="dark:text-[#9290C3]" />
        </Circle>
      </div>
    </footer>
  );
}

export default Footer;
