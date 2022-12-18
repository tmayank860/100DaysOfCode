let allProducts = [];
//api call in javascript 
const fetchProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json(); 
  allProducts = products;
  renderProducts(allProducts);
}
const search = document.getElementById('search-input');
search.addEventListener("keyup",async function() {
  const searchText = document.getElementById('search-input').value.toLowerCase();
  const container = document.getElementById('container');
  const product = document.querySelectorAll('.main-div');
  const pname = container.getElementsByTagName('h3');
  console.log("pname", pname, "product", product);
   for (let i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName('h3')[0];
    if(match){
      let textvalue = match.textContent || match.innerHTML
      if(textvalue.toLowerCase().indexOf(searchText)> -1){
        product[i].style.display ="";
      }else{
        product[i].style.display ="none";
      }
    }
   }
});
const renderProducts = (productsList, searchText = null) => {
  console.log("productsList", productsList);
  const container = document.getElementById("container");
  productsList.forEach((product) => {
    const mainDiv = document.createElement("div");
  mainDiv.classList.add("main-div");
    const imgDiv = document.createElement("div");
    imgDiv.classList.add('imgDiv');
    const image = document.createElement("img");
    image.classList.add("img");
    image.src = product.image;
    const textBlock = document.createElement("div");
    textBlock.classList.add("textBlock");
    const title = document.createElement("h3");
    title.textContent = product.title.length > 50 ?`${product.title.substring(0,50)}.... ` : product.title ;
    const price = document.createElement("h2");
    price.textContent = `$${product.price}`;
    textBlock.append(title);
    textBlock.append(price);
    imgDiv.append(image);
    mainDiv.append(imgDiv);
    mainDiv.append(textBlock);
    container.append(mainDiv);
  });
  
};

fetchProducts();





