export const toggleFavorite = (camperId) => {
    // Получаем текущий список избранных из localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    // Проверяем, есть ли уже кемпер в избранных
    if (favorites.includes(camperId)) {
        // Если есть, удаляем его из списка
        const updatedFavorites = favorites.filter(id => id !== camperId);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
        // Если нет, добавляем его в список
        favorites.push(camperId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
};