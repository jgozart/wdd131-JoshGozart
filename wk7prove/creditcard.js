document.getElementById("creditCardForm").addEventListener("submit", function(e){

    e.preventDefault();

    let cardNumber = document.getElementById("cardNumber").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let message = document.getElementById("message");

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth()+1;
    let currentYear = currentDate.getFullYear() % 100;

    if(cardNumber !== "1234123412341234"){
        message.textContent = "Invalid card number";
        return;
    }

    if(year < currentYear || 
      (year == currentYear && month < currentMonth)){
        message.textContent = "Card is expired";
        return;
    }

    message.textContent = "Payment Successful!";
});