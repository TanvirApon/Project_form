console.log("Javascript file added");

 var submit = document.getElementById("submission");
 var add  = document.getElementById("addition");
//  var close = document.getElementById("close");
function closenav() {
  showProduct.removeChild(newDiv);
}

// show product div
add.addEventListener( "click",()=>{
 
  const showProduct = document.getElementById("product");
  const newDiv = document.createElement("div");

   newDiv.innerHTML =  `
              <div class="d-flex justify-content-end" onclick="closenav();">
               <button type="button" class="btn-close" aria-label="Close"></button>
              </div> 
               <div class="mb-3">
                  <label class="mb-2">Product Name : </label>
                  <input type="text" class="form-control" id="pname">
              </div>
              <div class="mb-3">
                  <label class="mb-2">Description : </label>
                  <textarea class="form-control" id="description" rows="3"></textarea>
              </div>
              <div class="mb-3">
                  <label class="mb-2">Quantity : </label>
                  <input type="number" class="form-control" id="quantity">
              </div>
              <div class="mb-3">
                  <label class="mb-2">Price : </label>
                  <input type="number" class="form-control" id="price">
              </div>
              <div class="mb-3">
                  <label class="mb-2">Rate : </label>
                  <input type="number" class="form-control" id="rate">
              </div>
              <div class="mb-3">
                  <label class="mb-2">Amount : </label>
                  <input type="number" class="form-control" id="amount">
              </div>
            `;

   showProduct.appendChild(newDiv);


 
})

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

  var productName = document.getElementById("pname").value;
  var description = document.getElementById("description").value;
  var quantity = document.getElementById("quantity").value;
  var price = document.getElementById("price").value;
  var rate = document.getElementById("rate").value;
  var amount = document.getElementById("amount").value;

  var productDetails = {
    "Product's name": productName,
    "Description": description,
    "Quantity": quantity,
    "Price": price,
    "Rate": rate,
    "Amount": amount
  }
  
  product.push(productDetails);
  console.log(product);
})


//close button 
// close.addEventListener("click",()=>{
//   console.log("close button has been clicked");

// })

function close(){
  console.log("close button has been clicked");
}


