document.getElementById("results").style.display = "none";
document.getElementById("loading").style.display = "none";
document.getElementById("loan-form").addEventListener("submit", function(e){
    document.getElementById("results").style.display = "none";
    document.getElementById("loading").style.display = "block";
    setTimeout(calculate,2000);
    e.preventDefault();
});

function calculate(e) {

    
    // console.log("123");
    const amount = document.getElementById("loan_amount");
    const interest = document.getElementById("interest");
    const years = document.getElementById("years");
    const monthlyPayment = document.getElementById("monthly_payment");
    const totalAmt = document.getElementById("total_amount");
    const totalInt = document.getElementById("total_interest");

    const principal = parseFloat(amount.value); 
    const calInterest = parseFloat(interest.value) / 100;
    const calYears = parseFloat(years.value)/12; //converting years into months

    //calculating monthly payment start here
    const x = Math.pow(1 + calInterest, calYears); 
    const monthly = (principal * x * calInterest) / (x - 1);
    //calculating monthly payment end here

    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(0);
        totalAmt.value = (monthly * calYears).toFixed(0);
        totalInt.value = (monthly * calYears - principal).toFixed(0);

        document.getElementById("results").style.display = "block";
        document.getElementById("loading").style.display = "none";
        document.getElementById("loading").show();

    } else {
        showAlert("Please enter the values");
        document.getElementById("loading").style.display = "none";
    }

    function showAlert(error) {
        const errorDiv = document.createElement("div");
        errorDiv.className="alert alert-danger";
        errorDiv.appendChild(document.createTextNode(error));

        const card = document.querySelector(".card");
        const heading = document.querySelector("h1");

        card.insertBefore(errorDiv, heading);

        setTimeout(function() {
            document.querySelector(".alert").remove();
        }, 3000)
    }

    // console.log(x);
    // console.log(principal);
    // e.preventDefault();
}