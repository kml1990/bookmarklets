javascript:(function(){
    const cookies = document.cookie.split(";")
    
    cookies.forEach((cookie) => {
        document.cookie = cookie.replace(/^ +/, "").replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`); 
    }); 
})();