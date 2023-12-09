function enter(val) { 
    document.getElementById("result").value += val 
}

function AC(){

    document.getElementById('result').value = ''

}

function Solve(){

    let a = document.getElementById('result').value

    let b = eval(a);

    document.getElementById('result').value = b

    return b

}

function Del() {
    var r = document.getElementById('result');
    r.value = r.value.slice(0,-1);
 }