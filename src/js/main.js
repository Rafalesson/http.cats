import { httpDataCard } from "./data.js";

// Aguarda o carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {
  // Seleciona o container onde os cards serão inseridos
  const cardsContainer = document.getElementById("cards-content");

  // Controla quantos cards carregar por vez e em que índice estamos
  let currentIndex = 0;
  const cardsPerLoad = 8;

  // Função que cria um card com as informações de 'data'
  function criarCard(data) {
    // Cria a div principal do card e adiciona a classe base
    const card = document.createElement("div");
    card.classList.add("card");
  
    // Verifica o intervalo do status e escolhe a cor apropriada
    let corClasse = "";
    if (data.status < 200) {
      corClasse = "bg-blue";   // 1xx
    } else if (data.status < 300) {
      corClasse = "bg-green";  // 2xx
    } else if (data.status < 400) {
      corClasse = "bg-yellow"; // 3xx
    } else {
      corClasse = "bg-red";    // 4xx e acima
    }
    // Aplica a classe de cor ao card
    card.classList.add(corClasse);
  
    // Cria a div que receberá a imagem de fundo
    const bgCard = document.createElement("div");
    bgCard.classList.add("bg-card");
    bgCard.style.backgroundImage = `url("${data.imgUrl}")`;
  
    // Cria a div onde ficarão as informações (status e título)
    const descricaoCard = document.createElement("div");
    descricaoCard.classList.add("descricao-card");
  
    // Cria o elemento de texto para o status
    const numeroSpan = document.createElement("span");
    numeroSpan.classList.add("numero-status-code");
    numeroSpan.textContent = data.status;
  
    // Cria o elemento de texto para o título
    const descricaoSpan = document.createElement("span");
    descricaoSpan.classList.add("descricao-status-code");
    descricaoSpan.textContent = data.title;
  
    // Monta a estrutura de descrição
    descricaoCard.appendChild(numeroSpan);
    descricaoCard.appendChild(descricaoSpan);
  
    // Adiciona o fundo e a descrição ao card
    card.appendChild(bgCard);
    card.appendChild(descricaoCard);
  
    // Ao clicar no card, redireciona para a página de detalhes do status
    card.addEventListener("click", () => {
      window.location.href = `src/status/status.html?code=${data.status}`;
    });
  
    // Retorna o card completo
    return card;
  }

  // Cria um elemento 'sentinela' que usaremos para detectar o fim da lista
  const sentinel = document.createElement("div");
  sentinel.id = "sentinel";

  // Carrega o próximo lote de cards
  function loadMoreCards() {
    // Se já carregamos todos, paramos de observar e removemos o sentinela
    if (currentIndex >= httpDataCard.length) {
      observer.unobserve(sentinel);
      sentinel.remove();
      return;
    }

    // Remove o sentinela temporariamente para forçar o evento de "saída da tela"
    sentinel.remove();

    // Seleciona uma "fatia" do array com base no índice atual
    const chunk = httpDataCard.slice(currentIndex, currentIndex + cardsPerLoad);

    // Cria cada card e adiciona ao container
    chunk.forEach((item) => {
      const novoCard = criarCard(item);
      cardsContainer.appendChild(novoCard);
    });

    // Avança o índice para o próximo lote
    currentIndex += cardsPerLoad;

    // Recoloca o sentinela abaixo dos novos cards
    cardsContainer.appendChild(sentinel);
  }

  // Função de callback do IntersectionObserver
  function onIntersection(entries) {
    // Se o sentinela entrou no campo de visão, carrega mais cards
    for (let entry of entries) {
      if (entry.isIntersecting) {
        loadMoreCards();
      }
    }
  }

  // Configura o IntersectionObserver usando a função de callback
  const observer = new IntersectionObserver(onIntersection);

  // Adiciona o sentinela no container e começa a observá-lo
  cardsContainer.appendChild(sentinel);
  observer.observe(sentinel);

  // Carrega o primeiro lote de cards logo no início
  loadMoreCards();
});
