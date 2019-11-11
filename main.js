// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", function(e) {
  const allLikeButtons = document.querySelectorAll('span.like-glyph');
  const errorModal = document.getElementById("modal");

  for (ea of allLikeButtons) {
    ea.addEventListener("click", function(e) {

      mimicServerCall()
        .then(function(resp) {
          if (e.target.innerText == FULL_HEART) {
              e.target.innerText = EMPTY_HEART;
              e.target.removeAttribute("class");
              
          } else {
              e.target.innerText = FULL_HEART;
              e.target.className = "activated-heart";
          }
        }).catch(function(error) {
          errorModal.removeAttribute("class");
          errorModal.innerText = error;
          setTimeout(function() {
            errorModal.className = "hidden";
          }, 5000)
        });
        
    });
  }
})



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
