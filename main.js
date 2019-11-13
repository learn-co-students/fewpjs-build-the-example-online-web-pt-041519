// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let likeGlyphs = document.querySelectorAll(".like-glyph")

  for (let i = 0; i < likeGlyphs.length; i++) {
  likeGlyphs[i].addEventListener("click", onClick)
  }


  function onClick(event) {
    mimicServerCall().then(
      updateHeart(event)
      ).catch(
        (reason) => {
          document.getElementById("modal").classList.remove("hidden");
          document.getElementById("modal-message").textContent = reason;
          setTimeout(setToHidden, 1000)

          function setToHidden() {
            document.getElementById("modal").classList.add("hidden")
          }
        })
  }

  function updateHeart(event) {
    if (event.target.textContent === EMPTY_HEART) {
      event.target.textContent = FULL_HEART,
      event.target.classList.add("activated-heart")
    } else {
      event.target.textContent = EMPTY_HEART
      event.target.classList.remove("activated-heart")
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
