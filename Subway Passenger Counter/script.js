//document.getElementById("count").innerText = 5


let count = 0;

function increment() {
    count = count + 1;
    document.getElementById("count-el").innerText = count
   
}

function save() {
    count = count - 1;
    document.getElementById("count-el").innerHTML = count
    
}