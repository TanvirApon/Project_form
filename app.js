console.log("Javascript file added");

 var submit = document.getElementById("submission");
 console.log(typeof(submit))
 var add  = document.getElementById("addition");
 console.log(typeof(add))
 
 var product =  document.getElementById("product");
 console.log(typeof(product))
 console.log(product)

// show product div
add.addEventListener( "click",()=>{
 

  var showProduct = document.getElementById("products");
  var productTemplate = document.querySelector(".product.d-none").cloneNode(true);
  productTemplate.classList.remove("d-none");
  productTemplate.classList.add("d-block");
   
  

  showProduct.appendChild(productTemplate);

  const close = productTemplate.querySelector(".btn-close");

   close.addEventListener("click",()=>{
     productTemplate.remove();
   });

});

// submit button on click event listener
submit.addEventListener("click", () => {

  // var buyer = []; 
  var products = [];
  var productJson ;

  var buyerName = document.getElementById("buyer_name").value;
  var buyerPhone = document.getElementById("buyer_phone").value;
  var area = document.getElementById("select").value;

  var buyerDetails = {
    "Buyer's name": buyerName,
    "Buyer's Phone": buyerPhone,
    "Area": area
  }

  console.log(buyerDetails);
  
  var productInfo = document.querySelectorAll(".product.d-block");
  console.log("Product Information: ", productInfo);
  console.log("Product Information: ", productInfo);
  console.log("Product Information type : ", productInfo.length);

  for (var i = 0; i < productInfo.length; i++) {
      var productName = productInfo[i].querySelector(".p-name").value;
      var description = productInfo[i].querySelector(".p-description").value;
      var quantity = parseFloat(productInfo[i].querySelector(".p-quantity").value);
      var price = parseFloat(productInfo[i].querySelector(".p-price").value);
      var rate = parseFloat(productInfo[i].querySelector(".p-rate").value);
      var amount = parseFloat(productInfo[i].querySelector(".p-amount").value);
     
          var productDetails = {
            "Product's name": productName,
            "Description": description,
            "Quantity": quantity,
            "Price": price,
            "Rate": rate,
            "Amount": amount
        };

    products.push(productDetails);
  }
  
  productJson = JSON.stringify(products);

  console.log(productJson);

  var display = document.querySelector(".Json-display");
  display.innerHTML = productJson + "<br>";
})





