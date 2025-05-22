function TaskSection({ children }) {
  return (
    <div className="bg-amber-50 h-fit flex p-4 rounded-xl">
      <span className="justify-between w-full top-0 relative items-center flex">
        <h4> {children}</h4>
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1V15"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 8H15"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </div>
  );
}

export default TaskSection;
