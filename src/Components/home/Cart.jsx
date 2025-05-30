function Cart() {
  return (
    <div className="flex flex-col bg-sky-200 hover:shadow-[0_0_10px] hover:shadow-sky-200 px-3 py-2 rounded-2xl rounded-tr-md min-w-50 cursor-pointer">
      <span className="flex justify-between items-center">
        <button className="hover:bg-[#ececec90] px-1 rounded-2xl transition-all cursor-pointer">
          ◦◦◦
        </button>
        <h3 className="text-[#929292] 320:text-xs 740:text-sm text-end">
          2025/06/14
        </h3>
      </span>

      <h4 className="mr-3 text-gray-800 320:text-sm 740:text-base">موضوع فعالیت</h4>

      <p className="my-2 text-gray-800 320:text-[13px] 740:text-sm">
        متن امتحانی نسبتا کوتاه برای توضیحات فعالیت و کارهایی که نیاره انجام بشن
        این متن جهت تست نوشته شده
      </p>

      <span className="flex justify-end gap-0.5">
        <svg className="320:w-3 740:w-3.5" width="14" height="14" viewBox="0 0 120 120">
          <rect
            x="10"
            y="10"
            width="100"
            height="100"
            rx="30"
            stroke="black"
            stroke-width="10"
            stroke-linejoin="round"
            fill="none"
          />
        </svg>
        <svg
          className="320:w-3 740:w-3.5"
          width="14"
          height="14"
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="10"
            width="100"
            height="100"
            rx="30"
            stroke="black"
            stroke-width="10"
            stroke-linejoin="round"
            fill="none"
          />
          <path
            d="M30 60 L50 80 L90 40"
            stroke="black"
            stroke-width="12"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
          />
        </svg>
        <svg
          className="320:w-3 740:w-3.5"
          width="14"
          height="14"
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="10"
            width="100"
            height="100"
            rx="30"
            stroke="black"
            stroke-width="10"
            stroke-linejoin="round"
            fill="none"
          />
          <path
            d="M30 60 L50 80 L90 40"
            stroke="black"
            stroke-width="12"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
          />
        </svg>
        <svg
          className="320:w-3 740:w-3.5"
          width="14"
          height="14"
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="10"
            width="100"
            height="100"
            rx="30"
            stroke="black"
            stroke-width="10"
            stroke-linejoin="round"
            fill="none"
          />
          <path
            d="M30 60 L50 80 L90 40"
            stroke="black"
            stroke-width="12"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
          />
        </svg>
      </span>
    </div>
  );
}

export default Cart;
