
function fibonacci() {
    let n1 = 0;
    let n2 = 1;
    let sum=0;
    document.write("fibonasi:" + n1 + "<br>");
    document.write("fibonasi: " + n2 + "<br>");
    for (let i = 2; i < 20; i++) {
        n3 = n1 + n2;
        document.write("fibonasi: " + n3 + "<br>");
        n1 = n2;
        n2 = n3;
        sum+=n3;
    }
    alert(sum);
}


