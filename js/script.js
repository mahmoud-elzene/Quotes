var allProducts = document.querySelectorAll(".list li")
 var content = document.querySelector("#content")
var btn = document.querySelector("#addToCart")
var preesss = document.querySelector("#pres-shoo-1")
var totalPrice = 0 ;
allProducts.forEach( function (item){
    item.onclick = function (){
        totalPrice += parseInt (item.getAttribute("price")) 
        content.innerHTML += item.textContent + " , ";
        if (content.innerHTML != "" ){
            btn.style.display = "block";
            btn.style.backgroundColor = "blue"
            btn.style.color = "white"
        }
    }
})
btn.onclick = function (){
    // console.log(totalPrice)
    preesss.innerHTML =totalPrice
    preesss.style.color = "white"
    preesss.style.backgroundColor = "gray "
    preesss.style.width = "75px "

}



