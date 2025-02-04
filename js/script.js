// Fade-in effect for the profile picture when the page loads
window.onload = function() {
  const profileImg = document.querySelector('.profile-img');
  // Adding the 'fade' class to start the fade-in effect
  profileImg.style.opacity = 1; 

  // Running accessibility check with axe-core
  axe.run(function (err, results) {
    if (err) throw err;
    // Display accessibility violations in the console
    console.log(results.violations);
  });
};
