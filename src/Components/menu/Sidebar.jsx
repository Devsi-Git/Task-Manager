// eslint-disable-next-line
import { motion } from "framer-motion";
import { RxDashboard } from "react-icons/rx";
import { IoIosLogIn } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import SideBtn from "./SideBtn";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

function Sidebar() {
  return (
    <aside className="max-740:hidden top-0 right-0 sticky flex flex-col justify-center items-center gap-5 320:bg-amber-50 740:bg-white p-7 1020:px-7 740:px-4 320:w-full 740:w-fit 320:h-full">
      <svg
        className="mb-9 1020:w-31"
        width="110"
        height="27"
        viewBox="0 0 131 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.132 0.512V6.164H14.256V26H7.2V6.164H0.396V0.512H21.132ZM39.5516 21.752H30.5156L29.1116 26H21.6596L30.9836 0.619998H39.1556L48.4436 26H40.9556L39.5516 21.752ZM37.7876 16.424L35.0516 8.144L32.2796 16.424H37.7876ZM69.5379 18.656C69.5379 20.072 69.1779 21.356 68.4579 20.508C67.7379 23.66 66.6819 24.572 65.2899 25.244C63.8979 25.916 62.2099 26.252 60.2859 26.252C57.3339 26.252 54.8979 25.544 52.9779 24.128C51.0819 20.712 50.0499 20.696 49.8819 18.08H57.4059C57.4779 18.968 57.7539 19.628 58.2339 20.06C58.7139 20.492 59.3019 20.708 59.9979 20.708C60.6219 20.708 61.1019 20.552 61.4379 20.24C61.7979 19.928 61.9779 19.484 61.9779 18.908C61.9779 18.14 61.6299 17.552 60.9339 17.144C60.2379 16.712 59.1339 16.244 57.6219 15.74C56.0139 15.188 54.6819 14.648 53.6259 14.12C52.5939 13.592 51.6939 12.8 50.9259 11.744C50.1819 10.688 49.8099 9.332 49.8099 7.676C49.8099 6.092 50.2179 4.736 51.0339 3.608C51.8499 2.456 52.9659 1.592 54.3819 1.016C55.7979 0.415999 57.4059 0.115999 59.2059 0.115999C62.1339 0.115999 64.4619 0.811999 66.1899 2.204C67.9419 3.572 68.9019 5.504 69.0699 8H61.4739C61.3779 7.208 61.1259 6.62 60.7179 6.236C60.3339 5.852 59.8179 5.66 59.1699 5.66C58.6179 5.66 58.1859 5.804 57.8739 6.092C57.5619 6.38 57.4059 6.812 57.4059 7.388C57.4059 8.108 57.7419 8.672 58.4139 9.08C59.1099 9.488 60.1899 9.944 61.6539 10.448C63.2619 11.024 64.5939 11.588 65.6499 12.14C66.7059 12.692 67.6179 13.496 68.3859 14.552C69.1539 15.608 69.5379 16.976 69.5379 18.656ZM86.4312 12.968L96.2952 26H87.7632L79.7352 14.732V26H72.6432V0.512H79.7352V11.528L87.8352 0.512H96.2952L86.4312 12.968Z"
          fill="black"
        />
        <path
          d="M121.88 0.512L112.88 17.9V26H105.824V17.9L96.8237 0.512H104.924L109.424 10.232L113.888 0.512H121.88ZM130.199 19.088V26H123.035V19.088H130.199Z"
          fill="#FABB18"
        />
      </svg>

      <motion.nav
        className="flex flex-col items-center gap-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.li className="list-none" variants={itemVariants}>
          <SideBtn to="home" icon={<RxDashboard />}>
            داشبورد
          </SideBtn>
        </motion.li>

        <motion.li className="list-none" variants={itemVariants}>
          <SideBtn to="login" icon={<IoIosLogIn />}>
            ثبت نام
          </SideBtn>
        </motion.li>

        <motion.li className="list-none" variants={itemVariants}>
          <SideBtn to="/" icon={<IoSettingsOutline />}>
            تنظیمات
          </SideBtn>
        </motion.li>
      </motion.nav>
    </aside>
  );
}

export default Sidebar;
