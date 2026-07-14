import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Favorite from "./pages/Favorite";
import { useFavorites } from "./hooks/useFavorites";
import { songs } from "./data/songs";

function App() {
  const { favoriteId, toggleFavorite, isFavorite } = useFavorites();

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
          path="/favorite"
          element={<Favorite songs={songs} favoriteId={favoriteId} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;