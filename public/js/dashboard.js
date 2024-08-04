const newPost = document.querySelector(".new-postBtn");
const createPost = document.querySelector(".btn-create")
const form_input= document.querySelector(".form-group")

// function handles showing gui for creating a new post

function showCreateNewPost(){

    // target the ui
    const newPostGUI = document.querySelector(".dashboard");

    // check if the ui has a hidden class and remove it or add it if not
    if(newPostGUI.classList.contains('hidden')){
        newPostGUI.classList.remove("hidden");
    }else{
        newPostGUI.classList.add('hidden');
    }

}

//*************Adding a new post  */

async function handleNewPost(event){
    console.log("You are about to add post");
    //target element to get input 
   const title_input = document.querySelector("#title");
   const content_input= document.querySelector("#title-content");
// target selectors to get values
const title = title_input.value.trim();
const content= content_input.value.trim();
// getting the user_id that is signed in
const user_id= document.querySelector(".dashboard").dataset.userid;
console.log("I am printing the post content");
console.log(title, content, user_id);

// check if there is all the value needed
if(title && content &&  user_id){
    const  res = await fetch("/api/post/",{
        method:"POST",
        body: JSON.stringify({title, content, user_id}),
        headers:{"Content-Type":"application/json"},
    });

    const data = await res.json()
    console.log(data);

    if(res.ok){
        window.location.href = "/";

    }else{
        alert("Failed to add post")

    }
}
}

// Even listener to show hide the create new post GUI
newPost.addEventListener("click", showCreateNewPost);

// EVENT LISTENER TO CREATE A NEW POST

createPost.addEventListener("click", handleNewPost)