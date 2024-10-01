console.log("Javascript file added");

//addition function has been called

const add =  document.getElementById("addition")
  
add.addEventListener("click", display);

function display(){
  document.getElementById("product").style.display="block";
}
    


function submission(){
    console.log("submission clicked");
}