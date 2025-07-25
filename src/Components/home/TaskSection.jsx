//eslint-disable-next-line
import { motion } from "motion/react";
import { useQuery } from "@tanstack/react-query";
import { getCarts } from "../../services/apiCarts";
import { FaPlus } from "react-icons/fa6";
import { useUi } from "../../services/Uicontext";
import Cart from "./Cart";
import Loader from "../general/Loader";
import { useAuth } from "../../services/AuthContext";
import { useNavigate } from "react-router-dom";

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
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleAddTaskClick() {
    if (isAuthenticated) {
      setModalTask(true);
      setModalCart(null);
    } else {
      navigate("/Login");
    }
  }

  const { isLoading, data: carts } = useQuery({
    queryKey: ["carts"],
    queryFn: getCarts,
  });

  return (
    <motion.div
      className="flex flex-col bg-[#fffdf1] rounded-xl min-h-30"
      variants={containerVarians}
      initial="hidden"
      animate="visiable"
    >
      <span className="top-0 relative flex justify-between items-center p-4 pb-0 w-full">
        <h4 className="320:text-sm 740:text-base"> {children} </h4>

        <span
          className="hover:bg-[#dadada8c] p-1.5 rounded-2xl transition-all cursor-pointer"
          onClick={() => {
            handleAddTaskClick();
          }}
        >
          <FaPlus />
        </span>
      </span>

      <div className="gap-3 grid 320:grid-cols-[200px_200px_200px] 740:grid-cols-1 p-4 max-740:overflow-x-scroll overflow-y-auto scrollbar-hide">
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
