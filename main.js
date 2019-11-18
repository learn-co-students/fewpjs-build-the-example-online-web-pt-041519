// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorMssg = "Random server error. Try again."
const successMssg = "Pretend remote server notified of action!"
const hearts = document.getElementsByClassName("like-glyph")
const err =  document.getElementById('modal')
err.className = "hidden"

const notify = (message, timeInteger) => {
  err.className = ""
  err.innerText = message
  setTimeout(() =>{
    err.className = "hidden"
  }, parseInt(timeInteger))
}

const clkHeart = (click) => {
  let heart = click.target
  mimicServerCall().then(() => {
    if (heart.innerText == EMPTY_HEART){
      heart.innerText = FULL_HEART
      heart.className = "activated-heart"
      notify(successMssg, '2000')
    } else if (heart.innerText == FULL_HEART){
      heart.innerText = EMPTY_HEART
      heart.className = ""
    } 
  }).catch(() => {
    notify(errorMssg, '5000')
  })
} 


for (let heart of hearts){
  heart.addEventListener("click", clkHeart)
}
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject(errorMssg);
      } else {
        resolve(successMssg);
      }

    }, 300);
  });
}