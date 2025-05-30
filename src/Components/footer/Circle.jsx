function Circle({ children, address }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={address}
      className="flex justify-center items-center bg-[#F3F3F3] rounded-full hover:ring-[#FABB18] hover:ring-1 hover:ring-offset-2 w-11.5 h-11.5 transition-all"
    >
      {children}
    </a>
  );
}

export default Circle;
