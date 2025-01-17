const cardsContainer = document.getElementById('cards-content');

const httpCatData = [
  {
    status: 100,
    title: 'Continue',
    imgUrl: 'src/images/100-bg.jpeg'
  },
  {
    status: 101,
    title: 'Switching Protocols',
    imgUrl: 'src/images/101-bg.jpeg'
  },
  {
    status: 102,
    title: 'Processing',
    imgUrl: 'src/images/102-bg.jpeg'
  },
  {
    status: 103,
    title: 'Early Hints',
    imgUrl: 'src/images/103-bg.jpeg'
  },
  {
    status: 200,
    title: 'Okay',
    imgUrl: 'src/images/200-bg.jpeg'
  },{
    status: 201,
    title: 'Created',
    imgUrl: 'src/images/201-bg.jpeg'
  },{
    status: 202,
    title: 'Accepted',
    imgUrl: 'src/images/202-bg.jpeg'
  },{
    status: 203,
    title: 'Non-Authoritative Information',
    imgUrl: 'src/images/203-bg.jpeg'
  },{
    status: 204,
    title: 'No Content',
    imgUrl: 'src/images/204-bg.jpeg'
  },{
    status: 205,
    title: 'Reset Content',
    imgUrl: 'src/images/205-bg.jpeg'
  },{
    status: 206,
    title: 'Partial Content',
    imgUrl: 'src/images/206-bg.jpeg'
  },{
    status: 207,
    title: 'Multi-Status',
    imgUrl: 'src/images/207-bg.jpeg'
  },{
    status: 208,
    title: 'Already Reported',
    imgUrl: 'src/images/208-bg.jpeg'
  },
  {
    status: 226,
    title: 'IM Used',
    imgUrl: 'src/images/226-bg.jpeg'
  },{
    status: 300,
    title: 'Multiple Choices',
    imgUrl: 'src/images/300-bg.jpeg'
  },{
    status: 301,
    title: 'Moved Permanently',
    imgUrl: 'src/images/301-bg.jpeg'
  },{
    status: 302,
    title: 'Found',
    imgUrl: 'src/images/302-bg.jpeg'
  },{
    status: 303,
    title: 'See Other',
    imgUrl: 'src/images/303-bg.jpeg'
  },{
    status: 304,
    title: 'Not Modified',
    imgUrl: 'src/images/304-bg.jpeg'
  },{
    status: 305,
    title: 'Use proxy',
    imgUrl: 'src/images/305-bg.jpeg'
  },{
    status: 307,
    title: 'Temporary Redirect',
    imgUrl: 'src/images/307-bg.jpeg'
  },{
    status: 308,
    title: 'Permanent Redirect',
    imgUrl: 'src/images/308-bg.jpeg'
  },{
    status: 400,
    title: 'Bad Request',
    imgUrl: 'src/images/400-bg.jpeg'
  },{
    status: 401,
    title: 'Unauthorized',
    imgUrl: 'src/images/401-bg.jpeg'
  },{
    status: 402,
    title: 'Payment Required',
    imgUrl: 'src/images/402-bg.jpeg'
  },{
    status: 403,
    title: 'Forbidden',
    imgUrl: 'src/images/403-bg.jpeg'
  },{
    status: 404,
    title: 'Not Found',
    imgUrl: 'src/images/404-bg.jpeg'
  },{
    status: 405,
    title: 'Method Not Allowed',
    imgUrl: 'src/images/405-bg.jpeg'
  },{
    status: 406,
    title: 'Not Acceptable',
    imgUrl: 'src/images/406-bg.jpeg'
  },{
    status: 407,
    title: 'Proxy Authentication Required',
    imgUrl: 'src/images/407-bg.jpeg'
  },{
    status: 408,
    title: 'Request Timeout',
    imgUrl: 'src/images/408-bg.jpeg'
  },{
    status: 409,
    title: 'Conflict',
    imgUrl: 'src/images/409-bg.jpeg'
  },{
    status: 410,
    title: 'Gone',
    imgUrl: 'src/images/410-bg.jpeg'
  },{
    status: 411,
    title: 'Length Required',
    imgUrl: 'src/images/411-bg.jpeg'
  },{
    status: 412,
    title: 'Precondition Failed',
    imgUrl: 'src/images/412-bg.jpeg'
  },{
    status: 413,
    title: 'Payload Too Large',
    imgUrl: 'src/images/413-bg.jpeg'
  },{
    status: 414,
    title: 'URI Too Long',
    imgUrl: 'src/images/414-bg.jpeg'
  },{
    status: 415,
    title: 'Unsupported Media Type',
    imgUrl: 'src/images/415-bg.jpeg'
  },{
    status: 416,
    title: 'Range Not Satisfiable',
    imgUrl: 'src/images/416-bg.jpeg'
  },{
    status: 417,
    title: 'Expectation Failed',
    imgUrl: 'src/images/417-bg.jpeg'
  },{
    status: 418,
    title: `I'm a teapot`,
    imgUrl: 'src/images/418-bg.jpeg'
  },{
    status: 420,
    title: 'Enhance your calm',
    imgUrl: 'src/images/420-bg.jpeg'
  },{
    status: 421,
    title: 'Misdirected Request',
    imgUrl: 'src/images/421-bg.jpeg'
  },{
    status: 422,
    title: 'Unprocessable Entity',
    imgUrl: 'src/images/422-bg.jpeg'
  },{
    status: 423,
    title: 'Locked',
    imgUrl: 'src/images/423-bg.jpeg'
  },{
    status: 424,
    title: 'Failed Dependency',
    imgUrl: 'src/images/424-bg.jpeg'
  },{
    status: 425,
    title: 'Too Early',
    imgUrl: 'src/images/425-bg.jpeg'
  },{
    status: 426,
    title: 'Upgrade Required',
    imgUrl: 'src/images/426-bg.jpeg'
  },{
    status: 428,
    title: 'Precondition Required',
    imgUrl: 'src/images/428-bg.jpeg'
  },{
    status: 429,
    title: 'Too Many Requests',
    imgUrl: 'src/images/429-bg.jpeg'
  },{
    status: 431,
    title: 'Request Header Fields Too Large',
    imgUrl: 'src/images/431-bg.jpeg'
  },{
    status: 450,
    title: 'Blocked by Windows Parental Controls',
    imgUrl: 'src/images/450-bg.jpeg'
  },{
    status: 451,
    title: 'Unavailable For Legal Reasons',
    imgUrl: 'src/images/451-bg.jpeg'
  },{
    status: 495,
    title: 'SSL Certificate Error',
    imgUrl: 'src/images/495-bg.jpeg'
  },{
    status: 496,
    title: 'SSL Certificate Required',
    imgUrl: 'src/images/496-bg.jpeg'
  },{
    status: 497,
    title: 'HTTP Request Sent to HTTPS Port',
    imgUrl: 'src/images/497-bg.jpeg'
  },{
    status: 498,
    title: 'Invalid Token',
    imgUrl: 'src/images/498-bg.jpeg'
  },{
    status: 499,
    title: 'Client Closed Request',
    imgUrl: 'src/images/499-bg.jpeg'
  },
  {
    status: 500,
    title: 'Internal Server Error',
    imgUrl: 'src/images/500-bg.jpeg'
  },
  {
    status: 501,
    title: 'Not Implemented',
    imgUrl: 'src/images/501-bg.jpeg'
  },{
    status: 502,
    title: 'Bad Gateway',
    imgUrl: 'src/images/502-bg.jpeg'
  },{
    status: 503,
    title: 'Service Unavailable',
    imgUrl: 'src/images/503-bg.jpeg'
  },{
    status: 504,
    title: 'Gateway Timeout',
    imgUrl: 'src/images/504-bg.jpeg'
  },{
    status: 505,
    title: 'HTTP Version Not Supported',
    imgUrl: 'src/images/505-bg.jpeg'
  },
  {
    status: 506,
    title: 'Variant Also Negotiates',
    imgUrl: 'src/images/506-bg.jpeg'
  },{
    status: 507,
    title: 'Insufficient Storage',
    imgUrl: 'src/images/507-bg.jpeg'
  },{
    status: 508,
    title: 'Loop Detected',
    imgUrl: 'src/images/508-bg.jpeg'
  },{
    status: 509,
    title: 'Bandwidth Limit Exceeded',
    imgUrl: 'src/images/509-bg.jpeg'
  },{
    status: 510,
    title: 'Not Extended',
    imgUrl: 'src/images/510-bg.jpeg'
  },{
    status: 511,
    title: 'Network Authentication Required',
    imgUrl: 'src/images/511-bg.jpeg'
  },{
    status: 521,
    title: 'Web server is down',
    imgUrl: 'src/images/521-bg.jpeg'
  },{
    status: 522,
    title: 'Connection timed out',
    imgUrl: 'src/images/522-bg.jpeg'
  },{
    status: 523,
    title: 'Origin is unreachable',
    imgUrl: 'src/images/523-bg.jpeg'
  },{
    status: 525,
    title: 'SSL handshake failed',
    imgUrl: 'src/images/525-bg.jpeg'
  },{
    status: 530,
    title: 'Site Frozen',
    imgUrl: 'src/images/530-bg.jpeg'
  },{
    status: 599,
    title: 'Network Connect Timeout Error',
    imgUrl: 'src/images/599-bg.jpeg'
  }
];

function criarCard(data) {
  // Cria a div.card
  const card = document.createElement('div');
  card.classList.add('card');

  // Cria a div.bg-card (onde ficará a imagem de fundo)
  const bgCard = document.createElement('div');
  bgCard.classList.add('bg-card');
  // Definindo o background de acordo com 'imgUrl'
  bgCard.style.backgroundImage = `url("${data.imgUrl}")`;

  // Cria a div.descricao-card (onde vão o status e a descrição)
  const descricaoCard = document.createElement('div');
  descricaoCard.classList.add('descricao-card');

  // Cria o span para o número do status
  const numeroSpan = document.createElement('span');
  numeroSpan.classList.add('numero-status-code');
  numeroSpan.textContent = data.status;

  // Cria o span para o título/descrição do status
  const descricaoSpan = document.createElement('span');
  descricaoSpan.classList.add('descricao-status-code');
  descricaoSpan.textContent = data.title;

  // Monta a estrutura
  descricaoCard.appendChild(numeroSpan);
  descricaoCard.appendChild(descricaoSpan);

  card.appendChild(bgCard);
  card.appendChild(descricaoCard);

  // Redireciona para status.html com o parâmetro "code"
  card.addEventListener('click', () => {
    window.location.href = `src/status/status.html?code=${data.status}`;
  });

  // Retorna o card pronto
  return card;
}

// Percorre o array e insere cada card no container
httpCatData.forEach(item => {
  const novoCard = criarCard(item);
  cardsContainer.appendChild(novoCard);
});