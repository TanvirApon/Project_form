console.log("Javascript file added");

  var submit = document.getElementById("submission");

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
  console.log(product)



})





