document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollToTopBtn");

  // Função que mostra ou esconde o botão dependendo da rolagem
  function toggleScrollBtn() {
    // Se a rolagem vertical for maior que 300px, mostra o botão
    if (window.scrollY > 800) {
      scrollBtn.style.display = "flex"; 
    } else {
      scrollBtn.style.display = "none";
    }
  }

  // Quando o usuário rolar a página, chamamos toggleScrollBtn
  window.addEventListener("scroll", toggleScrollBtn);

  // Ao clicar no botão, rola para o topo
  scrollBtn.addEventListener("click", () => {
    // Scroll suave para o topo
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});