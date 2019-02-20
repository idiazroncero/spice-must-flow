import anime from 'animejs';

// $document.ready alternative;
function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {

  anime({
    targets: '#svgLogo .logo-paths path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 7000,
    // delay(el, i) { return i * 600; },
    direction: 'alternate',
    loop: true,
  });

  // Autoloop
  
  const itemsToHover = document.querySelectorAll('.toHover');
  const timeoutLapse = 1500;
  itemsToHover.forEach( (item, index) => {
    var interval = (index + 1) * timeoutLapse;
    setTimeout(function(){
      item.classList.add('hover');
      setTimeout(function(){
        item.classList.remove('hover');
      }, timeoutLapse );
    }, interval);
  });

});