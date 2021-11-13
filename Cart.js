var cartArr = JSON.parse(localStorage.getItem("CartData")) || [] ;
var body = document.querySelector("body")
var tbody = document.getElementById("tbody")

var containerDiv = document.getElementById("container")
displayItems(cartArr)
function displayItems(cartArr){
       cartArr.map(function(item) {
       var trDiv = document.createElement("div");
       trDiv.setAttribute("id","trDiv")
       var tr = document.createElement("tr")
       tr.setAttribute("id","row")

       var td1 = document.createElement("td");
       var mainDiv = document.createElement("div");
       mainDiv.setAttribute("id","maindiv")
       var imageDiv = document.createElement("div");
       imageDiv.setAttribute("id","imagediv")
       var detailsDiv = document.createElement("div");
       detailsDiv.setAttribute("id","detailsdiv")
       var h1 = document.createElement("h1");
       h1.textContent = item.itemName;
      
      
       var h2 = document.createElement("h3");
       h2.textContent = item.type;
       var removeBtn = document.createElement("button")
       removeBtn.setAttribute("id","removeBtn")
       removeBtn.innerHTML = `<span>X Remove</span>`;
       removeBtn.addEventListener("click", function () {
   makeDelete();
 });
      
      
       
      

       var img = document.createElement("img");
       img.setAttribute("src",item.image)
       var td2 =  document.createElement("td");
       td2.textContent = "Rs- " + item.pprice 
       var td3 = document.createElement("td")
       
       var sel = document.createElement("select");
       sel.setAttribute("id","sele")
       
       var opt1 = document.createElement("option");
       var opt2 = document.createElement("option");

       opt1.value = "1";
       opt1.text = "1";

       opt2.value = "2";
        opt2.text = "2";

         sel.add(opt1);
         sel.add(opt2);
         td3.textContent = item.sel
         var td4 = document.createElement("td");
         td4.setAttribute("id","td4")
         td4.textContent = "Check availability and delivery charges for your pincode";
        
         var td5 = document.createElement("td");
         td5.textContent = "Rs-" + Number(item.pprice)
         console.log(item.pprice)
         
          var total = cartArr.reduce(function(acc,cv){
     return acc + Number(cv.pprice)
 },0)
 var Div2 = document.getElementById("totalprice").textContent = "Rs - " +  total
 var paymentbtn = document.getElementById("paymentbtn").textContent = "PROCEED TO PAY RS. " + total

 var items = cartArr.length
 var cartItem  = document.getElementById("cartItem").textContent = `( ${items}   items)`

        
       
     imageDiv.append(img)
     detailsDiv.append(h1,h2,removeBtn);
     mainDiv.append(imageDiv,detailsDiv)
     td1.append(mainDiv)
    
     td3.append(sel) 
   
   tr.append(td1,td2,td3,td4,td5)
 
   tbody.append(tr)

 });
 }

 function pinCode(){
       var thead  =  document.getElementById("thead")   
var btn1 = document.getElementById("btn1");

 var td5 = document.getElementById("td4").textContent="Standard Delivery By 19 Nov - 21 Nov Free" 
   
   


 }
 function makeDelete(index) {
cartArr.splice(index,1);
localStorage.setItem("CartShop", JSON.stringify(cartArr));

displayItems(cartArr);
}
var summaryData =  JSON.parse(localStorage.getItem("sumData")) || []

document.getElementById("paymentbtn").addEventListener("click",addToSummery)
function addToSummery(){
cartArr.map(function(item){
           var obj = {
              
              pprice: item.pprice,
              items: item.items,
              type:item.type,
 
            }
 
            summaryData.push(obj)
            localStorage.setItem("sumData", JSON.stringify(summaryData));
})
}

