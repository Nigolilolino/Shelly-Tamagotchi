var animationInterval;
var spriteSheet = document.getElementById("sprite-image");
var widthOfSpriteSheet = 2888;
var widthOfEachSprite = 720;

function stopAnimation() {
  clearInterval(animationInterval);
}

function startAnimation() {
  var position = widthOfEachSprite; //start position for the image
  const speed = 200; //in millisecond(ms)
  const diff = widthOfEachSprite; //difference between two sprites

  animationInterval = setInterval(() => {
    spriteSheet.style.backgroundPosition = `-${position}px 0px`;

    if (position < widthOfSpriteSheet) {
      position = position + diff;
    } else {
      //increment the position by the width of each sprite each time
      position = widthOfEachSprite;
    }
    //reset the position to show first sprite after the last one
  }, speed);
}

//Start animation
startAnimation();

function myFunction(x) {
  x.classList.toggle("change");

  let menueBackground = document.getElementById('menuBackground');
  menueBackground.classList.toggle("hidden");
}