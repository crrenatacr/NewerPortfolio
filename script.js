// Include axe-core library
const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.3.5/axe.min.js';
window.onload = function () {
  const profileWrapper = document.querySelector(".profile-img-wrapper");
  const profileImg = document.querySelector(".profile-img");

  if (profileWrapper && profileImg) {
    profileImg.classList.add("fade-in-active"); // Ativa o fade-in da imagem
    setTimeout(() => {
      profileWrapper.classList.add("reveal"); // Faz a cobertura desaparecer gradualmente
    }, 200); // Pequeno atraso para a animação parecer mais natural
  }

  
    document.head.appendChild(script);
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
  };
  
  
 // Função para abrir o modal
function openModal(imageSrc) {
  document.getElementById("modalImage").src = imageSrc;
  document.getElementById("imageModal").style.display = "flex"; // Exibe o modal
}

// Função para fechar o modal
function closeModal() {
  document.getElementById("imageModal").style.display = "none"; // Esconde o modal
}

// Garantir que o modal esteja oculto ao carregar a página
window.onload = function () {
  document.getElementById("imageModal").style.display = "none"; // Modal oculto por padrão
};
