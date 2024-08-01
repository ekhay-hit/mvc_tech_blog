const login = document.querySelector(".login-form");

// function that will handle lgoin
 async function handle_login(e){
 e.preventDefault();
    console.log('you have clicked login button');
const email = document.getElementById("email-login").value.trim().toLowerCase();
const password =document.getElementById("password-login").value.trim()
console.log(email);
console.log(password);
if(email && password){
    console.log("I have passed the condition");
   
    const res = await fetch("/api/user/login",{
        method:"POST",
        body:JSON.stringify({email, password}),
        headers:{"Content-Type": "application/json"}
    }) 
    const data = res.json();
    console.log(data);

    if(res.ok){

        document.location.replace("/api/user/profile")

    }else{
        console.log(data.message);
    }
}
 }


login.addEventListener("submit", handle_login);