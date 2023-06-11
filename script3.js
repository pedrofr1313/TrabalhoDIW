document.getElementById('botao').addEventListener('click', carregarItens);

function carregarItens(){
    let texto = document.querySelector('#produtos').value;

    console.log('texto=',texto)
    let str = ''
    for(let j=1;j<=254;j++){
    fetch(`https://diwserver.vps.webdock.cloud/products/category/Accessories - Watches?page=${j}`)
    .then(res => res.json())
    .then(data => {
        for(i=0; i<data.products.length;i++){
        let APIresponse = data.products[i]
        let title = APIresponse.title
        let price = APIresponse.price
        let nota = APIresponse.rating.rate
        let id = APIresponse.id
        let image = APIresponse.image
        let marca = APIresponse.brandName
        if(title.includes(texto)){
        
            str += `<div class="cardbusca">
            <div class="border border-dark border-3 rounded-3 px-0">
            
              <img src="${image}" class="col-3"  alt="amp"> <h2 class="text-danger-emphasis col-9" id="sessao">${title} <br><a href="" class="fs-6">Avaliação:${nota}</a> <br> <a href="" class="text-danger">R$ ${price},00</a></h2><br> <a href="detalhes.html?id=${id}"class="mt-5 text-danger">Ver detalhes</a>
              
              
              </div>
              </div>`
        }

        else if(texto===marca){
            str += `<div class="cardbusca">
            <div class="border border-dark border-3 rounded-3 px-0">
            
              <img src="${image}" class="col-3"  alt="amp"> <h2 class="text-danger-emphasis col-9" id="sessao">${title} <br><a href="" class="fs-6">Avaliação:${nota}</a> <br> <a href="" class="text-danger">R$ ${price},00</a></h2><br> <a href="detalhes.html?id=${id}"class="mt-5 text-danger">Ver detalhes</a>
              
              
              </div>
              </div>` 
        }
        
        
        }

        document.getElementById('flex').innerHTML = str

})}



    }
