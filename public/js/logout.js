const logout = async () => {
    console.log("logout clicked");
    const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, 
    });
    
if (response.ok) {
   window.location.href = "/"
} else {
    alert(response.statusText);
}
};

document.querySelector('#logout').addEventListener('click', logout); 