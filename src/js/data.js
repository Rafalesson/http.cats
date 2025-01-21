export const httpCatData = [
  {
    status: 100,
    title: "Continue",
    imgUrl: "../images/100.jpeg",
    source: `https://developer.mozilla.org/pt-br/docs/Web/HTTP/Status/100`,
    description: `O Status HTTP <i class='bg-grey'>100 Continue</i> indica que até o momento tudo está OK e que o cliente pode continuar com a requisição ou ignorar caso já tenha terminado. <br> <br> 
    
    Para ter uma verificação pelo servidor o cliente deve enviar o header <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/Expect' class='link' id='expect100' target='_blank'>Expect:</a><i class='bg-grey'>100 continue</i>, na requisição inicial e receber o status <i class='bg-grey'>100 Continue</i> antes de enviar o body da requisição.`,
  },
  {
    status: 101,
    title: "Switching Protocols",
    imgUrl: "../images/101.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/101`,
    description: `O código de resposta HTTP <i class='bg-grey'>101 Switching Protocols</i> indica para qual protocolo o servidor está trocando, conforme solicitado por um cliente que tenha enviado uma mensagem incluindo <a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade' class='link' target='_blank'>Upgrade</a> no cabeçalho da requisição. <br> <br> 
    
    O servidor inclui <a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade' class='link' target='_blank'>Upgrade</a> no seu cabeçalho de resposta para indicar para qual protocolo o cliente foi redirecionado.`,
  },
  {
    status: 102,
    title: "Processing",
    imgUrl: "../images/102.jpeg",
    source: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/102`,
    description: `<div class='nota-vermelha'>
      <span id='dp-info'>
      <i class='bold'>Deprecado:</i> Esse recurso não é mais recomendado. Embora alguns navegadores ainda possam suportá-lo, ele pode já ter sido removido dos padrões da web relevantes, pode estar em processo de ser descartado ou pode ser mantido apenas para fins de compatibilidade. Evite usá-lo e atualize o código existente, se possível.
      </span>
    </div> 
    
    O status HTTP <i class='bg-grey'>102 Processing</i> indica ao cliente que uma solicitação completa foi recebida e o servidor está trabalhando nela. Esse código de status só será enviado se o servidor esperar que a solicitação leve um tempo significativo.`,
  },
  {
    status: 103,
    title: "Early Hints",
    imgUrl: "../images/103.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/103`,
    description: `O código de informação de status de resposta HTTP <i class='bg-grey'>103 Early Hints</i> é destinado principalmente a ser usado com o cabeçalho <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/Link' target='_blank' class='link'>Link</a> para permitir ao agente do usuário começar pré-carregamento de recursos enquanto o servidor ainda está preparando uma resposta.`,
  },
  {
    status: 200,
    title: "Okay",
    imgUrl: "../images/200.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/200`,
    description: `<p class='mg-bottom'>O código HTTP <i class='bg-grey'>200 OK</i> é a resposta de status de sucesso que indica que a requisição foi bem sucedida. Uma resposta 200 é cacheável por padrão.</p> 
    
    <p class='mg-bottom'>O significado de sucesso depende do método de requisição HTTP:</p> 
    
    <ul id='metodos-ul'> 
    <li class='metodo-li'> <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods/GET' class='link' target='_blank'>GET</a>: O recurso foi carregado e transmitido no corpo da mensagem.</li> 
    <li class='metodo-li'> <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods/HEAD' class='link' target='_blank'>HEAD</a>: Os cabeçalhos da entidade estão no corpo da mensagem.</li> 
    <li class='metodo-li'> <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/200' class='link' target='_blank'>POST</a>: O recurso descrevendo o resultado da ação é transmitido no corpo da mensagem.</li> 
    <li class='metodo-li'> <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods/TRACE' class='link' target='_blank'>TRACE</a>: O corpo da mensagem contém a mensagem da requisição tal qual foi recebida pelo servidor.</li>
  </ul> 
  
  <p id='p3-200'> O resultado de sucesso de um 
  <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods/PUT' class='link' target='_blank'>PUT</a> ou <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods/DELETE' class='link' target='_blank'>DELETE</a> geralmente não são <i class='bg-grey' >200 OK</i>, e sim <i class='bg-grey'>204 No Content</i> (ou <i class='bg-grey'>201 Created</i> quando o recurso é carregado pela primeira vez).</p>`,
  },
  {
    status: 201,
    title: "Created",
    imgUrl: "../images/201.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/201`,
    description: `O status HTTP <i class='bg-grey'>201 Created</i> é utilizado como resposta de sucesso, indica que a requisição foi bem sucedida e que um novo recurso foi criado. Este novo recurso é efetivamente criado antes do retorno da resposta e o novo recurso é enviado no corpo da mensagem (pode vir na URL ou na header <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/Location' class='link' target='_blank'>Location</a>). <p id='pf-201'>Comumente, este status é utilizado em requisições do tipo <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods/POST' class='link' target='_blank'>POST</a>.</p>`,
  },
  {
    status: 202,
    title: "Accepted",
    imgUrl: "../images/202.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/202`,
    description: `O código resposta HyperText Transfer Protocol (HTTP) <i class='bg-grey'>202 Accepted</i> indica que a requisição foi recebida, mas não pode atuar ainda. Ela é sem compromisso, significando que não há maneira de o HTTP enviar posteriormente uma resposta assíncrona indicando a saída do processamento da requisição. A intenção desta resposta é para os casos onde outro processo ou, ainda, servidor lida com a requisição ou para processamentos batch.`,
  },
  {
    status: 203,
    title: "Non-Authoritative Information",
    imgUrl: "../images/203.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/203`,
    description: `<p class='mg-bottom'>A resposta com status HTTP <i class='bg-grey'>203 Non-Authoritative Information</i> indica que a requisição foi realizada com sucesso porém o conteúdo foi modificado por um <a href='https://developer.mozilla.org/pt-BR/docs/Glossary/Proxy_server' class='link' target='_blank'>proxy</a> da resposta com status <i class='bg-grey'>200 (OK)</i> do servidor de origem.</p> <p id='p2-203'>A resposta <i class='bg-grey'>203</i> é similar a resposta com cabeçalho de <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/Warning' class='link' target='_blank'>Warning 214</a>, significando <i class='bg-grey'>Transformação Aplicada</i>, o qual tem uma vantagem adicional que pode ser aplicado a respostas com qualquer código de status.</p>`,
  },
  {
    status: 204,
    title: "No Content",
    imgUrl: "../images/204.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/204`,
    description: `<p class='mg-bottom'>O código HTTP de status <i class='bg-grey'>204 No Content</i> indica que a solicitação foi bem sucedida e o cliente não precisa sair da página atual. Uma resposta <i class='bg-grey'>204</i> é armazenada em cache por padrão. Um cabeçalho <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/ETag' class='link' target='_blank'>ETag</a> está incluso na resposta.</p> <p id='p2-204'>O caso de uso comum é retornar <i class='bg-grey'>204</i> como resultado de uma solicitação <i class='bg-grey'>PUT</i>, atualizando um recurso, sem alterar o conteúdo atual da página exibida para o usuário. Se o recurso for criado, <i class='bg-grey'>201 Created</i> será retornado. Se a página for alterada para a página recém-atualizada, o <i class='bg-grey'>200</i> deve ser usado em vez disso.</p>`,
  },
  {
    status: 205,
    title: "Reset Content",
    imgUrl: "../images/205.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/205`,
    description: `O código de estado HTTP <i class='bg-grey'>205 Reset Content</i> informa ao cliente para reconfigurar a visualização do documento, para, por exemplo, limpar o conteúdo de um formulário, redefinir um estado da tela ou atualizar a interface do usuário.`,
  },
  {
    status: 206,
    title: "Partial Content",
    imgUrl: "../images/206.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/206`,
    description: `<p class='mg-bottom'>O status de sucesso <i class='bg-grey'>206 Partial Content</i> indica que a requisição teve sucesso e o corpo contém a sequência (em bytes) dos dados, como descrito no cabeçalho <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/Range' class='link' target='_blank'>Range</a> da requisição.</p> 
    
    <p class='mg-bottom'>Se existe somente uma sequência, o <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/Content-Type' class='link' target='_blank'>Content-Type</a> de toda a resposta é colocado para o tipo do documento, e o cabeçalho <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/Content-Range' class='link' target='_blank'>Content-Range</a> é provido.</p> 
    
    <p id='p3-206'>Se várias sequências são mandadas como resposta, o <i class='bg-grey'>Content-Type</i> é colocado para <i class='bg-grey'>multipart/byteranges</i> e cada fragmento cobre uma sequência, com <i class='bg-grey'>Content-Range</i> e <i class='bg-grey'>Content-Type</i> descrevendo-os.</p>`,
  },
  {
    status: 207,
    title: "Multi-Status",
    imgUrl: "../images/207.jpeg",
    source: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/207`,
    description: `    
      <p id='p1-207' class='mg-bottom'>O código de resposta <i class='bg-grey'>207 Multi-Status</i> indica que pode haver uma mistura de respostas.Essa resposta é usada exclusivamente no contexto de <a href='https://developer.mozilla.org/en-US/docs/Glossary/WebDAV' class='link' target='_blank'>WebDAV</a> (Web Distributed Authoring and Versioning).</p> 
      
      <p id='p2-207' class='mg-bottom'>O corpo da resposta é uma entidade HTTP ou com um elemento raiz. O corpo XML listará todos os códigos de resposta individuais. <i class='bg-grey'>text/xml</i> <i class='bg-grey'>application/xml</i> <i class='bg-grey'>multistatus</i></p>
      
      <div class='nota-azul'>
      <p id='p3-207'> <i class='bold'>Nota:</i> A capacidade de vincular um recurso a vários caminhos é uma extensão do protocolo WebDAV (pode ser recebido por aplicativos Web que acessam um servidor WebDAV). Os navegadores que acessam páginas da web nunca encontrarão esse código de status.</p>
    </div>`,
  },
  {
    status: 208,
    title: "Already Reported",
    imgUrl: "../images/208.jpeg",
    source: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/208`,
    description: `<p id='p1-208' class='mg-bottom'>O código HTTP <i class='bg-grey'>208 Already Reported</i> é usado em uma resposta <i class='bg-grey'>207 Multi-Status</i> para economizar espaço e evitar conflitos. Essa resposta é usada exclusivamente no contexto de <i class='bg-grey'>WebDAV</i> (Web Distributed Authoring and Versioning).</p>

    <p id='p2-208'>Se o mesmo recurso for solicitado várias vezes (por exemplo, como parte de uma coleção) com caminhos diferentes, somente o primeiro será relatado com <i class='bg-grey'>200</i>. As respostas para todas as outras associações serão relatadas com esse código de status, portanto, nenhum conflito será criado e a resposta permanecerá mais curta.</p>`,
  },
  {
    status: 226,
    title: "IM Used",
    imgUrl: "../images/226.jpeg",
    source: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/226`,
    description: `O status HTTP <i class='bg-grey'>226 IM Used</i> indica que o servidor está retornando um <a href='https://developer.mozilla.org/en-US/docs/Glossary/Delta' class='link' target='_blank'>delta</a> em resposta a uma solicitação GET. Ele é usado no contexto de codificações delta HTTP.`,
  },
  {
    status: 300,
    title: "Multiple Choices",
    imgUrl: "../images/300.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/300`,
    description: `O código HTTP <i class='bg-grey'>300 Multiple Choices</i> indica que a requisição tem uma ou mais possíveis respostas. O agente de usuário ou o usuário devem escolher uma delas. Como não há forma padrão de se escolher uma das respostas, esse código de resposta é raramente usado.`,
  },
  {
    status: 301,
    title: "Moved Permanently",
    imgUrl: "../images/301.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/301`,
    description: `O status <i class='bg-grey'>301 Moved Permanently</i> do protocolo HTTP indica que o recurso requisitado foi movido permanentemente para a URL dada pelo cabeçalho <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/Location' class='link' target='_blank'>Localização</a> headers. Um navegador redireciona para essa página e o motor de busca atualiza os links para o recurso (na linguagem 'SEO', é dito que o "suco do link" ('link-juice') é enviado à nova URL).`,
  },
  {
    status: 302,
    title: "Found",
    imgUrl: "../images/302.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/302`,
    description: `<p>O código de estado HyperText Transfer Protocol (HTTP) <i class='bg-grey'>302 Found</i> indica que o recurso foi temporariamente movido para a URL informada pelo cabeçalho <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/Location' class='link' target='_blank'>Localização</a>. Os navegadores redirecionar para essa página porém os motores de busca não atualizam o link inicial.</p>`,
  },
  {
    status: 303,
    title: "See Other",
    imgUrl: "../images/303.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/303`,
    description: `O código HTTP <i class='bg-grey'>303 See Other</i> indica que o direcionamento não une a um recurso carregado novo, mas a outra página, com uma página de confirmação ou de progresso de carregamento. Este código de resposta normalmente é retornado como resultado de um <i class='bg-grey'>PUT</i> ou <i class='bg-grey'>POST</i>. O método usado para mostrar esta página redirecionada é sempre <i class='bg-grey'>GET</i>.`,
  },
  {
    status: 304,
    title: "Not Modified",
    imgUrl: "../images/304.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/304`,
    description: `O código HTTP <i class='bg-grey'>304 Not Modified</i> indica que não há necessidade de retransmitir a requisição de recursos. É um redirecionamento implícito para o recurso em cache. Isto ocorre quando o método de requisição é <a href='https://developer.mozilla.org/pt-BR/docs/Glossary/Safe' class='link' target='_blank'>safe</a>, assim como uma requisição <i class='bg-grey'>GET</i> ou <i class='bg-grey'>HEAD</i>, ou quando a requisição é condicional e usa um cabeçalho <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/If-None-Match' class='link' target='_blank'>If-None-Match</a> ou <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/If-Modified-Since' class='link' target='_blank'>If-Modified-Since</a>.`,
  },
  {
    status: 305,
    title: "Usar proxy",
    imgUrl: "../images/305.jpeg",
    source: `https://stackoverflow.com/questions/4685711/whats-305-http-status-code-how-to-use-it-properly`,
    description: `<p class='nota-vermelha'><i class='bold'>Deprecado</i>: O código de status HTTP <i class='bold'>305 Use Proxy</i> foi preterido devido a questões de segurança.</p>
    
    <p class='mg-bottom'>O código de status 305, conhecido como <i class='bg-grey'>305 Use Proxy</i>, era utilizado para indicar que o recurso solicitado só poderia ser acessado por meio de um proxy específico. Quando o servidor retornava esse código, ele incluía junto a localização desse proxy, instruindo o cliente a utilizá-lo para as próximas requisições.</p>

    <p>No entanto, esse código foi descontinuado por motivos de segurança e por não ser muito claro. Ele não explicava por que o proxy estava sendo usado ou sequer se o uso era realmente obrigatório.</p>`,
  },
  {
    status: 307,
    title: "Temporary Redirect",
    imgUrl: "../images/307.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/307`,
    description: `<p class='mg-bottom'>O código de estado <i class='bg-grey'>307 Temporary Redirect</i> indica que o recurso da requisição foi temporariamente alterado para a URL informada no cabeçalho.</p>

    <p class='mg-bottom'>O método e o corpo da requisição original são reutilizados para realizar a requisição de redirecionamento.</p>`,
  },
  {
    status: 308,
    title: "Permanent Redirect",
    imgUrl: "../images/308.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/308`,
    description: `<p class='mg-bottom'>O código de resposta <i class='bg-grey'>308 Permanent Redirect</i> do HTTP indica que o recurso requisitado foi movido definitivamente para o URL dado pelo cabeçalho. O navegador redireciona para essa página e o motor de busca atualiza os seus links para o recurso (na linguagem 'SEO', é dito que o "suco do link" ('link-juice') é enviado à nova URL).</p>

    <p class='mg-bottom'>O método de requisição e o corpo não serão alterados.</p>
    
    <p class='nota-azul'><i class='bold'>Nota</i>: Algumas aplicações Web podem usar o 308 Permanent Redirect de forma não convencional e para outros propósitos. Por exemplo, Google Drive usa a resposta 308 Resume Incomplete para indicar ao cliente quando um upload incompleto parou. <a href='https://developers.google.com/drive/api/guides/manage-uploads?hl=pt-br#resumable' class='link' target='_blank'>[1]</a></p>`,
  },
  {
    status: 400,
    title: "Bad Request",
    imgUrl: "../images/400.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/400`,
    description: `<p>O código de status de resposta HTTP <i class='bg-grey'>400 Bad Request</i> indica que o servidor não pode ou não irá processar a requisição devido a alguma coisa que foi entendida como um erro do cliente (por exemplo, sintaxe de requisição mal formada, enquadramento de mensagem de requisição inválida ou requisição de roteamento enganosa).</p>`,
  },
  {
    status: 401,
    title: "Unauthorized",
    imgUrl: "../images/401.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/401`,
    description: `O código de resposta <i class='bg-grey'>401 Unauthorized</i> indica que a solicitação não foi aplicada porque não possui credenciais de autenticação válidas para o recurso de destino.`,
  },
  {
    status: 402,
    title: "Payment Required",
    imgUrl: "../images/402.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/402`,
    description: `<p class='nota-azul'>
    <i class='bold'>Experimental</i>: Esta é uma tecnologia experimental
    Verifique a tabela de compatibilidade entre Navegadores cuidadosamente antes de usar essa funcionalidade em produção.</p>
    
    <p class='mg-bottom'>O código de status HTTP <i class='bg-grey'>402 Payment Required</i> é um termo despadronizado para respostas de Status, podendo-se ter usos futuros.</p>

    <p>Às vezes, este comando indica que o processo não pôde ser realizado em função de um pagamento não realizado. Originalmente, foi criado para validar uma micro ou grande transação e pode indicar que o método não se realiza até que o cliente efetue o pagamento. Contudo, não existem usos convecionais fixos e sua inserção varia, dependendo do contexto que é posto.</p>`,
  },
  {
    status: 403,
    title: "Forbidden",
    imgUrl: "../images/403.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/403`,
    description: `<p class='mg-bottom'>O erro HTTP <i class='bg-grey'>403 Forbidden</i> indica que o servidor entendeu o pedido, mas se recusa a autorizá-lo.</p>

    <p>Esse status é semelhante ao <i class='bg-grey'>401</i>, mas neste caso, a re-autenticação não fará diferença. O acesso é permanentemente proibido e vinculado à lógica da aplicação (como uma senha incorreta).</p>`,
  },
  {
    status: 404,
    title: "Not Found",
    imgUrl: "../images/404.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/404`,
    description: `<p>A resposta de erro <i class='bg-grey'>404 Not Found</i> ocorre quando o servidor foi contatado corretamente, porém não consegue encontrar o recurso (página, arquivo, etc.) solicitado. Normalmente isso acontece quando a URL está incorreta, o conteúdo foi removido ou movido de lugar sem o devido redirecionamento.</p>`,
  },
  {
    status: 405,
    title: "Method Not Allowed",
    imgUrl: "../images/405.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/405`,
    description: ` 
    <p class='mg-bottom'>Este status de resposta indica que o método HTTP utilizado não é suportado pelo servidor. Por exemplo, se a requisição for feita usando GET, mas o endpoint aceitar apenas POST.</p>
    
    <p class='nota-amarela'><i class='bold'>Curiosidade</i>: Existe um método chamado <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods/OPTIONS' class='link' target='_blank'>OPTIONS</a> que retorna todos os verbos suportados naquela requisição.</p>`,
  },
  {
    status: 406,
    title: "Not Acceptable",
    imgUrl: "../images/406.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/406`,
    description: `<p class='mg-bottom'>O código de resposta do erro de cliente <i class='bg-grey'>406 Not Acceptable</i> indica que o servidor não pode produzir uma resposta que combine com a lista de valores aceitáveis definidas nos cabeçalhos de negociação de conteúdo da requisição proativa, e o servidor é incapaz de produzir uma representação padrão.</p>
    
    <p>Na prática, esse erro é raramente usado. Ao invés de responder usando esse código de erro, o que poderia ser enigmático ao usuário final e difícil de arrumar, servidores ignoram o cabeçalho relevante e servem a página atual ao usuário. Se assume que mesmo que o usuário não fique completamente feliz, ele irá preferir isso ao invés do código de erro.</p>`,
  },
  {
    status: 407,
    title: "Proxy Authentication Required",
    imgUrl: "../images/407.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/407`,
    description: `<p class='mg-bottom'>
    O código de resposta HTTP <i class='bg-grey'>407 Proxy Authentication Required</i> indica um erro do lado cliente, informando que uma solicitação não está sendo bem aplicada. Isso ocorre porque falta a validar as credencias de autenticação para um <a href='https://developer.mozilla.org/pt-BR/docs/Glossary/Proxy_server' class='link' target='_blank'>proxy server</a> que intermedia o navegador e o servidor que pode acessar o recurso solicitado.</p>

    <p>Este erro é enviado com um cabeçalho <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/Proxy-Authenticate' class='link' target='_blank'>Proxy-Authenticate</a> que contém informações de como fazer uma autorização correta.</p>`,
  },
  {
    status: 408,
    title: "Request Timeout",
    imgUrl: "../images/408.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/408`,
    description: `<p>A resposta <i class='bg-grey'>408 Request Timeout</i> significa que o servidor irá encerrar essa conexão em desuso. É enviado a uma conexão parada por alguns servidores, mesmo sem nenhuma requisição feita anteriormente pelo cliente.</p>`,
  },
  {
    status: 409,
    title: "Conflict",
    imgUrl: "../images/409.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/409`,
    description: `<p class='mg-bottom'>O status de resposta <i class='bg-grey'>409 Conflict</i> indica que a solicitação atual conflitou com o recurso que está no servidor.</p>

    <p>Conflitos são mais frequentes quando usado o método <i class='bg-grey'>PUT</i>. Por exemplo, você pode receber uma resposta 409 quando fizer upload de um arquivo que é mais antigo do que já existe no servidor, resultando em conflito de versão.</p>`,
  },
  {
    status: 410,
    title: "Gone",
    imgUrl: "../images/410.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/410`,
    description: `<p class='mg-bottom'>O código de resposta HTTP <i class='bg-grey'>410 Gone</i> de erro do cliente indica que o acesso ao recurso não está mais disponível no servidor de origem, e que esta condição tende a ser permanente.</p>
    
    <p class='nota-cinza'><i class='bold'>Nota:</i> Uma resposta 410 response é armazenada em cache por default.</p>`,
  },
  {
    status: 411,
    title: "Length Required",
    imgUrl: "../images/411.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/411`,
    description: `<p class='mg-bottom'>
    O código de resposta <i class='bg-grey'>411 Length Required</i> de erro de cliente do Protocolo de Transferência de HyperTexto (HTTP) indica que o servidor se nega a aceitar a requisição sem um cabeçalho Content-Length definido.</p>
    
    <p class='nota-cinza'> <i class='bold'>Nota</i>: pela especificação, quando envia dados em uma série de blocos, o cabeçalho Content-Length é omitido e no início de cada bloco você precisa adicionar o tamanho do bloco corrente no formato hexadecimal.</p>`,
  },
  {
    status: 412,
    title: "Precondition Failed",
    imgUrl: "../images/412.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/412`,
    description: `<p>
    O código de resposta de erro de cliente HTTP <i class='bg-grey'>412 Precondition Failed</i> indica que o acesso ao recurso especificado foi negado. Isso acontece com requisições condicionais.</p>`,
  },
  {
    status: 413,
    title: "Payload Too Large",
    imgUrl: "../images/413.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/413`,
    description: `O código de resposta HTTP <i class='bg-grey'>413 Payload Too Large</i> indica que a carga da requisição é mais larga que os limites estabelecidos pelo servidor; o servidor pode encerrar a conexão ou retornar <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/Retry-After' class='link' target='_blank'>Retry-After</a> no campo de cabeçalho.`,
  },
  {
    status: 414,
    title: "URI Too Long",
    imgUrl: "../images/414.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/414`,
    description: `<p>O código de resposta <i class='bg-grey'>414 URI Too Long</i> indica que o tamanho da URI requisitada pelo cliente é maior do que o tamanho que o servidor aceita interpretar.</p>`,
  },
  {
    status: 415,
    title: "Unsupported Media Type",
    imgUrl: "../images/415.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/415`,
    description: `<p>O erro HTTP <i class='bg-grey'>415 Unsupported Media Type</i> do cliente indica que o servidor se recusou a aceitar a requisição porque o formato do payload não é um formato suportado.</p>`,
  },
  {
    status: 416,
    title: "Range Not Satisfiable",
    imgUrl: "../images/416.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/416`,
    description: `<p>O código de erro de resposta HTTP <i class='bg-grey'>416 Range Not Satisfiable</i> indica que o servidor não pode servir as sequências solicitadas. A razão mais provável é que o documento não contenha tais sequências, ou que o valor do <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/Range' class='link' target='_blank'>Range</a>, apesar de sintaticamente correto, não faça sentido.</p>`,
  },
  {
    status: 417,
    title: "Expectation Failed",
    imgUrl: "../images/417.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/417`,
    description: `<p>O codigo de erro de cliente HTTP <i class='bg-grey'>417 Expectation Failed</i> indica que a expectativa enviada no cabeçalho da requisição <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/Expect' class='link' target='_blank'>Expect</a> não foi suprida.</p>`,
  },
  {
    status: 418,
    title: "I'm a teapot",
    imgUrl: "../images/418.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/418`,
    description: `<p>O código de erro HTTP para o cliente <i class='bg-grey'>418 I'm a teapot</i> indica que o servidor se recusa a preparar café por ser um bule de chá. Este erro é uma referência ao <i class='italico'>Hyper Text Coffee Pot Control Protocol</i>, que foi uma piada de 1º de abril de 1998.</p>`,
  },
  {
    status: 420,
    title: "Enhance your calm",
    imgUrl: "../images/420.jpeg",
    source: `https://http.dev/420`,
    description: `<p class='nota-vermelha'>
    <i class='bold'>Nota:</i> Mecanismos de busca como o Google não indexarão URLs que retornem o status <i class='bold'>420 Method Failure</i> ou <i class='bold'>420 Enhance your calm</i>. Como consequência, URLs que já tenham sido indexadas, mas agora devolvem esse código de status HTTP, serão removidas dos resultados de pesquisa.</p>
    
    <p>O código de status <i class='bg-grey'>HTTP 420 Enhance your calm</i> é erro de cliente não oficial. Retornados pelo servidor para indicar um problema no lado do cliente. Se enviados pelo Spring Framework, indicam a falha de um método; já se enviados pelo Twitter, sinalizam que o cliente está sendo limitado devido a um número excessivo de requisições.</p>`,
  },
  {
    status: 421,
    title: "Misdirected Request",
    imgUrl: "../images/421.jpeg",
    source: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/421`,
    description: `O status HTTP <i class='bg-grey'>421 Misdirected Request</i> indica que a solicitação foi direcionada para um servidor que não é capaz de produzir uma resposta. Isso pode ser enviado por um servidor que não está configurado para produzir respostas para a combinação de <i class='bg-grey'>esquema</i> e <i class='bg-grey'>autoridade</i> que estão incluídas no URI da solicitação.`,
  },
  {
    status: 422,
    title: "Unprocessable Entity",
    imgUrl: "../images/422.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/422`,
    description: `<p class='mg-bottom'>O codigo de resposta HTTP <i class='bg-grey'>422 Unprocessable Entity</i> indica que o servidor entende o tipo de conteúdo da entidade da requisição, e a sintaxe da requisição esta correta, mas não foi possível processar as instruções presentes.</p>
    
    <p class='nota-importante'><i class='bold'>Aviso importante</i>: O cliente não deve repetir esta requisição sem modificações.</p>`,
  },
  {
    status: 423,
    title: "Locked",
    imgUrl: "../images/423.jpeg",
    source: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/423`,
    description: `<p class='nota-azul'><i class='bold'>Nota</i>: A capacidade de bloquear um recurso para evitar conflitos é específica de alguns servidores <a href='https://developer.mozilla.org/en-US/docs/Glossary/WebDAV' class='link' target='_blank'>WebDAV</a>. Os navegadores que acessam páginas da web nunca encontrarão esse código de status; Nos casos errôneos, eles o tratarão como um código de status <i class='bg-grey'>400</i> genérico.</p>
    
    <p class='mg-bottom'>
    O código HTTP <i class='bg-grey'>423 Locked</i> indica que um recurso está <i class='italico'>bloqueado</i>, o que significa que ele não pode ser acessado. Seu corpo de resposta deve conter informações no formato XML do <a href='https://developer.mozilla.org/en-US/docs/Glossary/WebDAV' class='link' target='_blank'>WebDAV</a>.</p>`,
  },
  {
    status: 424,
    title: "Failed Dependency",
    imgUrl: "../images/424.jpeg",
    source: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/424`,
    description: `<p>O código HTTP <i class='bg-grey'>424 Failed Dependency</i> indica que o método não pôde ser executado no recurso porque a ação solicitada dependia de outra ação e essa ação falhou.</p>`,
  },
  {
    status: 425,
    title: "Too Early",
    imgUrl: "../images/425.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/425`,
    description: `<p class='nota-azul'>
    <i class='bold'>Experimental</i>: Esta é uma tecnologia <a href='https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental' class='link' target='_blank'>experimental</a>. Verifique a <i class='italico'>tabela de compatibilidade entre Navegadores</i> cuidadosamente antes de usar essa funcionalidade em produção.
    </p>
    
    <p>O status HTTP 425 <i class='bg-grey'>Too Early</i> indica que o servidor não quer correr o risco de processar uma requisição que pode ser repetida, o que cria um potencial risco para ataques de repetição.</p>`,
  },
  {
    status: 426,
    title: "Upgrade Required",
    imgUrl: "../images/426.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/426`,
    description: `<p>O status HTTP <i class='bg-grey'>426 Upgrade Required</i> indica que o servidor recusa o processamento da requisição usando o protocolo atual mas poderá ser processado caso o cliente atualize para um protocolo diferente.</p>`,
  },
  {
    status: 428,
    title: "Precondition Required",
    imgUrl: "../images/428.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/428`,
    description: `<p class='mg-bottom'>
    O codigo de resposta HTTP <i class='bg-grey'>428 Precondition Required</i> indica que o servidor precisa que a requisição seja condicional.</p>

    <p>Normalmente, isto significa que um cabeçalho pré-requisito, como o <i class='bg-grey'>If-Match</i>, está faltando.</p>`,
  },
  {
    status: 429,
    title: "Too Many Requests",
    imgUrl: "../images/429.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/429`,
    description: `<p>O código de resposta HTTP <i class='bg-grey'>429 Too Many Requests</i> indica que o usuário enviou muitos pedidos em um determinado período de tempo.</p>`,
  },
  {
    status: 431,
    title: "Request Header Fields Too Large",
    imgUrl: "../images/431.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/431`,
    description: `<p>O código HTTP <i class='bg-grey'>431 Request Header Fields Too Large</i> indica que o servidor se recusou a processar a requisição porque os campos de cabeçalho HTTP excedem o tamanho permitido. A solicitação pode ser reenviada após a redução do tamanho desses cabeçalhos.</p>`,
  },
  
  {
    status: 450,
    title: "Blocked by Windows Parental Controls",
    imgUrl: "../images/450.jpeg",
    source: `https://http.dev/450`,
    description: `<p>O código de status de resposta HTTP <i class='bg-grey'>450 Blocked by Windows Parental Controls</i> é um erro de cliente não oficial específico da Microsoft e é retornado pelo servidor para indicar que os controles parentais estão ativados e estão bloqueando o acesso ao recurso solicitado.</p>`,
  },
  {
    status: 451,
    title: "Unavailable For Legal Reasons",
    imgUrl: "../images/451.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/451`,
    description: `<p>O código de erro HTTP para o cliente <i class='bg-grey'>451 Unavailable For Legal Reasons</i> indica que o recurso solicitado pelo usuário não está disponível por motivos legais, como em uma página web para a qual foi emitida uma ação legal.</p>`,
  },
  {
    status: 495,
    title: "SSL Certificate Error",
    imgUrl: "../images/495.jpeg",
    source: `https://http.dev/495`,
    description: `<p class='nota-importante'><i class='bold'>Não oficial</i>: Esse código de status HTTP não é especificado por nenhuma RFC.</p>
    
    <p>
    O código de status de resposta HTTP <i>495 SSL Certificate Error</i> é um erro de cliente não oficial específico do nginx e é retornado pelo servidor para indicar que houve um erro na verificação do certificado do cliente.</p>`,
  },
  {
    status: 496,
    title: "SSL Certificate Required",
    imgUrl: "../images/496.jpeg",
    source: `https://http.dev/496`,
    description: `<p class='nota-importante'><i class='bold'>Não oficial</i>: Esse código de status HTTP não é especificado por nenhuma RFC.</p>
    
    <p>O código de status de resposta HTTP <i>496 SSL Certificate Required</i> é um erro de cliente não oficial específico do nginx e é retornado pelo servidor para indicar que o cliente não apresentou o certificado requerido.</p>`,
  },
  {
    status: 497,
    title: "HTTP Request Sent to HTTPS Port",
    imgUrl: "../images/497.jpeg",
    source: `https://http.dev/497`,
    description: `<p class='nota-importante'><i class='bold'>Não oficial</i>: Esse código de status HTTP não é especificado por nenhuma RFC.</p>
    
    <p>O status HTTP <i class='bg-grey'>497 HTTP Request Sent to HTTPS Port</i> é um erro de cliente não oficial específico do <i class='bold'>nginx</i> e é retornado pelo servidor para indicar que uma requisição HTTP regular foi enviada para a porta HTTPS.</p>`,
  },
  {
    status: 498,
    title: "Invalid Token",
    imgUrl: "../images/498.jpeg",
    source: `https://http.dev/498`,
    description: `<p class='nota-importante'><i class='bold'>Não oficial</i>: Esse código de status HTTP não é especificado por nenhuma RFC.</p>
    
    <p>
    O status HTTP <i class='bg-grey'>498 Invalid Token</i> é um erro de cliente não oficial específico do ArcGIS e indica que a requisição HTTP incluiu um token, mas ele não foi aceito.
    </p>`,
  },
  {
    status: 499,
    title: "Client Closed Request",
    imgUrl: "../images/499.jpeg",
    source: `https://http.dev/499`,
    description: `<p class='nota-importante'><i class='bold'>Não oficial</i>: Esse código de status HTTP não é especificado por nenhuma RFC.</p>

    <p>O código HTTP <i class='bg-grey'>499 Token Required</i> é um erro de cliente não oficial específico do <i class='bold'>nginx</i>.<p>
    `,
  },
  {
    status: 500,
    title: "Internal Server Error",
    imgUrl: "../images/500.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/500`,
    description: `<p class='mg-bottom'>Quando o servidor retorna um código de erro HTTP <i class='bg-grey'>500 - Internal Server Error</i>, indica que encontrou uma condição inesperada e que o impediu de atender à solicitação.</p>

    <p>Essa resposta de erro é uma resposta genérica e abrangente. Às vezes, os arquivos log de servidores podem responder com um status code 500 acompanhado de mais detalhes sobre o request para evitar que no futuro erros desse tipo possam voltar a acontecer.</p>`,
  },
  {
    status: 501,
    title: "Not Implemented",
    imgUrl: "../images/501.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/501`,
    description: `<p class='nota-azul'>
    O erro 501 não é algo que você possa corrigir, mas requer uma correção por parte do servidor web que você está tentando acessar.
    </p>
    
    <p class='nota-azul'>
    Uma resposta 501 é armazenável em cache por padrão; a menos que os cabeçalhos de cache indiquem o contrário.
    </p>
    
    <p class='mg-bottom'>
    O código HTTP <i class='bg-grey'>501 Not Implemented</i> indica que o servidor não suporta a funcionalidade requerida para completar a requisição. Esta é a resposta apropriada para quando o servidor não reconhece o método requisitado e não tem capacidade de suporta-lo para nenhum recurso. </p>
    
    <p>Os únicos métodos de requisição que os servidores suportam obrigatóriamente ( e, portanto, isso não deve retornar este código) são <i class='bold'>GET</i> e <i class='bold'>HEAD</i>.
    </p>`,
  },
  {
    status: 502,
    title: "Bad Gateway",
    imgUrl: "../images/502.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/502`,
    description: `<p class='nota-azul'><i class='bold'>Nota</i>: Um Gateway pode significar diferentes coisas na rede, e o erro 502 geralmente não pode ser resolvido por você. É necessário que o servidor web ou os proxies que você está usando façam a correção.</p>
    
    <p>O erro HTTP <i class='bg-grey'>502 Bad Gateway</i> ocorre quando um servidor intermediário, como um gateway ou proxy, tenta obter informações de outro servidor, mas recebe uma resposta inválida. Em outras palavras, o servidor que está ajudando a processar sua solicitação encontrou um problema ao se comunicar com o servidor principal.</p>`,
  },
  {
    status: 503,
    title: "Service Unavailable",
    imgUrl: "../images/503.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/503`,
    description: `<p class='nota-azul'>
    <i class='bold'>Nota</i>: Juntamente com esta resposta deve ser enviada uma página de fácil compreensão para explicar o problema.
    </p>
    
    <p class='mg-bottom'>O código HTTP <i class='bg-grey'>503 Service Unavailable</i> indica que o servidor não está disponível para processar a requisição no momento.</p>

    <p>As causas mais comuns incluem manutenção do servidor ou sobrecarga de tráfego. Esse código de erro deve ser utilizado apenas para condições temporárias.</p>`,
  },
  {
    status: 504,
    title: "Gateway Timeout",
    imgUrl: "../images/504.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/504`,
    description: `<p>O erro HTTP <i class='bg-grey'>504 Gateway Timeout</i> indica que o servidor, enquanto atuando como gateway ou proxy, não conseguiu responder em tempo.</p>`,
  },{
    status: 505,
    title: 'HTTP Version Not Supported',
    imgUrl: '../images/505-bg.jpeg',
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/505`,
    description: `<p>O erro HTTP <i class='bg-grey'>505 HTTP Version Not Supported</i> indica que a versão HTTP utilizada na requisição não é suportada pelo servidor.</p>`,
  },
  {
    status: 506,
    title: "Variant Also Negotiates",
    imgUrl: "../images/506.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/506`,
    description: `<p>O código de status <i class='bg-grey'>506 Variant Also Negotiates</i> indica um erro na configuração interna do servidor na qual a variante escolhida é em si configurada para entrar em uma negociação de conteúdo, então não é um endpoint de negociação apropriado.</p>`,
  },
  {
    status: 507,
    title: "Insufficient Storage",
    imgUrl: "../images/507.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/507`,
    description: `<p>O status HTTP <i class='bg-grey'>507 Insufficient Storage</i> indica que o método não pode ser executado porque o servidor não pode salvar a representação necessária para completar a requisição com sucesso.</p>`,
  },
  {
    status: 508,
    title: "Loop Detected",
    imgUrl: "../images/508.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/508`,
    description: `<p>O erro HTTP <i class='bg-grey'>508 Loop Detected</i> indica que o servidor finalizou uma operação porque encontrou um loop infinito enquando processava a requisição com "Depth: infinity". Esse código indica que toda a operação falhou.</p>`,
  },
  {
    status: 509,
    title: "Bandwidth Limit Exceeded",
    imgUrl: "../images/509.jpeg",
    source: `https://http.dev/509`,
    description: `<p class='nota-importante'><i class='bold'>Não oficial</i>: Esse código de status HTTP não é especificado por nenhuma RFC.</p>
    
    <p>
    O código HTTP <i class='bg-grey'>509 Bandwidth Limit Exceeded</i> é um erro de servidor não oficial específico do Apache Web Server e do cPanel. Esse erro indica que o cliente de hospedagem web excedeu a cota de largura de banda alocada no servidor.
    </p>`,
  },
  {
    status: 510,
    title: "Not Extended",
    imgUrl: "../images/510.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/510`,
    description: `<p class='mg-bottom'>O código HTTP <i class='bg-grey'>510 Not Extended</i> é usado quando um cliente faz uma solicitação que inclui uma extensão específica que o servidor não reconhece ou não suporta.</p>

    <p>Basicamente, se você tentar usar uma funcionalidade extra na sua requisição e o servidor não consegue entendê-la ou não tem suporte para ela, o servidor responderá com o código 510 para informar que não pode processar essa extensão.</p>`,
  },
  {
    status: 511,
    title: "Network Authentication Required",
    imgUrl: "../images/511.jpeg",
    source: `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/511`,
    description: `<p>O erro HTTP <i class='bg-grey'>511 Network Authentication Required</i> indica que você precisa se autenticar para acessar a rede. Esse erro não vem do servidor principal, mas de proxies que controlam o acesso à rede.</p>`,
  },
  {
    status: 521,
    title: "Web server is down",
    imgUrl: "../images/521.jpeg",
    source: `https://http.dev/521`,
    description: `<p class='nota-importante'><i class='bold'>Não oficial</i>: Esse código de status HTTP não é especificado por nenhuma RFC.</p>
    
    <p>O código HTTP <i class='bg-grey'>521 Web server is down</i> é um erro de servidor não oficial específico da Cloudflare. Esse erro ocorre quando o cliente consegue se conectar à Cloudflare, mas a Cloudflare não consegue se conectar ao servidor original do site. Em outras palavras, significa que o servidor principal está fora do ar ou não está respondendo.</p>`,
  },
  {
    status: 522,
    title: "Connection timed out",
    imgUrl: "../images/522.jpeg",
    source: `https://http.dev/522`,
    description: `<p class='nota-importante'><i class='bold'>Não oficial</i>: Esse código de status HTTP não é especificado por nenhuma RFC (Request for Comments).</p>
    
    <p>O código HTTP <i class='bg-grey'>522 Connection timed out</i> é um erro de servidor não oficial específico da Cloudflare. Esse erro ocorre quando a Cloudflare não consegue se conectar ao servidor original devido a um tempo limite (timeout).</p>`,
  },{
    status: 523,
    title: "Connection timed out",
    imgUrl: "../images/523.jpeg",
    source: `https://http.dev/523`,
    description: `<p class='nota-importante'><i class='bold'>Não oficial</i>: Esse código de status HTTP não é especificado por nenhuma RFC.</p>
    
    <p>O código HTTP <i class='bg-grey'>523 Origin is unreachable</i> é um erro de servidor não oficial, específico do Cloudflare. Esse código de status HTTP ocorre quando há um erro no servidor de origem e ele não pode ser acessado.</p>`,
  },
  {
    status: 525,
    title: "SSL handshake failed",
    imgUrl: "../images/525.jpeg",
    source: `https://http.dev/525`,
    description: `<p class='nota-importante'><i class='bold'>Não oficial</i>: Esse código de status HTTP não é especificado por nenhuma RFC.</p>
    
    <p>
    O status HTTP <i class='bg-grey'>525 SSL handshake failed</i> é um erro não oficial específico da Cloudflare. Esse erro ocorre quando a conexão com o servidor original falha porque a negociação SSL não foi concluída com sucesso.
    </p>
    `,
  },
  {
    status: 530,
    title: "Site Frozen",
    imgUrl: "../images/530.jpeg",
    source: `https://http.dev/530`,
    description: `<p class='nota-importante'><i class='bold'>Não oficial</i>: Esse código de status HTTP não é especificado por nenhuma RFC.</p>
    
    <p>O status HTTP <i class='bg-grey'>530 Site Frozen</i> é um erro de servidor não oficial  e está relacionado ao Cloudflare e ao Pantheon. No Cloudflare, um segundo código de erro HTTP 1XXX será incluído para explicar melhor o problema. No Pantheon, o código <i class='bg-grey'>530 - Site Frozen</i> significa que o site foi restringido por inatividade.</p>`,
  },
  {
    status: 599,
    title: "Network Connect Timeout Error",
    imgUrl: "../images/599.jpeg",
    source: `https://http.dev/599`,
    description: `<p class='nota-importante'><i class='bold'>Não oficial</i>: Esse código de status HTTP não é especificado por nenhuma RFC.</p>
    
    <p>O código HTTP <i class='bg-grey'>599 Network Connect Timeout Error</i> é um código não oficial usado por alguns proxies para indicar que a conexão com o servidor, feita pelo proxy, demorou demais para responder ao cliente que está na frente do proxy.</p>`,
  },
];

export const httpDataCard = [
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