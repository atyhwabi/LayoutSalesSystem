function LoadCategories() {
    const images = [  
    "../img/homedisplay.webp", 
    "../img/homedisplay.webp",  
    "../img/homedisplay.webp",  
    "../img/homedisplay.webp",  
    "../img/homedisplay.webp",  
    "../img/homedisplay.webp"  
    ];  
    const container = document.getElementById('categories');
    images.forEach((image) => {
        const div = document.createElement('div');
        div.className = 'col-3';
        const img = document.createElement('img');
        img.src = image;
        div.appendChild(img);
        container.appendChild(div);
    });   
}

async function fetchData() {  
    const apiUrl = 'https://localhost:7110/Products'; 
    try {  
        const response = await fetch(apiUrl, {  
            method: 'GET',  
            headers: {  
                'Content-Type': 'application/json',  
                
            },  
        });  

        if (!response.ok) {  
            throw new Error(`HTTP error! Status: ${response.status}`);  
        }  

        const data = await response.json();  
        console.log(data);  
        data.forEach((product) => {
            products.push(product);
      
        });
        console.log(products);
        LoadFeaturedCatagories();
    } catch (error) {  
        console.error('Error fetching data:', error);  
    }  
} 

const products = [  
    /*{  
        imgSrc: "../img/MENSTEE_YELLOW_FRONT13_2048x.webp",  
        title: "Red Printed T-Shirt",  
        price: "R350.00",  
        rating: 4   
    }
    ,
    {  
        imgSrc: "../img/MENSTEE_YELLOW_FRONT13_2048x.webp",  
        title: "Red Printed T-Shirt",  
        price: "R350.00",  
        rating: 4   
    }
    ,
    {  
        imgSrc: "../img/MENSTEE_YELLOW_FRONT13_2048x.webp",  
        title: "Red Printed T-Shirt",  
        price: "R350.00",  
        rating: 4   
    }
    ,{  
        imgSrc: "../img/homedisplay.webp",  
        title: "Black Printed T-Shirt",  
        price: "R250.00",  
        rating: 3   
    }, */
]; 


function LoadFeaturedCatagories() {

const container = document.getElementById('product-container');  

for (let i = 0; i < products.length; i++) {  
    const product = products[i];   

    const colDiv = document.createElement('div');  
    colDiv.className = 'col-4';  

    const link = document.createElement('a');  
    link.href = 'Product-details.html';  
  
    const img = document.createElement('img');  
    img.src = product.imageUrl;  

    link.appendChild(img);  

    colDiv.appendChild(link);  

    const title = document.createElement('h4');  
    title.textContent = product.title;  
    colDiv.appendChild(title);  
 
    const ratingDiv = document.createElement('div');  
    ratingDiv.className = 'rating';  

    for (let starCount = 0; starCount < 5; starCount++) {  
        const star = document.createElement('i');  
        star.className = starCount < product.rating ? 'fa fa-star' : 'fa fa-star-o';   
        ratingDiv.appendChild(star);  
    }  

    const price = document.createElement('p');  
    price.textContent = product.price;  
    ratingDiv.appendChild(price);  

    colDiv.appendChild(ratingDiv);  
 
    container.appendChild(colDiv);  
  }
}

function LoadFeaturedProducts() {

    const products = [  
        {  
            imgSrc: "../img/MENSTEE_YELLOW_FRONT13_2048x.webp",  
            title: "Yellow Printed T-Shirt",  
            rating: 4,  
            price: "R350.00",  
        },  
        {  
            imgSrc: "../img/images (1).jpeg",  
            title: "Blue Printed T-Shirt",  
            rating: 5,  
            price: "R300.00",  
        },  
        {  
            imgSrc: "../img/MENSTEE_YELLOW_BACK14_2048x.webp",  
            title: "Yellow Printed T-Shirt",  
            rating: 3,  
            price: "R150.00",  
        }, 
        {  
            imgSrc: "../img/1-Red-Printed-Tshirt.webp",  
            title: "Red Printed T-Shirt",  
            rating: 3,  
            price: "R350.00",  
        }, 
        {  
            imgSrc: "../img/1-Red-Printed-Tshirt.webp",  
            title: "Red Printed T-Shirt",  
            rating: 3,  
            price: "R250.00",  
        },
        {  
            imgSrc: "../img/1-Red-Printed-Tshirt.webp",  
            title: "Red Printed T-Shirt",  
            rating: 3,  
            price: "R250.00",  
        },
        {  
            imgSrc: "../img/MENSTEE_YELLOW_FRONT13_2048x.webp",  
            title: "Yellow Printed T-Shirt",  
            rating: 4,  
            price: "R350.00",  
        },  
        {  
            imgSrc: "../img/images (1).jpeg",  
            title: "Blue Printed T-Shirt",  
            rating: 5,  
            price: "R300.00",  
        }
        
    ];  
    
      
    const productList = document.getElementById('product-list');  
    
 
    products.forEach(product => {  
 
        const colDiv = document.createElement('div');  
        colDiv.className = 'col-4';  
     
        const img = document.createElement('img');  
        img.src = product.imgSrc;  
         
        colDiv.appendChild(img);  
     
        const title = document.createElement('h4');  
        title.textContent = product.title;  
        colDiv.appendChild(title);  
      
        const ratingDiv = document.createElement('div');  
        ratingDiv.className = 'rating';  
     
        for (let i = 0; i < 5; i++) {  
            const star = document.createElement('i');  
            star.className = (i < product.rating) ? 'fa fa-star' : 'fa fa-star-o'; 
            ratingDiv.appendChild(star);  
        }  
    
        const price = document.createElement('p');  
        price.textContent = product.price;  
        ratingDiv.appendChild(price);  
     
        colDiv.appendChild(ratingDiv);  
     
        productList.appendChild(colDiv);  
    });  
}

