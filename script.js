let principalValue;
let rateValue;

function updateDocumentValues(){
    principalValue = document.getElementById("principal").value;
    rateValue = document.getElementById("rate").value;
}

function compute() {
    updateDocumentValues();
    principalValue > 0 ? computeInterest() : alert("Enter a positive value");
}

function computeInterest(){
    let rateValue = document.getElementById("rate").value;
    let yearsValue = document.getElementById("years").value;
    let calculatedInterest = principalValue * rateValue * yearsValue /100;
    let year = new Date().getFullYear() + parseInt(yearsValue);
    let result = document.getElementById("result")
    result.innerHTML = " If you deposit <mark>" + principalValue
                        + "</mark>,<br> at an interest rate of <mark> " + rateValue + "%."  + "</mark><br> "
                        + "You will receive an amount of <mark>" + calculatedInterest + "</mark>,<br> "
                        + "in the year <mark>" + year + "</mark><br>";
}

function initComponents(){
    updateDocumentValues();
    let options = document.getElementById("years");
        for (let i = 1; i <= 10; i++) {
            options.innerHTML += "<option value='" + i + "'>" + i + "</option>";
        }
        updateRate();
}

function updateRate(){
    updateDocumentValues();
    document.getElementById("rate_value").innerHTML = rateValue + "%";
}
        