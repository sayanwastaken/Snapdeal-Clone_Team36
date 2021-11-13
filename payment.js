 displayCredit();
  // cards section starts here
  document.getElementById("creditCard").addEventListener("click", () => {
    document.getElementById("optionSelect").innerHTML = "";
    document.getElementById("creditCard").style.color = "black";
    document.getElementById("creditCard").style.borderLeft =
      "3px solid rgb(228, 12, 70)";
    document.getElementById("debitCard").style.color = "grey";
    document.getElementById("debitCard").style.borderLeft = "0";
    document.getElementById("cash").style.color = "grey";
    document.getElementById("cash").style.borderLeft = "0";
    document.getElementById("upi").style.color = "grey";
    document.getElementById("upi").style.borderLeft = "0";
    displayCredit();
  });
  
 function success() {
  alert("Payment Successful")
 }
  document.getElementById("debitCard").addEventListener("click", () => {
    document.getElementById("optionSelect").innerHTML = "";
    document.getElementById("debitCard").style.color = "black";
    document.getElementById("debitCard").style.borderLeft =
      "3px solid rgb(228, 12, 70)";
    document.getElementById("creditCard").style.color = "grey";
    document.getElementById("creditCard").style.borderLeft = "0";
    document.getElementById("cash").style.color = "grey";
    document.getElementById("cash").style.borderLeft = "0";
    document.getElementById("upi").style.color = "grey";
    document.getElementById("upi").style.borderLeft = "0";
    document.getElementById(
      "optionSelect"
    ).innerHTML = ` <div id="payUsing"><p id="heading">Pay using Debit Card</p></div>
          <hr>
          <table style="width:100%">
            <colgroup>
       <col span="1" style="width: 16%;">
       <col span="1" style="width: 50%;">
    </colgroup>
            <tr>
              <td class="cc-td">Card Number</td>
              <td>
                <input
                  type="number"
                  placeholder="Card Number"
                  id="card"
                />
              </td>
            </tr>
            <tr>
              <td class="cc-td">Expiry Date</td>
              <td>
                <select id="month">
                  <option value="">MM</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                  <option value="">11</option>
                  <option value="">12</option>
                </select>
                <!-- month select finished -->
                <span>/</span>
                <select name="" id="year">\
                  <option value="">YY</option>
                 <option value="">22</option>
                 <option value="">23</option>
                 <option value="">24</option>
                 <option value="">25</option>
                 <option value="">26</option>
                 <option value="">27</option>
                 <option value="">28</option>
                 <option value="">29</option>
                 <option value="">30</option>
                 <option value="">31</option>
                 <option value="">32</option>
                </select>
                <!-- year  select finished -->
                <span class="cvvTxt">CVV</span>
                <input type="number" placeholder="CVV" id="cvv">
              </td>
            </tr>
          </table>
          <button id="btn-dc" onclick="success()">PAY NOW</button>
          <h6>This card will be saved for a faster payment experience</h6>
          <p id="trust">TrustPay: 100% Payment Protection, Easy Returns Policy</p>
           <h6>By placing the order, I have read and agreed to snapdeal.com's  <a href="#">Terms of Use</a>   |   <a href="#">Terms of sale</a></h6>`;
  });
  function displayCredit() {
    document.getElementById("creditCard").style.color = "black";
    document.getElementById("creditCard").style.borderLeft =
      "3px solid rgb(228, 12, 70)";

    document.getElementById(
      "optionSelect"
    ).innerHTML = ` <div id="payUsing"><p id="heading">Pay using Credit Card</p></div>
          <hr>
          <table style="width:100%">
            <colgroup>
       <col span="1" style="width: 16%;">
       <col span="1" style="width: 50%;">
    </colgroup>
            <tr>
              <td class="cc-td">Card Number</td>
              <td>
                
                <input
                  type="number"
                  placeholder="Card Number"
                  id="card"
                />
              </td>
            </tr>
            <tr>
              <td class="cc-td">Expiry Date</td>
              <td>
                <select id="month">
                  <option value="">MM</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                  <option value="">11</option>
                  <option value="">12</option>
                </select>
                <!-- month select finished -->
                <span>/</span>
                <select name="" id="year">\
                  <option value="">YY</option>
                 <option value="">22</option>
                 <option value="">23</option>
                 <option value="">24</option>
                 <option value="">25</option>
                 <option value="">26</option>
                 <option value="">27</option>
                 <option value="">28</option>
                 <option value="">29</option>
                 <option value="">30</option>
                 <option value="">31</option>
                 <option value="">32</option>
                </select>
                <!-- year  select finished -->
                <span class="cvvTxt">CVV</span>
                <input type="number" placeholder="CVV" id="cvv">
              </td>
            </tr>
          </table>
          <button id="btn-cc" onclick="success()">PAY NOW</button>
          <h6>This card will be saved for a faster payment experience</h6>
          <p id="trust">TrustPay: 100% Payment Protection, Easy Returns Policy</p>
         
           <h6>By placing the order, I have read and agreed to snapdeal.com's  <a href="#">Terms of Use</a>   |   <a href="#">Terms of sale</a></h6>`;
  }
// card section finishes here

// cash section starts here
  document.getElementById("cash").addEventListener("click", () => {
    document.getElementById("optionSelect").innerHTML = "";
    document.getElementById("cash").style.color = "black";
    document.getElementById("upi").style.color = "grey";
    document.getElementById("upi").style.borderLeft = "0";document.getElementById("cash").style.borderLeft =
      "3px solid rgb(228, 12, 70)";
    document.getElementById("creditCard").style.color = "grey";
    document.getElementById("creditCard").style.borderLeft = "0";
    document.getElementById("debitCard").style.color = "grey";
    document.getElementById("debitCard").style.borderLeft = "0";
    document.getElementById("upi").style.color = "grey";
    document.getElementById("upi").style.borderLeft = "0";
    document.getElementById(
      "optionSelect"
    ).innerHTML = ` <div id="heading"><p>Pay using Cash On Delivery</hh4></div>
           <hr>
           <button id="btn-cod" onclick="success()">Pay Now</button>
           <h4>TrustPay: 100% Payment Protection, Easy Returns Policy</h4>
           <h6>By placing the order, I have read and agreed to snapdeal.com's  <a href="#">Terms of Use</a>   |   <a href="#">Terms of sale</a></h6>`;
  });
// upi section starts here
  document.getElementById("upi").addEventListener("click", () => {
    document.getElementById("optionSelect").innerHTML = "";
    document.getElementById("upi").style.color = "black";
    document.getElementById("upi").style.borderLeft =
      "3px solid rgb(228, 12, 70)";
    document.getElementById("creditCard").style.color = "grey";
    document.getElementById("creditCard").style.borderLeft = "0";
    document.getElementById("debitCard").style.color = "grey";
    document.getElementById("debitCard").style.borderLeft = "0";
    document.getElementById("cash").style.color = "grey";
    document.getElementById("cash").style.borderLeft = "0";
    document.getElementById(
      "optionSelect"
    ).innerHTML = `<div id="payUsing"><p id="heading">Pay using UPI</p></div>
          <hr>
          <table>
            <tr>
              <td><input type="email" id="upi_val" placeholder="Enter VPA.Ex.90152xxxx@oksbi"></td>
              <td><button id="varify"  onclick="changecolor()">Varify</button></td>
            </tr>
          </table>
          <button id="btn-upi">PAY NOW</button>
 
       <p id="trust-upi">TrustPay: 100% Payment Protection, Easy Returns Policy</p>
      <h6>By placing the order, I have read and agreed to snapdeal.com's  <a href="#">Terms of Use</a>   |   <a href="#">Terms of sale</a></h6>`;
  });
  function changecolor(){
    document.getElementById("btn-upi").style.backgroundColor="rgb(228, 12, 70)"
    document.getElementById("btn-upi").setAttribute("onclick","success()")
  }

  var sumData=JSON.parse(localStorage.getItem("sumData"))|| []
  var prodBox=document.getElementById("prodSum")

  displaySum()
  displayTotal()
  function displaySum(){
    sumData.map((item)=>{
      var mainDiv=document.createElement("div")
      mainDiv.setAttribute("class","maindiv")

      var div1=document.createElement("div")
      var div2=document.createElement("div")
      var p1=document.createElement("p")
      var p2=document.createElement("p")
      var p3=document.createElement("p")
      p1.innerText=item.type;
      div1.append(p1)
      p2.innerText="Quantity: 1"
      p3.innerText="Rs"+"."+item.pprice;
      div2.append(p2,p3)
      div2.setAttribute("class","divTwo")
      mainDiv.append(div1,div2)
      prodBox.append(mainDiv)
    })
  }

  function displayTotal(){
    var totalVal=sumData.reduce(function(ac,cv){
      return ac+Number(cv.pprice)
    },0)
    document.getElementById("rs").innerText="Rs"+"."+totalVal;
    document.getElementById("rs2").innerText="Rs"+"."+totalVal;
  }