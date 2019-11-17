// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', function() {
  // Grab all like buttons
  const heartBtn = document.querySelectorAll('span.like-glyph')
  const modal = document.getElementById('modal')

  // Add listener for like button click
  for (select of heartBtn) {
    select.addEventListener('click', function(e) {
      // Set heart to what was clicked
      let heart = e.target
      
      // Simulate server request
      mimicServerCall()
        .then(function() {
          // If empty heart is clicked, change to full heart and update class
          if (heart.innerText === EMPTY_HEART) {
            heart.innerText = FULL_HEART 
            heart.className = 'activated-heart'
          } else {
            // If heart is empty, ensure there is no class
            heart.innerText = EMPTY_HEART 
            heart.removeAttribute('class')
          }
        })

        // If server returns a failure status
        .catch(function(error) {
          // Display error by removing hidden class
          modal.removeAttribute('class')
          // Display error message in the modal
          modal.innerText = error
          // Hide modal after 5 seconds
          setTimeout(function() {
            modal.className = 'hidden'
          }, 5000)
        })
    })
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
