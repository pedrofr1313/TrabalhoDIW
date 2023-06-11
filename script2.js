// Obtém a parte de consulta da URL
var queryString = window.location.search;

// Cria um objeto URLSearchParams para lidar com a string de consulta
var params = new URLSearchParams(queryString);

// Obtém o valor do parâmetro 'id'
var productId = params.get('id');

// Use o ID do produto para exibir as informações relevantes na página de detalhes
console.log(productId)
let str =''
fetch(`https://diwserver.vps.webdock.cloud/products/${productId}`)
.then(res => res.json())
.then(data => {
     let APIresponse = data
     let nome = APIresponse.title
     let preco = APIresponse.price
     let descricao = APIresponse.description
     let img = APIresponse.image
     
      str +=`<div id="titulo"><h1>${nome}</h1><br> <h4><a href="" class="text-danger" id="rate">Avaliação: ${APIresponse.rating.rate}</a></h4> <br><h3>Preço: R$${preco},00</h3></div>
   
      <img src="${img}" alt="" id="img">
    
     <div class="descricao"><h4>Descrição:</h4>${descricao}</div>`
   document.getElementById('flex').innerHTML = str
})