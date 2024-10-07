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
 
   var showProduct = document.getElementById("product");
   var newDiv = document.createElement("div");
   
   newDiv.innerHTML =  `
            <div class="border p-3 mb-3 product">
              <div class="d-flex justify-content-end" >
               <button type="button" class="btn-close bg-danger text-light" aria-label="Close"></button>
              </div> 
               <div class="mb-3">
                  <label class="mb-2">Product Name : </label>
                  <input type="text" class="form-control p_name">
              </div>
              <div class="mb-3">
                  <label class="mb-2">Description : </label>
                  <textarea class="form-control p_description" rows="3"></textarea>
              </div>
              <div class="mb-3">
                  <label class="mb-2">Quantity : </label>
                  <input type="number" class="form-control p_quantity">
              </div>
              <div class="mb-3">
                  <label class="mb-2">Price : </label>
                  <input type="number" class="form-control p_price">
              </div>
              <div class="mb-3">
                  <label class="mb-2">Rate : </label>
                  <input type="number" class="form-control p_rate">
              </div>
              <div class="mb-3">
                  <label class="mb-2">Amount : </label>
                  <input type="number" class="form-control p_amount">
              </div>
            </div>`;

   showProduct.appendChild(newDiv);

   const close = newDiv.querySelector(".btn-close");

   close.addEventListener("click",()=>{
      newDiv.remove();

   });

});

// submit button on click event listener
submit.addEventListener("click", () => {

  // var buyer = [];
  

  var product = [];

  var buyerName = document.getElementById("buyer_name").value;
  var buyerPhone = document.getElementById("buyer_phone").value;
  var area = document.getElementById("select").value;

  var buyerDetails = {
    "Buyer's name": buyerName,
    "Buyer's Phone": buyerPhone,
    "Area": area
  }

  console.log(buyerDetails);


  var productInfo = document.querySelectorAll(".product");
  console.log("Product Information: ", productInfo);

  for (var i = 1; i < productInfo.length; i++) {
      var productName = productInfo[i].querySelector(".p_name").value;
      var description = productInfo[i].querySelector(".p_description").value;
      var quantity = parseFloat(productInfo[i].querySelector(".p_quantity").value);
      var price = parseFloat(productInfo[i].querySelector(".p_price").value);
      var rate = parseFloat(productInfo[i].querySelector(".p_rate").value);
      var amount = parseFloat(productInfo[i].querySelector(".p_amount").value);

      if(productName ==="" || description === "" || quantity === "" || price === "" || rate === "" || amount === "" ){
        alert("Field is Empty !!!");
      }

      else
      {
        var productDetails = {
          "Product's name": productName,
          "Description": description,
          "Quantity": quantity,
          "Price": price,
          "Rate": rate,
          "Amount": amount
      };

      }
      product.push(productDetails);
  }
  
  console.log(product);
})





