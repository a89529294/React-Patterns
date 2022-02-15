import { useContext, createContext, useState } from "react";

const themeContext = createContext();

const lightTheme = { background: "white", foreground: "black" };
const darkTheme = { background: "black", foreground: "white" };

const ThemeProvider = ({ children, initialTheme = lightTheme }) => {
  const [theme, setTheme] = useState(initialTheme);
  const toggle = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };
  return (
    <themeContext.Provider value={{ theme, toggle }}>
      {children}
    </themeContext.Provider>
  );
};

const Label = ({ children }) => {
  const { theme, toggle } = useContext(themeContext);
  return (
    <div style={{ backgroundColor: theme.background, color: theme.foreground }}>
      {children}
      <button onClick={toggle}>toggle theme</button>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider foreground="green">
      <Label>Hello</Label>
    </ThemeProvider>
  );
};
