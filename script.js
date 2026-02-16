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
        const AllButton= document.createElement("div");
        AllButton.innerHTML=`
        <button class="btn hover:bg-indigo-500 hover:text-white">${btn}</button>
        
        `
     Button.append(AllButton)
    })
      
}



categoryBtn()






