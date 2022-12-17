console.log("Hello world");

//api call in javascript 
const fetchProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json(); 
  return products;
}

const renderProducts = async () => {
  const productsList = await fetchProducts();
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
    const price = document.createElement("h3");
    price.textContent = `$${product.price}`;
    textBlock.append(title);
    textBlock.append(price);
    imgDiv.append(image);
    mainDiv.append(imgDiv);
    mainDiv.append(textBlock);
    container.append(mainDiv);
  });
  
};

renderProducts();





