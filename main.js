// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeIcon = document.querySelector('.like-glyph');

// Add a click event listener to the like icon.
likeIcon.addEventListener('click', () => {
  mimicServerCall()

  .then(() => {
    if (likeIcon.textContent === EMPTY_HEART){
      likeIcon.textContent = FULL_HEART;
      likeIcon.classList.add('activated-heart'); // Activate heartbeat
    } else {
      likeIcon.textContent = EMPTY_HEART;
      likeIcon.classList.remove('activated-heart'); // Remove the styling class.
    }
  })

  .catch((error) => {
    // If there's a server error, display the error message.
    console.error(error); // Log the error to the console.
  });
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
