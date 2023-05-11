function sum() { 
    var x = parseFloat(document.getElementById('enter_number').value); 
    var y = parseFloat(document.getElementById('result').innerHTML); 

    document.getElementById('result').innerHTML = (x + y).toFixed(2); 
} 
    function difference() { 
    var x = parseFloat(document.getElementById('enter_number').value); 
    var y = parseFloat(document.getElementById('result').innerHTML); 
    document.getElementById('result').innerHTML = (y - x).toFixed(2); 
    } 

    function product() { 
        var x = parseFloat(document.getElementById('enter_number').value); 
        var y = parseFloat(document.getElementById('result').innerHTML); 
        document.getElementById('result').innerHTML = (x * y).toFixed(2); 
    } 

    function quotient() { 
        var x = parseFloat(document.getElementById('enter_number').value); 
        var y = parseFloat(document.getElementById('result').innerHTML); 
        document.getElementById('result').innerHTML = (y / x).toFixed(2); 
    } 

    function cancel() { 
        document.getElementById('enter_number').value = "";
        document.getElementById('result').innerHTML = 0; 
    } 

    function equals() { 
    var x = parseFloat(document.getElementById('enter_number').value); 
    if (isNaN(x)) 
    { 
        return; 
    } 
    
    var y = parseFloat(document.getElementById('result').innerHTML);
        document.getElementById('enter_number').value = ""; 
        document.getElementById('result').innerHTML = (x + y).toFixed(2); }