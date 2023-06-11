let str =''
//const content = document.querySelector(".content");
//const inputSearch = document.querySelector("input[type='search']")
for(let j=89;j<93;j++){
    console.log(j)
fetch(`https://diwserver.vps.webdock.cloud/products?page=${j}`)
.then(res => res.json())
.then(data => {
//data.forEach((products) =>{ 
//  addHTML(products.title)
  //items.push(products.name)
//} )




for(i=0; i<=3;i++){
    let APIresponse = data.products[i]
    console.log('resposta=', APIresponse)
    let product_name = APIresponse.title
    let image = APIresponse.image 
    let price = APIresponse.price
    let nota = APIresponse.rating.rate
    let id = APIresponse.id
    if(i==3 && j==89){
      let response2 = data.products[i+1]
      let product_name2 = response2.title
      let image2 = response2.image
      let price2 = response2.price
      let nota2 = response2.rating.rate
      let id2 = response2.id
        console.log(i)
     str += `
     <aside class="col-md-4 mx-2 border  aside" id="aside"><h1>Itens mais procurados:</h1>
      
    
     <div class="border border-dark border-3 rounded-3">
     <div class="parteinterior">
       <img src="${image}" class=""  alt="amp">
       <div class="my-0 mx-0"><h2 class="text-danger-emphasis">${product_name}<br><a href="" class="fs-6">Avaliação:${nota}</a> <br> <a href="" class="text-danger">R$ ${price},00</a></h2><a href="detalhes.html?id=${id}"class="mt-5 text-danger">Ver detalhes</a></div>
     </div>
   </div>
   <div class="border border-dark border-3 rounded-3">
     <div class="parteinterior">
       <img src="${image2}" class=""  alt="amp">
      <div class="mx-0 my-0"><h2 class="text-danger-emphasis">${product_name2}<br><a href="" class="fs-6">Avaliação:${nota2}</a> <br> <a href="" class="text-danger">R$ ${price2},00</a></h2><a href="detalhes.html?id=${id2}"class="mt-5 text-danger">Ver detalhes</a></div>
     </div>
   </div>
   </aside> `
    }
    else if(i==3){
        let response2 = data.products[i+1]
      let product_name2 = response2.title
      let image2 = response2.image
      let price2 = response2.price
      let nota2 = response2.rating.rate
      let id2 = response2.id
      str += `  <aside class="col-md-4 mx-2 border  aside" id="aside">
      
    
     <div class="border border-dark border-3 rounded-3 px-0">
     <div class="parteinterior">
       <img src="${image}" class=""  alt="amp">
      <div class="my-0 mx-0"> <h2 class="text-danger-emphasis">${product_name}<br><a href="" class="fs-6">Avaliação:${nota}</a> <br> <a href="" class="text-danger">R$ ${price},00</a></h2><a href="detalhes.html?id=${id}"class="mt-5 text-danger">Ver detalhes</a></div>
       
       </div>
   </div>
   <div class="border border-dark border-3 rounded-3">
     <div class="parteinterior">
       <img src="${image2}" class=""  alt="amp">
       <div class="my-0 mx-0"><h2 class="text-danger-emphasis">${product_name2}<br><a href="" class="fs-6">Avaliação:${nota2}</a> <br> <a href="" class="text-danger">R$ ${price2},00</a></h2><a href="detalhes.html?id=${id2}"class="mt-5 text-danger">Ver detalhes</a></div>
     </div>
   </div>
   </aside> `
    }
    else{
    str += `<div class="card col-md-3 border-danger my-2 mx-2 rounded-2 px-0 col-xs-6 " style="width: 18rem;">
    <img src="${image}" class="card-img-top border border-danger border-5" alt="bateria">
     <div class="card-body">
      <p class="card-text text-danger-emphasis ">${product_name}</p>
      <a href="">Avaliação:${nota}</a>
      <h2 class="text-danger">R$ ${price},00</h2><button class="btn btn-outline-danger" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
        <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
      </svg></button><a href="detalhes.html?id=${id}" class="text-danger">Ver detalhes</a>
     </div></div>
    `
   }
}
document.getElementById('cards').innerHTML = str


})}