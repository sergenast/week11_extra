let square = document.getElementById('square');
square.setAttribute("disabled", true);

function calcSquare() {
    let num = Number(document.getElementById('num').value);
    let result = num ** 2;
    document.getElementById('square').value = result;
}