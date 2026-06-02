// import useTheme from "../contexts/theme";

import { useTheme } from "../contexts/theme/theme-context";

export default function ThemeButton() {
  const { themeMode, toggleTheme } = useTheme();

  const onChangeBtn = () => {
    toggleTheme();
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode === "dark"}
      />
      <div
        className="
      relative w-11 h-6 bg-gray-200 rounded-full transition-colors
      dark:bg-gray-700 peer-checked:bg-blue-600
      peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800
      
      after:content-[''] after:absolute after:top-0.5 after:left-0.5 
      after:bg-white after:border-gray-300 after:border after:rounded-full 
      after:size-5 after:transition-all 
      
      peer-checked:after:translate-x-full peer-checked:after:border-white
    "
      ></div>
      <span className="ml-3 text-sm font-medium text-gray-900">
        Toggle Theme
      </span>
    </label>
  );
}
