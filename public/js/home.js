const postList= document.querySelector(".posts-list");

// Function that togle area 
function commentArea(togleCmtAreaBtn){
  
   const parentPost = togleCmtAreaBtn.closest(".post")
   const cmtArea = parentPost.querySelector(".comment-area")

   if(cmtArea){
    if (cmtArea.classList.contains("hidden")){
        cmtArea.classList.remove("hidden")

    }else{
        cmtArea.classList.add("hidden");

    }
   }

}

// ***********Function that handle add comment to a post******

async function addCommentHandler(addCommentBtn){
    
    const currentPost = addCommentBtn.closest(".post");
    
    // getting comment content
    const content = currentPost.querySelector("#comment-text-area").value.trim();

    // getting post_id from metadata
    const post_id = currentPost.dataset.postid;

    // getting the user that loggs in from data-loggedinuserid that was set in the list of the post
    const user_id = document.querySelector(".posts-list").getAttribute("data-loggedinuserid");

  
    
    // if all required field for create new post make a fetch call

    if(content && post_id && user_id){
        const res = await fetch("/api/comment/",{
            method:"POST",
            body: JSON.stringify({content, post_id, user_id}),
            headers:{"Content-Type":"application/json"},
        })
        const data= await res.json();
      
        if(res.ok){
            window.location.reload();
        }else{

            alert("Failed to add comment")
        }
    }
}

// event listeners
postList.addEventListener('click',(event)=>{

    const togleCmtAreaBtn = event.target.closest(".post-title");

    const addCommentBtn= event.target.closest("#add-comment");


//if the post title clicked     
if(togleCmtAreaBtn){
    commentArea(togleCmtAreaBtn)
}

// if the button of add comment clicked
if(addCommentBtn){
    addCommentHandler(addCommentBtn)
}


})

