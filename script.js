document.addEventListener('DOMContentLoaded', function() {
    // Fade-in effect for the profile picture when the page loads
    const profileImg = document.querySelector(".profile-img");
    // Adding the fade effect by setting opacity to 1
    profileImg.style.opacity = 1;
  
    // Running accessibility check with axe-core
    axe.run(function(err, results) {
      if (err) throw err;
      console.log(results.violations);
    });
  
    let elemScroll = document.querySelector(".scroll");
    let elemContainer = elemScroll.querySelector(".scroll__container");
    let elemChildren = Array.from(elemContainer.children);
  
    elemChildren.forEach((item) => {
      let elemDoubled = item.cloneNode(true);
      elemDoubled.setAttribute("aria-hidden", "true");
      elemContainer.appendChild(elemDoubled);
      console.log(item);
    });
  });
  
  
  