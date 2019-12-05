// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Hide the big red error
const banner = document.getElementById("modal");
banner.className = "hidden"; 

//  Grabs all the hearts
const hearts = document.querySelectorAll(".like-glyph");

// What happens on click
function clickHeart(e) {
  let heart = e.target;
  // let heart = document.querySelector(".like-glyph");

  // console.log(heart);
  mimicServerCall().then(() => {
    if (heart.innerText === EMPTY_HEART){
      heart.innerText = FULL_HEART;
      // heart.style.color = 'red';
      heart.classList.add("activated-heart");
    } else {
      heart.innerText = EMPTY_HEART;
      heart.classList.remove("activated-heart");
    }
  }).catch(() =>{
    banner.className = "visable";
    setTimeout(()=> {
      banner.className = "hidden";
    }, 5000)
  });
}

// Iterate over hearts to give them click heart event
for (let heart of hearts) {
  heart.addEventListener("click", clickHeart);
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
