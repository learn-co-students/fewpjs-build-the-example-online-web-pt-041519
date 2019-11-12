// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let hearts = document.querySelectorAll(".like")


// Your JavaScript code goes here!
function likeClicked(event) {
  console.log(event)
  let heart = event.target
  mimicServerCall().then(() => {
    if (EMPTY_HEART === heart.innerText) {
      heart.innerText = FULL_HEART
      heart.classList.add("activated-heart")
    } else {
      heart.innerText = EMPTY_HEART
      heart.classList.remove("activated-heart")
    }
} )
    .catch(function (error) {
      document.getElementById("modal").className = "";
      setTimeout(function () {
        document.getElementById("modal").className = "hidden";
      }, 5000);
    })
}

for (let e of hearts) { e.addEventListener("click", likeClicked) }


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
