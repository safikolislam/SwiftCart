const Loader=(status)=>{
if(status){
  document.getElementById("skeleton_loader").classList.remove("hidden");


  document.getElementById("product_container").classList.add("hidden");
  
}else{
  document.getElementById("product_container").classList.remove("hidden");
  document.getElementById("skeleton_loader").classList.add("hidden");

}
}



// Card Template
const CardTemplate = (product)=>{
return `
<div class="card bg-white w-full max-w-[350px] shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 group rounded-2xl overflow-hidden m-2">
  
  <figure class="relative bg-gray-50 pt-4 px-4 overflow-hidden">
    <img 
      src="${product.image}" 
      alt="${product.title}" 
      class="w-full h-56 object-contain group-hover:scale-110 transition-transform duration-500" 
    />
  
  </figure>

  <div class="card-body p-5">
    <div class="flex justify-between items-center mb-2">
      <span class="badge badge-soft badge-info uppercase text-[10px] font-bold tracking-wider">
        ${product.category}
      </span>
      <div class="flex items-center gap-1 text-sm font-medium text-gray-600">
        <i class="fa-solid fa-star text-orange-400 text-xs"></i>
        <span>${product.rating.rate}</span>
        <span class="text-gray-400 font-normal">(${product.rating.count})</span>
      </div>
    </div>

    <h2 class="mb-10 card-title text-base font-bold text-gray-800 line-clamp-1 group-hover:text-blue-600 transition-colors">
      ${product.title}
    </h2>
    <p class="text-2xl font-black text-blue-700 mt-1">$${product.price}</p>

    <div class="card-actions justify-between mt-4 gap-2">
      <button 
        onclick="ModalDetails('${product.id}')" 
        class="btn btn-outline btn-sm flex-1 border-gray-300 hover:bg-gray-100 hover:text-gray-800 transition-all rounded-lg"
      >
        <i class="fa-regular fa-eye"></i> Details
      </button>
      
      <button class="btn btn-primary btn-sm flex-1 shadow-lg shadow-blue-200 hover:shadow-none transition-all rounded-lg ">
      <i class="fa-solid fa-cart-plus"></i> Add
      </button>
      </div>
      </div>
      </div>
`
}


// Category  Button

const categoryBtn = async()=>{

    const url = "https://fakestoreapi.com/products/categories";
    const res = await fetch(url)
    const data = await res.json()
    displayCategory(data)
}

const displayCategory=(data)=>{
   
    const Button = document.getElementById("category_container");
     if(!Button) return 
    data.forEach(btn=>{
      
        const AllButton= document.createElement("div");
        AllButton.innerHTML=`
        <button id="${btn}" onclick="selectedCategory(id)" class="btn hover:bg-indigo-400 hover:text-white category_button">${btn}</button>
        
        `
     Button.append(AllButton)
    })
      
  }



categoryBtn()



// All product


const AllProducts= async()=>{
  Loader(true)
  const url = "https://fakestoreapi.com/products"
  const res = await fetch(url)
  const data = await res.json()
  
  displayProducts(data);
  Loader(false)
  
  RemoveActive()
  document.getElementById("all_category_btn").classList.add("active");
   

}
const displayProducts = (data)=>{
 
   const allProducts =document.getElementById("product_container")
   if(!allProducts ) return
   allProducts.innerHTML="";
    data.forEach(product=>{
       const products = document.createElement("div")
       products.innerHTML= CardTemplate(product)
      allProducts.append(products)
    })
  }






// Button Select and  show Selected Products

const selectedCategory=async(id)=>{
     Loader(true)
 const url = `https://fakestoreapi.com/products/category/${id}`;
 
 const res = await fetch(url)
 const data = await res.json()
 displayProducts(data);
 const clickBtn = document.getElementById(`${id}`)
 RemoveActive()
 clickBtn.classList.add("active")
 Loader(false)
}






// Remove Active Class






const RemoveActive=()=>{
  const  Btn = document.querySelectorAll(".category_button");
  
  Btn.forEach(category=>{
       category.classList.remove("active")
  })
 

}






// Modal

const ModalDetails=async(id)=>{
   const url = `https://fakestoreapi.com/products/${id}`
   const res = await fetch(url)
   const data = await res.json()
   showModal(data);

}

const showModal = (data)=>{
 const ModalContainer = document.getElementById("my_modal")
  const Modal = document.getElementById("modal")
  Modal.innerHTML=`
   <h3 class="font-semibold">${data.title}</h3>
 <h4 class="mt-5 font-semibold" >Price: ${data.price}</h4>
  <p class="font-semibold">Rate: ${data.rating.rate}</p>
 <h4 class="text-gray-400">${data.description}</h4>
  <div class="flex justify-between my-5">
  <div><button class="btn rounded-lg btn-primary  addToCart">Add to Cart</button></div>
  <div>   
  <form method="dialog">
       
        <button class="btn rounded-lg bg-red-500 text-white ">Close</button>
      </form></div>
  </div>
  
  `;
  ModalContainer.showModal()
}


// Trending Products


const TopProducts = async()=>{
  const url = "https://fakestoreapi.com/products"
  const res = await fetch(url)
  const data = await res.json();
  trendingProducts(data);
}

 const trendingProducts = (data)=>{

 
   const sortedData = data.sort((a,b)=>b.rating.rate-a.rating.rate).slice(0,3)
   const topProducts = document.getElementById("trending_products")
    if(!topProducts) return
    topProducts.innerHTML = ""; 
   sortedData.forEach(product=>{
      const topTrendingProducts = document.createElement("div");
    
      topTrendingProducts.innerHTML= CardTemplate(product)
      topProducts.append(topTrendingProducts)

  })

 }
 TopProducts()



