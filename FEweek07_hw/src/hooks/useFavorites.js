import { useState } from 'react';

export function useFavorites() {
    const [favoriteId, setFavoriteId] = useState([]);

    const toggleFavorite = (id) => {
        setFavoriteId((prev) =>
            prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
        );
    };

    const isFavorite = (id) => favoriteId.includes(id);

    return { favoriteId, toggleFavorite, isFavorite };
}

export default useFavorites;