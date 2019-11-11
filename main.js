// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const likeSpan = document.querySelector('span.like-glyph')
let articleHearts = document.querySelectorAll(".like");

// Hide modal on page load
let modal = document.querySelector('div#modal')
modal.className = "hidden"

// Listen for heart click
let allHearts = document.querySelectorAll(".like");

for (let heart of allHearts) {
  heart.addEventListener("click", likeCallback);
}

function likeCallback(event) {
  mimicServerCall().then(function(object) {
    // Change heart
    changeHeart(event)
  })  
  .catch(function(error) {
    // Show modal
    modal.classList = ""

    // Insert error into modal
    modal.querySelector('p#modal-message').innerText = error

    // Hide modal after 5 seconds
    setTimeout(function(){ modal.className = "hidden" }, 5000);
  })
}

// Change heart between full and empty
function changeHeart(event) {
  // If empty heart, replace with full
  if (event.target.innerHTML === EMPTY_HEART) {
    event.target.innerHTML = FULL_HEART
    event.target.className = "like-glyph activated-heart"
  } else {
    event.target.innerHTML = EMPTY_HEART
    event.target.className = "like-glyph"
  }
}
  






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
