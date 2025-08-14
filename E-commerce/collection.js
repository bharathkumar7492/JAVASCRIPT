let productContainer = document.getElementById("products")
let search = document.getElementById("search")
let productList = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function(event){
    let enteredValue = event.target.value.toUpperCase()

    for (count=0; count < productList.length; count++){

        let productName = productList[count].querySelector("p").textContent.toUpperCase();

        if (productName.indexOf(enteredValue) < 0) {

            productList[count].style.display = "none";
        }
        else {
            productList[count].style.display = "block";
        }


    }
})