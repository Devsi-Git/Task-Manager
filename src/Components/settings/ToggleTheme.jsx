import { useUi } from "../../services/Uicontext";

export default function Toggle() {
  const { setTheme } = useUi();

  return (
    <div className="flex items-center gap-2">
      <label className="font-sans text-gray-900 dark:text-[#c7c3df]">
        Change theme
      </label>
      <input
        onChange={() => setTheme(localStorage.getItem("theme"))}
        type="checkbox"
        defaultChecked={localStorage.getItem("theme") === "dark"}
        className="bg-amber-50 checked:bg-[#535C91] border-[#FCB700] checked:border-[#1B1A55] text-[#FCB700] checked:text-[#1B1A55] dar toggle"
      />
    </div>
  );
}
