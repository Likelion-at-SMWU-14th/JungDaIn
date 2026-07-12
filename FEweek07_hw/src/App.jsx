import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Favorit from "./pages/Favorit";
import { useFavorites } from "./hooks/useFavorites";
import { songs } from "./data/songs";

function App() {
  const { favoriteIds, toggleFavorite, isFavorite } = useFavorites();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Main songs={songs} isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
          }
        />
        <Route
          path="/favorit"
          element={<Favorit songs={songs} favoriteIds={favoriteIds} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;