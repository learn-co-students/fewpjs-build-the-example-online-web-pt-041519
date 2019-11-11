// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!

document.addEventListener("click", (e) => {
  // console.log(e.target);
  if (e.target.className === "like-glyph"){
    // console.log(mimicServerCall());
    mimicServerCall().then(resp => resp.json).catch(err => {
        const modal = document.getElementById("modal");
        // console.log(modal.classList);
        modal.classList.remove("hidden");
        const modalMsg = document.getElementById("modal-message");
        // console.log(err);
        modalMsg.innerText = err;
        setTimeout(function(){
          modal.classList.add("hidden");
        }, 5000);
    });
  }

  if (e.target.innerText === EMPTY_HEART){
    // console.log(e.target);
    e.target.innerText = FULL_HEART;
    e.target.classList.add("activated-heart");
  } else if (e.target.innerText === FULL_HEART){
    e.target.innerText = EMPTY_HEART;
    e.target.classList.remove("activated-heart");
  }



});


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
