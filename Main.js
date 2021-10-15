var animationInterval;
var spriteSheet = document.getElementById("sprite-image");
var widthOfSpriteSheet = 2888;
var widthOfEachSprite = 720;
let areaBlocker = document.getElementById('areaBlocker');

let mainSprite = document.getElementById('sprite-container');
mainSprite.addEventListener('click', function(){
  
});

function stopAnimation() {
  clearInterval(animationInterval);
}

function startAnimation() {
  var position = widthOfEachSprite;
  const speed = 200;
  const diff = widthOfEachSprite;

  animationInterval = setInterval(() => {
    spriteSheet.style.backgroundPosition = `-${position}px 0px`;

    if (position < widthOfSpriteSheet) {
      position = position + diff;
    } else {
      position = widthOfEachSprite;
    }
  }, speed);
}

startAnimation();

function myFunction(x) {
  x.classList.toggle("change");

  let menueBackground = document.getElementById('menuBackground');
  menueBackground.classList.toggle("hidden");

  changeColorTheme();
  console.log(colorChangersToBright = document.getElementsByClassName('dark'));
}

function changeColorTheme() {
  let colorChangersToBright = document.getElementsByClassName('dark');
  let colorChangersToDark = document.getElementsByClassName('bright');
  console.log(colorChangersToBright.length);
  if(0 !== colorChangersToBright.length) {
    for (let i = 0; i < colorChangersToBright.length; i++) {
      console.log(i);
      colorChangersToBright[i].classList.replace('dark', 'bright');
    }
    colorChangersToBright = document.getElementsByClassName('dark');
    for (let i = 0; i < colorChangersToBright.length; i++) {
      console.log(i);
      colorChangersToBright[i].classList.replace('dark', 'bright');
    }
    return;
  }
  
  if(0 !== colorChangersToDark.length) {
    for (let i = 0; i < colorChangersToDark.length; i++) {
      console.log(i);
      colorChangersToDark[i].classList.replace('bright', 'dark');
    }
    colorChangersToDark = document.getElementsByClassName('bright');
    for (let i = 0; i < colorChangersToDark.length; i++) {
      console.log(i);
      colorChangersToDark[i].classList.replace('bright', 'dark');
    }
    return;
  }

}

let birhtdayItem = document.getElementById('birhtdayItem');
birhtdayItem.addEventListener('click', activateBirthdayMode);
let birthdayAudio = new Audio('audio/tets.wav');

function activateBirthdayMode() {
  unfade();

  let spriteImage = document.getElementsByClassName('sprite-image')[0];
  let additionalContent = document.getElementById('additionalContent');
  let mode = spriteImage.dataset.mode;
  console.log(mode);
  if ('default' === mode) {
    setTimeout(function() { 
      spriteImage.style.backgroundImage = "url('images/spritesheetBirthday.png')";
      spriteImage.dataset.mode = 'birthday';
      additionalContent.classList.add('microphone');
      fade();
     }, 1000);
     setTimeout(function() { 
      birthdayAudio.play();
      }, 1500);
  } else {
    setTimeout(function() { 
      spriteImage.style.backgroundImage = "url('images/spritesheet.png')";
      spriteImage.dataset.mode = 'default';
      additionalContent.classList.remove('microphone');
      birthdayAudio.pause();
      birthdayAudio.currentTime = 0;
      fade();
     }, 1000);
  }
}

function fade() {
  let element = document.getElementById('areaBlocker');
  var op = 1;  // initial opacity
  var timer = setInterval(function () {
      if (op <= 0.1){
          clearInterval(timer);
          element.style.display = 'none';
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.2;
  }, 50);
}

function unfade() {
  let element = document.getElementById('areaBlocker');
  var op = 0.1;  // initial opacity
  element.style.display = 'block';
  var timer = setInterval(function () {
      if (op >= 1){
          clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.1;
  }, 30);
}