const newPost = document.querySelector(".new-postBtn");

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

newPost.addEventListener("click", showCreateNewPost);