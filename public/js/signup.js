

const signup_form= document.querySelector(".signup-form");
// const signupHandler = async (e)=>
async function signupHandler(e){
    e.preventDefault();
console.log("I am here in fetch call");
const name = document.querySelector("#name-signup").value.trim();
const email = document.getElementById("email-signup").value.trim();
const password= document.getElementById("password-signup").value.trim();
console.log(`name ${name} email ${email} pw ${password}`);
    if ( name && email && password ){
        console.log("I passed the conditoin");
        const response = await fetch('/api/user/signup',{
            method:'POST',
            body: JSON.stringify({name,email,password}),
            headers: {'Content-Type':"application/json"},
        });

        if (response.ok){
            const data = await response.json();
    console.log("Response data: ", data);
    console.log("User created successfully");
    document.location.replace("/api/user/profile");
        }else{
            console.error("Failed to create user. Status: ", response.status);
        }
    }
};



signup_form.addEventListener('submit', signupHandler);