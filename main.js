// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let err = document.querySelector('div#modal')
err.classList.add('hidden')
let lis = document.querySelectorAll('li.like')
console.log(lis)
lis.forEach(like)

function like(btn){
  let heart = btn.querySelector('span.like-glyph');
  btn.addEventListener('click', function() {
    mimicServerCall()
      .then(function(response){
        if(heart.innerHTML == EMPTY_HEART){
          heart.innerHTML = FULL_HEART
          heart.classList.add('activated-heart')
        }
        else {
          heart.innerHTML = EMPTY_HEART
          heart.classList.remove('activated-heart')
        }
      })
      .catch(function(response){
        err.classList.remove('hidden')
        let p = err.querySelector('p')
        p.innerHTML = response
        setTimeout(function() {
          err.classList.add('hidden')
        }, 5000)
      })
  })
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
