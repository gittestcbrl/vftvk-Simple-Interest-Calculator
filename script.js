function compute()
{
    var principal = document.getElementById("principal").value;
    // check whether user provided input
    if (principal == ''){
        alert("Provide Principal");
        document.getElementById("principal").focus();
    }
    // check whether user provided input a positive value
    else if (principal <= 0)
    {
        alert("Provide a Positive amount for Principal")
        document.getElementById("principal").focus();
    }
    else{
        // All conditions met. calculate interest
        var rate = document.getElementById("rate").value;
        var years = parseInt(document.getElementById("years").value);
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
       
        var result = document.getElementById("result");
        result.innerHTML = "If you deposit <mark>"+principal+
        "</mark>,<br>at an interest rate of <mark>"+rate+
        "</mark><br>You will receive an amount of <mark>"+interest+
        "</mark>,<br>in the year <mark>"+year+"</mark><br>"
    }
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + '%';
}
