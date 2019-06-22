// Business Logic for AddressBook ---------
function CustomerInfo(size, topping) {
  this.size=size
  this.topping=topping
  this.cost=0;
}


CustomerInfo.prototype.price = function() {
  var crustPrice=0;
  var toppingPrice=0;
  if (this.size==="small"){
    crustPrice+=5;
  }else if (this.size==="medium") {
    crustPrice+=6;
  }else {
    crustPrice+=7;
  }
  if (this.topping==="Onion"){
    toppingPrice+=1;
  }
  if (this.topping==="Chicken"){
    toppingPrice+=3;
  }
  if (this.topping==="Chees"){
    toppingPrice+=2;
  }
  if (this.topping==="pepperoni"){
    toppingPrice+=3;
  }
  if (this.topping==="Tomato"){
    toppingPrice+=2;
  }
  if (this.topping==="club"){
    toppingPrice+=4;
  }
  if (this.topping==="Hawaiian"){
    toppingPrice+=3;
  }
  if (this.topping==="Mushroom"){
    toppingPrice+=2;
  }
  this.cost=crustPrice+toppingPrice;
  return this.cost;
}

// User Interface Logic ---------
function showaddress(){
  $(".onDelivery").show();
  }

function hideaddress()
{$(".onDelivery").hide();
}

// function attachContactListeners() {
//   $("ul#contacts").on("click", "li", function() {
//     showContact(this.id);
//   });
//   $("#buttons").on("click", ".deleteButton", function() {
//     addressBook.deleteContact(this.id);
//     $("#show-contact").hide();
//     displayContactDetails(addressBook);
//   });
// };

$(document).ready(function() {
    $("#userinfo").submit(function(event) {
    event.preventDefault();
    // debugger;
    var userName = $("input#name").val();
    var phoneNumber = $("input#phone").val();
    var orderType = $("input:radio[name=orderType]:checked").val();
    var street = $("input#street").val();
    var city = $("input#city").val();
    var state = $("input#state").val();
    var zipCode = $("input#zipCode").val();
    var crust = $("input:radio[name=crust]:checked").val();
    var size = $("input:radio[name=size]:checked").val();
    var topping = $('.topping:checked').val();

    var neworder = new CustomerInfo(size,topping);
    neworder.price();
    $(".carryout").hide();
    $(".address").hide();
    $("#showBill").show();
    $("#userinfo").hide();
    $(".customerName").text(userName);
    $(".phone-number").text(phoneNumber);
    if (orderType==="delivery"){
      $(".carryout").hide();
      $(".street").text();
      $(".city").text();
      $(".state").text();
      $(".zipCode").text();
    }else{
      $(".address").hide();
      $(".carryout").show();
    }
    $(".pizza").append("size=> "  + size + '<br>' + " crust=> "+ crust + '<br>' +" and toppings are=> " + topping);
    $(".price").text(neworder.cost);
});
});
