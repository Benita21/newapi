

const cards = document.querySelector(".products");
const productsEndpoint = "https://dummyjson.com/products";

async function fetchProducts() {
    try {
        const response = await fetch(productsEndpoint);
        const data = await response.json();
        const products = data.products;

        
        console.log(products);

        products.slice(0,4).forEach((product) => {
            const productHtml = `
                <div class="card">
                    <div class="image">
                        <img src="${product.images}" alt="">
                    </div>
                    <div class="details">
                        <p>${product.category}</p>
                        <p>${product.title}</p>
                    </div>
                    <div class="ratings">
                        <div class="rate">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                        </div>
                        <p>(231)</p>
                    </div>
                    <div class="price">
                        <p> $${product.price}</p>
                    </div>
                </div>
            `;
            cards.insertAdjacentHTML("beforeend", productHtml);
        });
    } catch (error) {
        console.log(error);
    }
}

fetchProducts();
