
export const checkAuth = () => {
    return (localStorage.getItem('authToken'))
        ? ()=> console.log('i"m in'): false
}