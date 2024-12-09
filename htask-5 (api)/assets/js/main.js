// https://fakestoreapi.com/products

// yuxaridaki apiden istifade etmekle
// men's clothing categorysi olanlarin
// titlesini ve pricesini ekranda cixaracaqsiz


// const getApi = () => {
//     try {
//         axios.get("https://fakestoreapi.com/products")
//             .then((res) => {
//                 const mensClothing = res.data.filter(product => product.category == "men's clothing");
//                 mensClothing.forEach(product => {
//                     console.log(`Title: ${product.title}, Price: ${product.price}`);
//                 });
//             })
//     } catch (error) {
//         console.log(error);
//     }
// }
// getApi();

const getApi = () => {
    axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            const mensClothing = res.data.filter(product => product.category === "men's clothing");

            const productList = document.getElementById('product-list');

            productList.innerHTML = '';

            mensClothing.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.style.border = '1px solid #ddd';
                productDiv.style.padding = '10px';
                productDiv.style.marginBottom = '10px';

                const productTitle = document.createElement('h3');
                productTitle.innerText = `Title: ${product.title}`;
                const productPrice = document.createElement('p');
                productPrice.innerText = `Price: $${product.price}`;

                productDiv.appendChild(productTitle);
                productDiv.appendChild(productPrice);

                productList.appendChild(productDiv);
            });
        })
        .catch((error) => {
            console.log(error);
        });
}

getApi();
