//using onchange for updating the context immediately when something change
document.getElementById('container').onchange = function(){
    var bill = Number(document.getElementById('billTotal').value); // get the value of that input
    var tipPercent = document.getElementById('tipInput').value; // get the value of tips
    var split = document.getElementById('splitInput').value;  // get the value of split
    var tipValue = bill *( tipPercent / 100);
    var newBillEach = (bill + tipValue) / split;
    var tipEach = tipValue / split;

    document.getElementById('tipOutput').innerHTML = tipPercent + "%";
    document.getElementById('splitOutput').innerHTML = split;
    document.getElementById('newBill').innerHTML = '$' + newBillEach.toFixed(2);
    document.getElementById('tipEach').innerHTML = '$' + tipEach.toFixed(2);
}