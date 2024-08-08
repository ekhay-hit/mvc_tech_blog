const newPost = document.querySelector(".new-postBtn");
const createPost = document.querySelector(".btn-create")
// finding the post that need to be updated
const updatepostBtn = document.querySelector(".main-dash");
const form_input= document.querySelector(".form-group")
// update botton and delete button
const updatePostBtn = document.querySelector("#update-btn");
const deletPostBtn = document.querySelector("#delete-btn");
// target the button to close the gui

const closeGuiUpdatePost = document.querySelector(".closeBtnUpdate");
const closeGuiNewPost = document.querySelector(".closeBtnNewPost");
const newPostGUI = document.querySelector(".dashboard");
const updatePostGUI = document.querySelector(".update-dashboard");
// function handles showing gui for creating a new post

function showCreateNewPost(){
    
    // target the ui
    

    // check if the ui has a hidden class and remove it or add it if not
    if(newPostGUI){

        if(newPostGUI.classList.contains('hidden')){
            newPostGUI.classList.remove("hidden");
        }else{
            newPostGUI.classList.add('hidden');
        }
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
        window.location.href = "/dashboard";

    }else{
        alert("Failed to add post")

    }
}
}

//*****************Functin that handle opening the GUI to update or delet post and add the data of the post to it */

async function updateDeletePost(myPostTitleBtn){
    console.log("you have clicked post to update it");
    const currentPost = myPostTitleBtn.closest(".my-post") 
    console.log(currentPost);

    //get the data of the post that is clicked
    const post_title = currentPost.querySelector("#my-post-title").textContent.trim();
    const post_id = currentPost.dataset.postid;
    const post_content = currentPost.dataset.content;

    // set the content to the GUI of update or delete the post
    const showUpdateGui = document.querySelector(".update-dashboard");
    showUpdateGui.dataset.postid = post_id;
    document.querySelector("#update-title").value = post_title;
    document.querySelector("#update-content").textContent = post_content;
   
    // after setting all the values show the box
    showUpdateGui.classList.remove("hidden")

}

//***********Function will update the post*********** */
async function updatePost(){

    // getting data from the update post GUI
    const updatePost = document.querySelector(".update-dashboard");
   const post_id = updatePost.dataset.postid;
    const title =document.querySelector("#update-title").value.trim();
    const content = document.querySelector("#update-content").value.trim();
   console.log(" This will be your updated post")
    console.log(title, content, post_id);

    if(title, content, post_id){
        const res = await fetch(`/api/post/${post_id}`,{
            method:"PATCH",
            body:JSON.stringify({title, content}),
            headers:{"Content-Type":"application/json"}
        })
        const data = res.json();

        if(res.ok){
            window.location.reload();
        }else{
            document.querySelector("#message").textContent = data.message
        }
    }

}

//**************Function will delete a post  */

async function deletePostHandler(){

    // getting data from the update post GUI
    const updatePost = document.querySelector(".update-dashboard");
   const post_id = updatePost.dataset.postid;


   if(post_id){
    const res = await fetch(`/api/post/${post_id}`,{
        method: "DELETE",
        body: JSON.stringify({post_id}),
        headers:{"Content-Type":"application/json"}
    })
 
  const data = res.json()
   if(res.ok){
    window.location.reload();
   }else{
    document.querySelector("#message").textContent = data.message
   }
   }
}
// fUNCTION THAT WILL HANDEL CLOSE GUI
function closeGui(btn){
    console.log("I am in close GUI");
    console.log(btn);
    if(btn === closeGuiNewPost){
        if(newPostGUI.classList.contains('hidden')){
            newPostGUI.classList.remove("hidden");
        }else{
            newPostGUI.classList.add('hidden');
        }
        
    }else if(btn === closeGuiUpdatePost){
if(updatePostGUI.classList.contains('hidden')){
        updatePostGUI.classList.remove("hidden");
        }else{
            updatePostGUI.classList.add('hidden');
        }
    }
}
// Even listener to show hide the create new post GUI
newPost.addEventListener("click", showCreateNewPost);

// EVENT LISTENER TO CREATE A NEW POST

createPost.addEventListener("click", handleNewPost)

// UPDATE AND DELETE A POST 
updatepostBtn.addEventListener("click", (event)=>{

    const myPostTitleBtn = event.target.closest("#my-post-title")

    if(myPostTitleBtn){
        updateDeletePost(myPostTitleBtn);
    }
})

// event listner for update the post 

updatePostBtn.addEventListener("click", updatePost);
deletPostBtn.addEventListener("click", deletePostHandler)

// event listner to close the GUI for update or create new post
// both calling same function but changed the traget based on parameter passed
closeGuiNewPost.addEventListener("click",function(){
closeGui(closeGuiNewPost)
})  
closeGuiUpdatePost.addEventListener("click",function(){

    closeGui(closeGuiUpdatePost)
})


