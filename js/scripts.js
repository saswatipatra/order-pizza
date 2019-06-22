function imagehide() {
$("#img1").hide();
$("#img2").hide();
$("#img3").hide();
$("#img4").hide();
$("#img5").hide();
$("#img6").hide();
$("#img7").hide();
$("#img8").hide();
$("#img9").hide();
}


// Business Logic---------
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
  $(".carryout").hide();
  $(".delivery").show();
  }

function hideaddress()
{$(".onDelivery").hide();
$(".carryout").show();
$(".delivery").hide();
}
function image1() {
  imagehide();
  $("#img2").show();
}
function image2() {
  imagehide();
  $("#img3").show();
}
function image3() {
  imagehide();
  $("#img4").show();
}
function image4() {
  imagehide();
  $("#img5").show();
}
function image5() {
  imagehide();
  $("#img6").show();
}
function image6() {
  imagehide();
  $("#img7").show();
}
function image7() {
  imagehide();
  $("#img8").show();
}
function image8() {
  imagehide();
  $("#img9").show();
}
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
