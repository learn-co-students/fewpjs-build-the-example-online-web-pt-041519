// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const glyphStates = {
  '♡' : '♥',
  '♥' : '♡'
}

const articleHeart = document.querySelectorAll(".like-glyph")

function likeCallBack(e) {
  const heart = e.target

  mimicServerCall() 
    .then(function() {
      heart.innerText = glyphStates[heart.innerText]
      heart.style.color = heart.classList.toggle("activated-heart")
    })
    .catch(function(error) {
      const modal = document.getElementById("modal")
      modal.classList.remove("hidden")
      setTimeout(function() {
        modal.classList.add("hidden")
      }, 5000)
    })
}

for(const check of articleHeart) {
  check.addEventListener('click', likeCallBack)
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
