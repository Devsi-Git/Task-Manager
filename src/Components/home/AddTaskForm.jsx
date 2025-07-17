import { addCart, updateCart } from "../../services/apiCarts";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUi } from "../../services/Uicontext";
import Input from "../general/Input";
import Loader from "../general/Loader";
import Btn from "../general/Btn";
import toast from "react-hot-toast";

function AddTaskForm() {
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
      toast.success("با موفقیت اضافه شد", {
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
    const statusErr = err.status?.message;
    toast.error(subjectErr || statusErr, {
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
      className="flex flex-col gap-2 w-fitt"
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
        className="bg-[#fffdf1] px-3 py-2 rounded-xl focus:outline-0 focus:ring-[#FABB18] focus:ring-1 focus:ring-offset-[#F3F3F3] focus:ring-offset-2 w-70 max-500:w-55 placeholder:text-[#cecece] placeholder:text-xs text-sm transition-all scrollbar-hide"
        {...register("description", {
          validate: (value) => {
            return (
              value.length <= 295 || "نام فعالیت میتواند حداکثر 35 کرکتر باشد."
            );
          },
        })}
        placeholder="توضیحات این  فعالیت"
      ></textarea>
      
      <label className="flex space-x-3 mt-2 text-sm">
        <input
          type="radio"
          value="برای انجام"
          {...register("status", {
            required: "لطفاً یکی از وضعیت‌ها را انتخاب کنید.",
          })}
        />
        <p>برای انجام</p>
      </label>
      <label className="flex space-x-3 text-sm">
        <input type="radio" value="درحال انجام" {...register("status")} />
        <p>درحال انجام</p>
      </label>
      <label className="flex space-x-3 text-sm">
        <input type="radio" value="انجام شده" {...register("status")} />
        <p>انجام شده</p>
      </label>
      {isCreating || isEditing ? <Loader /> : <Btn>ثبت فعالیت</Btn>}
    </form>
  );
}

export default AddTaskForm;
