const postList= document.querySelector(".posts-list");

// Function that togle area 
function commentArea(togleCmtAreaBtn){
   console.log("you have clicked the button");
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

postList.addEventListener('click',(event)=>{

    const togleCmtAreaBtn = event.target.closest(".post-title")

    
if(togleCmtAreaBtn){
    commentArea(togleCmtAreaBtn)
}


})

