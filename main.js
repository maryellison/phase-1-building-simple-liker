// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.querySelector("#modal")
errorModal.classList.add('hidden');

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded",() => {
  console.log("DOM CONTENT HAS LOADED")
  errorModal.classList.add("hidden")
  
  // CALL FIND LIKES
findLikes()
clickListener()
//findModal()
})

// function findModal(){
//   let modal = document.querySelector('.hidden')
//   if(errorModal.contains(".hidden")){
//     return modal.innerHTML
//   }
// }

function hideError(){
  errorModal.classList.add("hidden")
}

function findLikes(){
  const likeArr = document.querySelectorAll(".like-glyph")

  likeArr.forEach((singularLike) => {
    singularLike.addEventListener("click", () => console.log("YOU FOUND ME! Like!"))
  })
}

//a second way to deliver 'likes'. The function above also works.
function clickListener(){
  document.addEventListener("click", (e) => {
    if(e.target.classList[0] === 'like-glyph'){
      // PROMISE! ASYNC WE NEED A .THEN
      mimicServerCall()
        .then(resp => {
          const activated = e.target.classList.contains("activated-heart");
          if(activated){
            e.target.classList.remove("activated-heart");
            e.target.innerHTML = EMPTY_HEART
          }else{
            e.target.classList.add("activated-heart");
            e.target.innerHTML = FULL_HEART
          }
        })
        .catch(error => {
          errorModal.remove("hidden")
          setTimeout(() => {
            hideError()
          }, 3000)
        })
    }
  })
}




//When a user clicks on an empty heart:
//Invoke mimicServerCall to simulate making a server request
// Need an event listener on every heart.

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
