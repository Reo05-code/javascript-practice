import { useState } from "react";
import { ThemeContext } from "./ThemeContext";


export function ThemeProvider({ children }) {
  // テーマの状態管理（初期値はライトモード）
  const [theme, setTheme] = useState("light");

  // 現在のモードを反転（ライトモード⇔ダークモード）
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // 子コンポーネントにテーマを提供
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
