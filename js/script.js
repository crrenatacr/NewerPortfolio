// Fade-in effect for the profile picture when the page loads
window.onload = function () {
  const profileImg = document.querySelector(".profile-img");
  // Adding the 'fade' class to start the fade-in effect
  profileImg.style.opacity = 1;

  // Running accessibility check with axe-core
  axe.run(function (err, results) {
    if (err) throw err;
    // Display accessibility violations in the console
    console.log(results.violations);
  });
};

let elemScroll = document.querySelector(".scroll");
let elemContainer = elemScroll.querySelector(".scroll__container");
let elemChildren = Array.from(elemContainer.children);

elemChildren.forEach((item) => {
  let elemDoubled = item.cloneNode(true);
  elemDoubled.setAttribute("aria-hidden", "true");
  elemContainer.appendChild(elemDoubled);
  console.log(item);
});
