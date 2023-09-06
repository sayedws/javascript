const btnPlusArray=document.getElementsByClassName("Plus");
for(var i=0;i<btnPlusArray.length;i++){
    btnPlusArray[i].addEventListener("click",increment);
}
function increment(event){
    const btnPlus=event.target
    const divElt=btnPlus.parentElement
    const quantityTag=divElt.querySelector("p")
    var quantityValue=parseInt(quantityTag.innerHTML)
    quantityValue++
    quantityTag.innerHTML=quantityValue
    const trElement=divElt.parentElement.parentElement
    const unitPriceValue=Number(trElement.querySelector(".uniteprice").innerHTML)
    const priceTag=trElement.querySelector(".price")
    var priceValue=Number(priceTag.innerHTML)
    priceValue+quantityValue*unitPriceValue
    console.log(priceValue)
    priceTag.innerHTML=priceValue
}
