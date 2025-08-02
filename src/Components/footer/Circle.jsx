function Circle({ children, address }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={address}
      className="flex justify-center items-center bg-[#F3F3F3] dark:bg-[#535C91] rounded-full hover:ring-[#FABB18] hover:ring-1 dark:hover:ring-[#9290C3] hover:ring-offset-2 dark:hover:ring-offset-[#1B1A55] w-11.5 h-11.5 transition-all"
    >
      {children}
    </a>
  );
}

export default Circle;
