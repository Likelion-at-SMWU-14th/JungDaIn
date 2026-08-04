import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import TitleContext from "./context/TitleContext";

function App() {
  return (
    <TitleContext.Provider value={"dain의 영화관"}>
      <Header />
      <Outlet />
    </TitleContext.Provider>
  );
}

export default App;
