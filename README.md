# Entenda HTTP com Gatos
Este projeto exibe, de forma descontraída, códigos de status HTTP associados a imagens de gatos. Ele oferece recursos como busca, carregamento dinâmico (lazy loading), animação no rodapé, alternância de tema (Dark Mode/Light Mode) e um botão de “voltar ao topo” com comportamento personalizado.

## Funcionalidades Principais
**1. Listagem de Status Codes (Cards):**
  - Cada card mostra um código (ex.: 404) e uma breve descrição (ex.: Not Found), associado a uma imagem de gato.
  - Ao clicar no card, o usuário é direcionado para uma página de detalhes com mais informações (fonte, explicação técnica etc.).

**2. Busca de Status Code:**
  - Campo de texto onde o usuário digita um código HTTP.
  - Ao pesquisar, se o código existir, vai para a página de detalhes; caso contrário, exibe o status 404.

**3. Carregamento Dinâmico (Lazy Loading):**
  - Os cards são carregados em lotes conforme o usuário rola a página para baixo, usando ***IntersectionObserver***.
  - Otimiza a performance e evita carregar todos os cards de uma só vez.

**4. Botão “Voltar ao Topo”:**
 - Exibido somente após o usuário rolar uma certa distância.
 - Se o usuário chegar ao final da página, o botão muda de posição do centro para o canto direito da tela.
 - Clique = rolagem suave para o topo.

**5. Rodapé Animado:**
  - Um texto permanece centralizado (autor do projeto).
  - Dois textos adicionais percorrem a tela da direita para a esquerda em loop contínuo (CSS “marquee-like”).
  - A animação pausa se o usuário passar o mouse sobre os textos.

**6. Responsividade:**
  - Layout adaptado para diferentes tamanhos de tela, usando media queries.
  - Cards se reorganizam em colunas para tablets e celulares.

**7. Modo Claro/Escuro (Dark Mode/Light Mode):**
  1. *Alternância de tema com um botão que exibe:*
  - Lua 🌙 para o Dark Mode.
  - Sol ☀️ para o Light Mode.
  2. *A alternância do tema afeta:*
  - Background da página.
  - Cores do texto.
  - Ícones e imagens (ex.: o ícone da lupa muda de acordo com o tema).
  - O tema selecionado é salvo no Local Storage, garantindo a preferência do usuário mesmo após fechar o navegador.

## Tecnologias Utilizadas

- **HTML5** para a marcação semântica.
- **CSS3** para o estilo, animações e responsividade (com media queries).
- **JavaScript (ES6)** para manipulação do DOM, lógica de busca, lazy loading, animações e navegação entre status.

## Como Usar

1. Abrir **index.html** em um navegador ou servir o projeto localmente.
2. Rolar a página para ver os primeiros cards. Novos cards aparecem conforme se aproxima do final.
3. Buscar um status code específico.
4. Clicar em qualquer card para ver mais detalhes na página dedicada.
5. Usar o botão de “voltar ao topo” (↑) para subir. Observe que, ao chegar no rodapé, ele se desloca para a direita.

## Créditos
- Inspiração: [http.cat](https://http.cat/)
- Imagens: originais de [Tomomi Imura](https://x.com/girlie_mac)
- Desenvolvido por: [Rafael Alesson](https://linkedin.com/in/rafael-alesson)

## Referências:
- [MDN Web Docs - HTTP Status Codes](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)
- [MDN - Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [HTTP Dev](https://http.dev/)
