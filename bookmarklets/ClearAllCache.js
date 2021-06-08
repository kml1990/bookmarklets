javascript:(function(){
    const clearLocalStorage = () => localStorage.clear();
    const clearSessionStorage = () => sessionStorage.clear();
    const clearCookies = () => {
        const cookies = document.cookie.split(";")
    
        cookies.forEach((cookie) => {
            document.cookie = cookie.replace(/^ +/, "").replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`); 
        }); 
    };
    clearLocalStorage();
    clearSessionStorage();
    clearCookies();
    window.location.reload(true);
}());
