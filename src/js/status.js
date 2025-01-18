import { httpCatData } from './data.js';

// Pega parâmetros
function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

document.addEventListener("DOMContentLoaded", () => {
  const code = getQueryParam("code");
  const catInfo = httpCatData.find((item) => String(item.status) === code);

  const titleElem = document.getElementById("status-code-title");
  const imageElem = document.getElementById("status-code-image");
  const descElem = document.getElementById("status-code-description");
  const sourceElem = document.getElementById("status-code-source");
  const sourceLink = document.getElementById("status-code-source");

  if (catInfo) {
    // Ajusta título
    titleElem.textContent = `${catInfo.status} - ${catInfo.title}`;

    // Ajusta a imagem 
    imageElem.src = catInfo.imgUrl;

    // Mostra description
    descElem.innerHTML = catInfo.description || "Sem descrição disponível.";

    sourceElem.innerHTML = catInfo.source || "Sem fonte disponível.";

    // Preenche o link com a URL do objeto
    sourceLink.href = catInfo.source || "#";
  } else {
    // Se não encontrou
    titleElem.textContent = "Status não encontrado";
    imageElem.style.display = "none";
    descElem.textContent = "Não temos informações sobre este status.";
  }
});


