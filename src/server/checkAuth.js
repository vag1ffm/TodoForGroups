export const checkAuth = () => {
    const authToken= localStorage.getItem('authToken');
    return !!authToken; // Возвращает true, если токен существует, иначе false
};
