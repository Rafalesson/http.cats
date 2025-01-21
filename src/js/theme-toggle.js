document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.querySelector(".toggle-switch");
  const body = document.body;
  const luaDark = document.getElementById("lua-dark");
  const solClaro = document.getElementById("sol-claro");
  const httpLogo = document.querySelector(".httpcat_logo path"); // Seleção do logo
  const searchButtonImg = document.querySelector(".pesquisar-btn img"); // Seleção do ícone de lupa
  const root = document.documentElement;

  // Define as cores do tema claro
  const lightThemeColors = {
    "--bg-color": "#F5F5F5",
    "--text-color": "#222222"
  };

  // Define as cores do tema escuro
  const darkThemeColors = {
    "--bg-color": "#222222",
    "--text-color": "#F5F5F5"
  };

  // Função para aplicar as cores do tema
  function applyThemeColors(themeColors) {
    Object.keys(themeColors).forEach(key => {
      root.style.setProperty(key, themeColors[key]);
    });
  }

  // Função para atualizar a cor do logo com base no tema
  function updateLogoColor(isDarkMode) {
    if (httpLogo) {
      httpLogo.setAttribute("fill", isDarkMode ? lightThemeColors["--text-color"] : darkThemeColors["--text-color"]);
    }
  }

  // Função para atualizar o src da imagem do botão com base no tema
  function updateSearchButtonImage(isDarkMode) {
    if (searchButtonImg) {
      searchButtonImg.src = isDarkMode
        ? "./src/images/lupa-gato-branca.svg"
        : "./src/images/lupa-gato-preta.svg";
    }
  }

  // Aplica o tema salvo no localStorage (se existir)
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    body.classList.add(currentTheme);
    toggleSwitch.classList.add(currentTheme === "dark-mode" ? "dark-mode" : "light-mode");

    const themeColors = currentTheme === "dark-mode" ? darkThemeColors : lightThemeColors;
    applyThemeColors(themeColors);
    updateLogoColor(currentTheme === "dark-mode");
    updateSearchButtonImage(currentTheme === "dark-mode");

    luaDark.style.opacity = currentTheme === "dark-mode" ? "1" : "0.1";
    solClaro.style.opacity = currentTheme === "dark-mode" ? "0.1" : "1";
  }

  // Alterna entre os temas ao clicar no botão
  toggleSwitch.addEventListener("click", () => {
    const isDarkMode = body.classList.toggle("dark-mode");

    // Atualiza a classe do botão
    toggleSwitch.classList.toggle("dark-mode", isDarkMode);
    toggleSwitch.classList.toggle("light-mode", !isDarkMode);

    // Salva o tema no localStorage
    localStorage.setItem("theme", isDarkMode ? "dark-mode" : "light-mode");

    // Aplica as cores do tema
    const themeColors = isDarkMode ? darkThemeColors : lightThemeColors;
    applyThemeColors(themeColors);
    updateLogoColor(isDarkMode);
    updateSearchButtonImage(isDarkMode);

    // Ajusta opacidade dos ícones
    luaDark.style.opacity = isDarkMode ? "1" : "0.1";
    solClaro.style.opacity = isDarkMode ? "0.1" : "1";
  });
});
