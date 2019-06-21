// Business Logic for AddressBook ---------
function CustomerInfo(Name, phoneNumber, orderType, crust, size, topping) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber
  this.orderType=orderType
  this.crust= crust
  this.size=size
  this.topping=topping
}


CustomerInfo.prototype.price = function(size,topping) {
  var crustPrice=0;
  var toppingPrice=0;
  var totalPrice=0;

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
  totalPrice=crustPrice+toppingPrice;
  return totalPrice;
}











// User Interface Logic ---------
// var addressBook = new AddressBook();


function showDelivery(){
  $(".onDelivery").show();
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
  // $(".onDelivery").hide();
  // attachContactListeners();
  $("form#userinfo").submit(function(event) {
    event.preventDefault();
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

    var neworder = new CustomerInfo(userName,phoneNumber,orderType,crust,size,topping);
    CustomerInfo.prototype.price = function(size,topping)
    addressBook.addContact(newContact);
    displayContactDetails(addressBook);
  })
})
