import { useMutation, useQueryClient } from "@tanstack/react-query";
import { delCart } from "../../services/apiCarts";
import { useUi } from "../../services/Uicontext";
import { AnimatePresence } from "motion/react";
import { LuTrash2 } from "react-icons/lu";
import { BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../services/AuthContext";
import Loader from "../general/Loader";
import Modal from "../general/Modal";
import toast from "react-hot-toast";
import jalaali from "jalaali-js";

function Cart({ data }) {
  const navigate = useNavigate();
  const queryClinet = useQueryClient();
  const { isAuthenticated } = useAuth();
  const { setModalCart, modalCart, setModalTask, setCartToEdit } = useUi();

  const { isPending, mutate } = useMutation({
    mutationFn: delCart,
    onSuccess: () => {
      queryClinet.invalidateQueries({ queryKey: ["carts"] });
      toast.success("با موفقیت حذف شد.", {
        style: {
          fontFamily: "Vazirmatn",
          border: "1px solid #FABB18",
          padding: "11px",
          color: "#713200",
        },
        icon: "🗑️",
      });
    },
  });

  function handleClick(action) {
    if (isAuthenticated) {
      switch (action) {
        case "edit":
          mutate(data.id);
          break;
        case "delet":
          setCartToEdit(data);
          setModalCart(null);
          setModalTask(true);
          break;
      }
    } else {
      navigate("/Login");
    }
  }

  const date = new Date(data.createdAt);
  const { jy, jm, jd } = jalaali.toJalaali(date);
  const persianDate = `${jy}/${jm.toString().padStart(2, "0")}/${jd
    .toString()
    .padStart(2, "0")}`;

  return (
    <div
      id={`cart-${data.id}`}
      className="flex flex-col bg-sky-200 hover:shadow-[0_0_10px] hover:shadow-sky-200 px-3 py-2 rounded-2xl rounded-tr-md min-w-50"
    >
      <div className="relative flex justify-between items-center">
        <button
          className="hover:bg-[#ffffff90] px-1 rounded-2xl transition-all cursor-pointer"
          onClick={() => {
            setModalCart(data.id);
          }}
        >
          ◦◦◦
        </button>

        <AnimatePresence>
          {modalCart === data.id && (
            <Modal styles="absolute p-2 flex flex-col items-center w-33 z-80 shadow-lg rounded-2xl bg-amber-200">
              {isPending ? (
                <Loader />
              ) : (
                <>
                  <div
                    onClick={() => {
                      handleClick("edit");
                    }}
                    className="flex justify-between items-center p-1 w-full hover:w-[96%] text-gray-700 text-sm transition-all cursor-pointer"
                  >
                    <p>حذف فعالیت</p>
                    <LuTrash2 />
                  </div>

                  <span className="flex bg-[#d2d17b] rounded-2xl w-[93%] h-px"></span>

                  <div
                    onClick={() => {
                      handleClick("delet");
                    }}
                    className="flex justify-between items-center p-1 w-full hover:w-[96%] text-gray-700 text-sm transition-all cursor-pointer"
                  >
                    <p>ویرایش فعالیت</p>
                    <BiEdit />
                  </div>
                </>
              )}
            </Modal>
          )}
        </AnimatePresence>

        <time
          dateTime={data.createdAt}
          className="text-[#929292] 320:text-xs 740:text-sm text-end"
        >
          {persianDate}
        </time>
      </div>

      <h3 className="mr-3 text-gray-800 320:text-sm 740:text-base">
        {data.subject}
      </h3>

      <p className="my-2 text-gray-800 320:text-[13px] 740:text-sm">
        {data.description}
      </p>

      {/* <span className="flex justify-end -space-x-0.5">
        <BiCheckbox className="text-gray-800-" />
        <TiInputChecked className="text-gray-800-" />
        <TiInputChecked className="text-gray-800-" />
        <TiInputChecked className="text-gray-800-" />
      </span> */}
    </div>
  );
}

export default Cart;
