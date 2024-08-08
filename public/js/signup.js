

const signup_form= document.querySelector(".signup-form");
// const signupHandler = async (e)=>
async function signupHandler(e){
    e.preventDefault();

const name = document.querySelector("#name-signup").value.trim();
const email = document.getElementById("email-signup").value.trim().toLowerCase();
const password= document.getElementById("password-signup").value.trim();

    if ( name && email && password ){
     
        const response = await fetch('/api/user/signup',{
            method:'POST',
            body: JSON.stringify({name,email,password}),
            headers: {'Content-Type':"application/json"},
        });

        const data = await response.json();
        if (response.ok){     
    document.location.replace("/api/user/login");
        }else{
            console.error(data.message);
        }
    }
};



signup_form.addEventListener('submit', signupHandler);