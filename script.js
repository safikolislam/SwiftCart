// Category  Button

const categoryBtn = async()=>{
    const url = "https://fakestoreapi.com/products/categories";
    const res = await fetch(url)
    const data = await res.json()
    displayCategory(data)
}

const displayCategory=(data)=>{
   
    const Button = document.getElementById("category_container");
    data.forEach(btn=>{
        console.log(btn);
        const AllButton= document.createElement("div");
        AllButton.innerHTML=`
        <button id="${btn}" onclick="selectedCategory(id)" class="btn hover:bg-indigo-500 hover:text-white">${btn}</button>
        
        `
     Button.append(AllButton)
    })
      
}



categoryBtn()



// All product


const AllProducts= async()=>{
    const url = "https://fakestoreapi.com/products"
    const res = await fetch(url)
    const data = await res.json()
     displayProducts(data);

}
const displayProducts = (data)=>{
   const allProducts =document.getElementById("product_container")
   allProducts.innerHTML=""
    data.forEach(product=>{
       const products = document.createElement("div")
       products.innerHTML=`
                    <div class="card bg-base-100 w-90  shadow-sm m-2">
  <figure>
    <img class="w-55  h-50 object-cover overflow-hidden" 
      src=${product.image
}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <div class="flex justify-between">
        <div>
  <span class="badge bg-blue-200 text-blue-600">${product.category}</span>  
        </div>
     <div class="text-gray-500"><span>${product.rating.rate}<span>(${product.rating.count})</span></div>
    
    </div>
    <h2 class="text-xl font-semibold">${product.title}</h2>
    <p class="font-bold text-xl">$${product.price}</p>
    <div class="card-actions justify-between">
      <button onclick="ModalDetails('${product.id}')"  class="btn border border-gray-300"><i class="fa-regular fa-eye"></i>Details</button>
      <button class="btn btn-primary"><i class="fa-regular fa-basket-shopping"></i>Add</button>
    </div>
  </div>
       
       `
       allProducts.append(products)
    })
}


AllProducts()



// Button Select and  show Selected Products

const selectedCategory=async(id)=>{
    
 const url = `https://fakestoreapi.com/products/category/${id}`;
 
 const res = await fetch(url)
 const data = await res.json()
 displayProducts(data);
}

