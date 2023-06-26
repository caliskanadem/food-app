import { ThemeProvider } from "styled-components";
import "./App.css";
import AppRouter from "./router/AppRouter";
import { darkTheme, lightTheme } from "./styles/theme";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const themeToogle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <AppRouter themeToogle={themeToogle} theme={theme} />
    </ThemeProvider>
  );
}

export default App;
