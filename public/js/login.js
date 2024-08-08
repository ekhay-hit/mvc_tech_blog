const login = document.querySelector(".login-form");

// function that will handle lgoin
 async function handle_login(e){
 e.preventDefault();
  
const email = document.getElementById("email-login").value.trim().toLowerCase();
const password =document.getElementById("password-login").value.trim()

if(email && password){
   
   
    const res = await fetch("/api/user/login",{
        method:"POST",
        body:JSON.stringify({email, password}),
        headers:{"Content-Type": "application/json"}
    }) 
    const data = res.json();

    if(res.ok){

        document.location.replace("/")

    }
}
 }


login.addEventListener("submit", handle_login);