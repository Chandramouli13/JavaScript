function add(){
    let a = document.getElementById("first").value;
    let b = document.getElementById("second").value;
    let out = Number(a) + Number(b);
    document.getElementsByClassName('out')[0].innerText = `Sum of number is ${out}`;
}
function sub(){
    let a = document.getElementById("first").value;
    let b = document.getElementById("second").value;
    let out = Number(a) - Number(b);
    document.getElementsByClassName('out')[0].innerText = `Sub of number is ${out}`;
}