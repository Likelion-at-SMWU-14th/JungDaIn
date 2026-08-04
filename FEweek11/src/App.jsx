import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import TitleContext from "./context/TitleContext";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <TitleContext.Provider value={"dain의 영화관"}>
        <Header />
        <Outlet />
      </TitleContext.Provider>
    </ThemeContextProvider>
  );
}

export default App;
