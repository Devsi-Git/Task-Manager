//eslint-disable-next-line
import { AnimatePresence, motion } from "motion/react";
import { useQuery } from "@tanstack/react-query";
import { getCarts } from "../../services/apiCarts";
import { useUi } from "../../services/Uicontext";
import { useState } from "react";

const searchVariants = {
  open: { opacity: 1, y: 0 },
  close: { opacity: 0, y: -50 },
};

function Search() {
  const { setMenu } = useUi();
  const [searchValue, setSearchValue] = useState("");
  const [resultSearch, setResultSearch] = useState([]);
  const { data: carts } = useQuery({
    queryKey: ["carts"],
    queryFn: getCarts,
  });

  function handleSearch(data) {
    if (data.length > 0) {
      const resultCart = carts.filter((cart) =>
        cart.subject.toLowerCase().includes(data.toLowerCase())
      );
      setResultSearch(resultCart);
    } else {
      setResultSearch([]);
    }
    setSearchValue(data);
  }

  function handleBlur() {
    setTimeout(() => {
      setSearchValue("");
      setResultSearch([]);
    }, 50);
  }

  function scrollToCard(id) {
    const el = document.getElementById(`cart-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <>
      <input
        className="bg-[#ececec9d] dark:bg-[#535C91] max-600:dark:bg-[#5f6795] max-600:m-0 990:mr-2 max-600:p-2 600:px-2 740:px-4 600:py-1.5 740:py-2 rounded-xl focus:outline-0 focus:ring-[#FABB18] focus:ring-1 dark:focus:ring-[#9290C3] focus:ring-offset-2 dark:ring-offset-[#070F2B] max-600:dark:ring-offset-[#535C91] max-600:ring-offset-amber-200 600:focus:w-[75%] 600:w-[60%] 740:focus:w-[75%] 740:w-[65%] max-600:w-[99%] dark:placeholder:text-[#b8b4d1] dark:text-[#e4e1f8] max-600:text-xs 600:text-sm 830:text-base transition-all"
        type="text"
        placeholder="جستجو نام فعالیت..."
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
        onBlur={handleBlur}
      />
      <AnimatePresence>
        {resultSearch.length > 0 ? (
          <motion.ul
            className="top-17 max-600:top-21 max-740:top-15 max-600:right-0 z-20 absolute flex flex-col gap-2 bg-[#f3f3f327] shadow-lg dark:shadow-[#ffffff57] backdrop-blur-lg max-600:mx-3 p-3 max-600:p-2 border-[#ffffff87] border-1 rounded-2xl w-fit overflow-hidden"
            variants={searchVariants}
            initial="close"
            exit="close"
            animate="open"
          >
            {resultSearch.map((res) => (
              <li
                className="flex flex-col items-start bg-amber-200 dark:bg-[#535C91] p-2 rounded-xl ring-amber-300 hover:ring-2 dark:ring-[#1B1A55] min-w-20 600:min-w-30 dark:text-[#edebff] max-600:text-xs max-990:text-sm text-center text-nowrap transition-all cursor-pointer hover"
                key={res.id}
                onClick={() => {
                  scrollToCard(res.id);
                  setMenu(false);
                }}
              >
                <h5 className="mr-1 mb-0.5">{res.subject}</h5>
                <p className="mr-1 w-70 max-600:w-60 max-600:text-[11px] text-xs truncate">
                  {res.description}
                </p>
              </li>
            ))}
          </motion.ul>
        ) : (
          searchValue.length > 0 && (
            <motion.p
              className="top-17 max-600:top-21 max-740:top-15 z-20 absolute flex flex-col gap-2 bg-[#f3f3f327] shadow dark:shadow-[#ffffff57] backdrop-blur-lg max-600:mx-3 p-3 max-600:p-2 border-[#ffffff87] border-1 rounded-xl w-fit overflow-hidden dark:text-[#edebff] max-600:text-xs max-990:text-sm"
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
