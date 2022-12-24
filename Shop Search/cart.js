const productsList= JSON.parse(localStorage.getItem("allProducts"));
console.log("Product List", productsList);
const container = document.getElementById("container");
let orderTotal = 0; 
const renderProducts = () => {
    productsList.forEach((product) => {
        if(localStorage.hasOwnProperty(product.id)){
            console.log("Product id", product.id);
            const mainDiv = document.createElement("div");
            const topDiv = document.createElement("div");
            mainDiv.classList.add("main-div");
            topDiv.classList.add("top-div");
            const imgDiv = document.createElement("div");
            imgDiv.classList.add("imgDiv");
            const image = document.createElement("img");
            const btnDiv = document.createElement("div");
            btnDiv.classList.add("btn-div");
            const count = document.createElement("input");
            count.setAttribute("type", "number");
            const isItemInCart = JSON.parse(localStorage.getItem(product.id));
            count.setAttribute(
              "value",
              isItemInCart?.cartSize
            );
            count.setAttribute("id", product.id);
            count.classList.add("input-box");
            const addToCartButton = document.createElement("button");
            // addToCartButton.setAttribute("onClick",addToCart)
            addToCartButton.classList.add("add-to-cart-btn");
            addToCartButton.setAttribute("id", product.id);
            image.classList.add("img");
            image.src = product.image;
            const textBlock = document.createElement("div");
            const totalDiv = document.createElement("h3");
            totalDiv.classList.add("total");
            textBlock.classList.add("textBlock");
            const title = document.createElement("h3");
            title.textContent = product.title;
            const price = document.createElement("h3");
            price.textContent = `$${product.price}`;
            addToCartButton.textContent = "Add to cart";
            textBlock.append(title);
            textBlock.append(price);
            imgDiv.append(image);
            topDiv.append(imgDiv);
            topDiv.append(textBlock);
            const removeFromCart = document.createElement("div");
            removeFromCart.classList.add("remove-item");
            removeFromCart.textContent = "X";
            removeFromCart.setAttribute("id", product.id);
            mainDiv.append(removeFromCart);
            mainDiv.append(topDiv);
            btnDiv.append(count);
            btnDiv.append(addToCartButton);
            const total = +product.price * +isItemInCart.cartSize;
            orderTotal+=total;
            totalDiv.textContent =`Total:   $ ${total} `;
            btnDiv.append(totalDiv)
            mainDiv.append(btnDiv);
            container.append(mainDiv);        
        }
    });

    const OrderSummary = document.createElement("div");
    const cartTotal = document.createElement("h3");
    cartTotal.textContent="Order Total";
    const totalAmount = document.createElement("h3");
    totalAmount.textContent= `$${orderTotal.toFixed(2)}`
    OrderSummary.append(cartTotal);
    OrderSummary.append(totalAmount);
    container.append(OrderSummary);
  };
  renderProducts();