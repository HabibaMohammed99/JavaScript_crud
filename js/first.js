
    var productContainer = [];
    var inputs = document.getElementsByClassName("form-control");

    if(localStorage.getItem("productsData") == null)
    {
        productContainer =[];
    }
    else
    {
        productContainer = JSON.parse(localStorage.getItem("productsData"));
        displayProduct();
    }
    
    // function validateForm(productName)
    // {
    //     var regex = /^[A-Z][a-z]{3,8}$/;
    
    //     if(regex.test(productName) == true)
    //     {
    //         document.getElementById("addBtn").removeAttribute("disabled");
    
    //     }
    //     else{
    //         document.getElementById("addBtn").disabled = true;        
    //     }
    // }

function addProduct()
        {
            var productName = document.getElementById("productNameInp").value;
            var productPrice = document.getElementById("productPriceInp").value;
            var productCategory = document.getElementById("productCategoryInp").value;
            var productCode = document.getElementById("productCodeInp").value;
            var productDesc = document.getElementById("productDescInp").value;
            
            var makanEldash = productCode.search("-");
            var productCompany = productCode.slice(0,makanEldash);
            var productModel = productCode.slice(makanEldash+1,productCode.length);
            
        //   if(validateForm(productName) == true)
        //   {

              var product =
              {
                  name :productName,
                  price :productPrice,
                  cat :productCategory,
                  desc :productDesc,
                  code : productCode,
                  model :productModel
                }
                productContainer.push(product);
                localStorage.setItem("productsData",JSON.stringify(productContainer));
                displayProduct();
                clearForm();
                
                
                
            // }
        }
    

function displayProduct()
{
    temp ="";
    for (var i = 0; i < productContainer.length; i++) {
        temp += `<div class="col-md-3">
                    <div class="product">
                      <img src="images/2.jpg" class="img-fluid">
                      <h5>`+productContainer[i].name+`<span class="badge badge-info">`+productContainer[i].cat+`</span></h5>
                      <p>`+productContainer[i].desc+`</p>
                      <div class="sale">`+productContainer[i].price+`</div>
                      </div>
                        <div onclick="deleteProduct(`+i+`)" class="btn btn-danger">delete</div>
                        <div onclick="updateProduct(`+i+`)" class="btn btn-success">Update</div>
                    </div>`;
        
    }
    document.getElementById("productRow").innerHTML = temp;
}

function clearForm()
{
    for (let i = 0; i < inputs.length; i++) {
         inputs[i].value = "";
    }

}
function deleteProduct(index)
{
    for ( i = 0; i < productContainer.length; i++) {
        productContainer.splice(index,1);
        localStorage.setItem("productsData",JSON.stringify(productContainer));
        displayProduct();
         }
}
function searchProduct(term)
{
    temp = '';
    for (var i = 0; i < productContainer.length; i++) {
        if(productContainer[i].name.toLowerCase().includes(term.toLowerCase ()))
        {
            temp += `<div class="col-md-3">
                        <div class="product">
                        <img src="images/2.jpg" class="img-fluid">
                        <h5>`+productContainer[i].name+`<span class="badge badge-info">`+productContainer[i].cat+`</span></h5>
                        <p>`+productContainer[i].desc+`</p>
                        <div class="sale">`+productContainer[i].price+`</div>
                        </div>
                  </div>`;
        }
        
    }
    document.getElementById("productRow").innerHTML = temp;
    

}

function updateProduct(index)
{
    for (let i = 0; i < productContainer.length; i++) {
        document.getElementById("productNameInp").value = productContainer[i].name;
        document.getElementById("productPriceInp").value = productContainer[i].price;
        document.getElementById("productCategoryInp").value = productContainer[i].cat;
        document.getElementById("productCodeInp").value = productContainer[i].code;
        document.getElementById("productDescInp").value = productContainer[i].desc;
        
    }
    temp =`<div onclick="updated(`+index+`)"  class="btn btn-success float-right" >updateProduct</div>`;
    document.getElementById("update").innerHTML = temp;

}
function updated(index)
{
    productContainer[index].name = document.getElementById("productNameInp").value;
    productContainer[index].price = document.getElementById("productPriceInp").value;
    productContainer[index].cat = document.getElementById("productCategoryInp").value;
    productContainer[index].code = document.getElementById("productCodeInp").value;
    productContainer[index].desc = document.getElementById("productDescInp").value;

    localStorage.setItem("productsData", JSON.stringify(productContainer));
    displayProduct();
    clearForm();
}






