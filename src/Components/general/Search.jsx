//eslint-disable-next-line
import { AnimatePresence, motion } from "motion/react";
import { IoSearchOutline } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import { getCarts } from "../../services/apiCarts";
import { useState } from "react";

const searchVariants = {
  open: { opacity: 1, y: 0 },
  close: { opacity: 0, y: -50 },
};

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [resultSubjects, setResultSubjects] = useState([]);
  const { data: carts } = useQuery({
    queryKey: ["carts"],
    queryFn: getCarts,
  });

  function handleSearch(data) {
    if (data.length > 0) {
      const resultObj = carts.filter((cart) =>
        cart.subject.toLowerCase().includes(data.toLowerCase())
      );
      const subjects = resultObj.map((item) => item.subject);

      setResultSubjects(subjects);
    } else {
      setResultSubjects([]);
    }
    setSearchValue(data);
  }

  return (
    <>
      <input
        className="bg-[#ececec9d] max-600:m-0 990:mr-2 max-600:p-2 600:px-2 740:px-4 600:py-1.5 740:py-2 rounded-xl focus:outline-0 focus:ring-[#FABB18] focus:ring-1 focus:ring-offset-2 max-600:ring-offset-amber-200 600:focus:w-[75%] 600:w-[60%] 740:focus:w-[75%] 740:w-[65%] max-600:w-[99%] max-600:text-xs 600:text-sm 830:text-base transition-all max-600:"
        type="text"
        placeholder="جستجو نام فعالیت..."
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <AnimatePresence>
        {resultSubjects.length > 0 ? (
          <motion.ul
            className="top-17 max-600:top-21 max-740:top-15 z-20 absolute flex flex-col gap-2 bg-[#f3f3f327] shadow-lg backdrop-blur-lg max-600:mx-3 p-3 max-600:p-2 border-[#ffffff87] border-1 rounded-2xl w-fit overflow-hidden"
            variants={searchVariants}
            initial="close"
            exit="close"
            animate="open"
          >
            {resultSubjects.map((res, index) => (
              <li
                className="bg-amber-200 p-2 rounded-xl ring-amber-300 hover:ring-2 max-600:text-xs text-sm text-nowrap transition-all cursor-pointer hover"
                key={index}
              >
                {res}
              </li>
            ))}
          </motion.ul>
        ) : (
          searchValue.length > 0 && (
            <motion.p
              className="top-17 max-600:top-21 max-740:top-15 z-20 absolute flex flex-col gap-2 bg-[#f3f3f327] shadow-lg backdrop-blur-lg max-600:mx-3 p-3 max-600:p-2 border-[#ffffff87] border-1 rounded-xl w-fit overflow-hidden max-600:text-xs"
              variants={searchVariants}
              initial="close"
              exit="close"
              animate="open"
            >
              نتیجه ای یافت نشد
            </motion.p>
          )
        )}
      </AnimatePresence>
    </>
  );
}

export default Search;
