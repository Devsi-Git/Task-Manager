//eslint-disable-next-line
import { motion } from "motion/react";
import { useQuery } from "@tanstack/react-query";
import { getCarts } from "../../services/apiCarts";
import { useUi } from "../../services/Uicontext";
import Cart from "./Cart";
import Loader from "../general/Loader";
import { FaPlus } from "react-icons/fa6";

const containerVarians = {
  hidden: {},
  visiable: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVarians = {
  hidden: { y: 200, opacity: 0 },
  visiable: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
    },
  },
};

function TaskSection({ children }) {
  const { setModalTask, setModalCart } = useUi();

  const { isLoading, data: carts } = useQuery({
    queryKey: ["carts"],
    queryFn: getCarts,
  });

  return (
    <motion.div
      className="flex flex-col bg-[#fffdf1] rounded-xl min-h-30 max-h-140"
      variants={containerVarians}
      initial="hidden"
      animate="visiable"
    >
      <span className="top-0 relative flex justify-between items-center p-4 w-full">
        <h4 className="320:text-sm 740:text-base"> {children} </h4>

        <span
          onClick={() => {
            setModalTask(true);
            setModalCart(null);
          }}
          className="hover:bg-[#ececec9c] p-1.5 rounded-2xl transition-all cursor-pointer"
        >
          <FaPlus />
        </span>
      </span>

      <div className="gap-3 grid 320:grid-cols-[200px_200px_200px] 740:grid-cols-1 p-4 pt-0 max-740:overflow-x-scroll overflow-y-auto 740: 740:scrolhid scrollbar-hide">
        {isLoading || carts === -1 ? (
          <Loader />
        ) : (
          carts.map(
            (cart) =>
              cart.status === children && (
                <motion.span key={cart.id} variants={itemVarians}>
                  <Cart data={cart} />
                </motion.span>
              )
          )
        )}
      </div>
    </motion.div>
  );
}

export default TaskSection;
