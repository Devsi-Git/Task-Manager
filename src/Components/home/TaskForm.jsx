import { addCart, updateCart } from "../../services/apiCarts";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUi } from "../../services/Uicontext";
import Input from "../general/Input";
import Loader from "../general/Loader";
import Btn from "../general/Btn";
import toast from "react-hot-toast";

function TaskForm() {
  const queryClinet = useQueryClient();
  const { setModalTask, cartToEdit, setCartToEdit } = useUi();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: cartToEdit,
  });

  const { mutate: creatCart, isPending: isCreating } = useMutation({
    mutationFn: addCart,
    onSuccess: () => {
      queryClinet.invalidateQueries({ queryKey: ["carts"] });
      setModalTask(false);
      reset();
      toast.success("با موفقیت اضافه شد.", {
        style: {
          fontFamily: "Vazirmatn",
          border: "1px solid #FABB18",
          padding: "11px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#FABB18",
          secondary: "#fff",
        },
      });
    },
  });

  const { mutate: editCart, isPending: isEditing } = useMutation({
    mutationFn: ({ newData, id }) => updateCart(newData, id),
    onSuccess: () => {
      queryClinet.invalidateQueries({ queryKey: ["carts"] });
      setModalTask(false);
      reset();
      toast.success("با موفقیت ویرایش شد.", {
        style: {
          fontFamily: "Vazirmatn",
          border: "1px solid #FABB18",
          padding: "11px",
          color: "#713200",
        },
        icon: "✍🏼",
      });
    },
  });

  function onSubmit(data) {
    let id = cartToEdit.id;
    if (id) {
      editCart({ newData: data, id });
      setCartToEdit({});
    } else {
      creatCart(data);
    }
  }

  function onError(err) {
    const subjectErr = err.subject?.message;
    const descriptionErr = err.description?.message;
    const statusErr = err.status?.message;
    toast.error(subjectErr || statusErr || descriptionErr, {
      style: {
        fontFamily: "Vazirmatn",
        border: "1px solid #713200",
        padding: "11px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });
  }

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <Input
        placeholder={"موضوع فعالیت"}
        type="text"
        {...register("subject", {
          required: "موضوع فعالیت نمیتواند خالی باشد.",
          validate: (value) => {
            return (
              value.length <= 35 || "نام فعالیت باید حداکثر 35 کرکتر باشد."
            );
          },
        })}
      />

      <textarea
        rows="4"
        className="bg-[#fffdf1] dark:bg-[#9290C3] px-3 py-2 rounded-xl focus:outline-0 focus:ring-[#FABB18] focus:ring-1 dark:focus:ring-[#9290C3] focus:ring-offset-2 dark:focus:ring-offset-[#535C91] dark:ring-offset-[#535C91]focus:ring-offset-[#F3F3F3] w-70 max-420:w-55 max-500:w-65 dark:placeholder:text-[#585786] dark:text-[#1B1A55] placeholder:text-[#cecece] placeholder:text-xs text-sm transition-all scrollbar-hide"
        {...register("description", {
          validate: (value) => {
            return (
              value.length <= 295 || "توضیحات میتواند حداکثر 295 کرکتر باشد."
            );
          },
        })}
        placeholder="توضیحات این  فعالیت"
      ></textarea>

      <div className="flex max-420:flex-col gap-3.5 max-420:gap-1 mx-auto my-2.5 max-420:my-1 max-420:mr-2 max-420:ml-0">
        {[
          { value: "برای انجام", label: "برای انجام" },
          { value: "درحال انجام", label: "درحال انجام" },
          { value: "انجام شده", label: "انجام شده" },
        ].map((item) => (
          <label
            key={item.value}
            className="flex items-center space-x-1 max-500:text-xs text-sm cursor-pointer"
          >
            <input
              type="radio"
              value={item.value}
              {...register("status", {
                required: "لطفاً یکی از وضعیت‌ها را انتخاب کنید.",
              })}
              className="bg-white checked:bg-amber-500 border-2 border-gray-300 checked:border-amber-300 rounded-full w-4 h-4 transition-colors duration-200 appearance-none"
            />
            <p className="dark:text-[#c7c3df]">{item.label}</p>
          </label>
        ))}
      </div>

      {isCreating || isEditing ? <Loader /> : <Btn>ثبت فعالیت</Btn>}
    </form>
  );
}

export default TaskForm;
