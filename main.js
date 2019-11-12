// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

// Your JavaScript code goes here!
document.getElementById('modal').className = 'hidden';
let allHearts = document.querySelectorAll('.like');


function likeCallback(e) {
  let heart = e.target;
  mimicServerCall()
    .then(function(serverMessage){
      heart.innerText = glyphStates[heart.innerText];
    })
    .catch(function(error) {
      alert("Something went wrong!");
    });
}

for (let xoxo of allHearts) {
  xoxo.addEventListener("click", likeCallback);
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
