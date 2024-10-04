import { useTheme } from "../hooks/ContextProvider";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-xl"
    >
      {theme === "light" ? "🌞" : "🌜"}
    </button>
  );
};

export default ThemeToggleButton;
