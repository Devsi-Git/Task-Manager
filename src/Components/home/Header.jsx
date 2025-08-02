//eslint-disable-next-line
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../services/AuthContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IoIosLogOut } from "react-icons/io";
import { logout } from "../../services/apiUser";
import BurgerMenu from "../menu/BurgerMenu";
import Search from "../general/Search";
import Btn from "../general/Btn";
import LoaderMini from "../general/LoaderMini";

function Header() {
  const { session } = useAuth();
  const navigate = useNavigate();
  const queryClinet = useQueryClient();
  const { mutate, isPending: isLogouting } = useMutation({
    mutationFn: logout,
    onSuccess: () => queryClinet.removeQueries(),
  });

  return (
    <header className="justify-between items-center grid 320:grid-cols-[5%_95%] 600:grid-cols-[10%_50%_40%] 740:grid-cols-[55%_45%] 320:mx-2 740:mr-8 py-4 text-center">
      <BurgerMenu />

      <div className="320:hidden 600:flex items-center 740:gap-2">
        <Search />
      </div>

      {session?.user ? (
        <div className="flex justify-end items-center gap-3">
          <motion.span
            className="320:ml-2 640:ml-4"
            initial={{ rotate: 0, transformOrigin: "top" }}
            whileHover={{
              rotate: [-15, 15, -15, 0],
            }}
          >
            <svg
              className="320:w-4 740:w-4.5 990:w-5"
              width="22"
              height="22"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="dark:fill-[#535C91]"
                d="M10.4526 25.6682C11.0608 27.0357 12.4092 28 14.0008 28C15.5923 28 16.9408 27.0357 17.549 25.6682C16.4267 25.7231 15.2597 25.76 14.0008 25.76C12.7419 25.76 11.5749 25.7231 10.4526 25.6682Z"
                fill="black"
              />
              <path
                className="dark:fill-[#535C91]"
                d="M26.3532 19.74C24.877 17.8785 22.3996 14.2195 22.3996 10.64C22.3996 7.09073 20.1193 3.89758 16.7996 2.72382C16.7593 1.21406 15.5183 0 14.0007 0C12.482 0 11.2422 1.21406 11.2018 2.72382C7.88101 3.89758 5.6007 7.09073 5.6007 10.64C5.6007 14.2207 3.1244 17.8785 1.64712 19.74C1.15433 20.3616 1.00197 21.1825 1.24058 21.9363C1.47354 22.6721 2.05367 23.2422 2.79288 23.4595C4.08761 23.8415 6.20997 24.2715 9.44682 24.491C10.8479 24.5851 12.3543 24.64 14.0008 24.64C15.646 24.64 17.1525 24.5851 18.5535 24.491C21.7915 24.2715 23.9128 23.8415 25.2086 23.4595C25.9478 23.2422 26.5268 22.6722 26.7598 21.9363C26.9983 21.1825 26.8449 20.3616 26.3532 19.74Z"
                fill="black"
              />
            </svg>
          </motion.span>
          <div className="text-left">
            <p className="text-gray-900 dark:text-[#c7c3df] 320:text-sm 740:text-base text-nowrap">
              {session.user.user_metadata.username}
            </p>
            <p
              className="flex justify-end items-center gap-1 text-[#8F8F8F] 740:text-[13px] hover:text-[#595959] dark:text-[#7a80a4] 320:text-xs cursor-pointer"
              onClick={() => mutate()}
            >
              {isLogouting ? (
                <LoaderMini />
              ) : (
                <>
                  <IoIosLogOut />
                  خروج
                </>
              )}
            </p>
          </div>
          <span className="flex justify-center items-center bg-[#FABB18] dark:bg-[#535C91] 320:ml-2 740:ml-0 990:ml-5 pt-1.5 rounded-full 320:w-[35px] 740:w-[45px] 990:w-[50px] 320:h-[35px] 740:h-[45px] 990:h-[50px] overflow-hidden">
            <img className="w-11" src="../../../assets/person1.svg "></img>
          </span>
        </div>
      ) : (
        <div className="flex justify-end">
          <span onClick={() => navigate("/Login")}>
            <Btn>ورود کاربر</Btn>
          </span>
        </div>
      )}
    </header>
  );
}

export default Header;
