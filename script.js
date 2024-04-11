// Load the animation
var animation = bodymovin.loadAnimation({
    container: document.querySelector('.page1-left span'), 
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'animation.json' // Replace 'animation.json' with the path to your animation JSON file
  });
  
  // Scroll event listener
  window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var targetElement = document.querySelector('.page1-left');
    var targetPosition = targetElement.getBoundingClientRect().top + scrollTop;
    var screenHeight = window.innerHeight;
  
    // Check if the target element is in the viewport
    if (targetPosition < (scrollTop + screenHeight)) {
      // Play the animation
      animation.play();
      // Set the animated text to nav-left
      var animatedText = document.getElementById('animatedText').textContent;
      document.querySelector('.nav-left').textContent = animatedText;
    } else {
      // Stop the animation
      animation.stop();
    }
  });
  