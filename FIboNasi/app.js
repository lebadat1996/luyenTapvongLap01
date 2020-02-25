function fibonasi() {
    let n = parseInt(document.getElementById("number").value);
    let n1 = 0;
    document.write("so fibonasi:" + n1 + "<br>");
    let n2 = 1;
    document.write("so fibonasi: " + n2 + "<br>");
    for (let i =2 ; i<n ; i++){
        n3 = n1+n2;
        document.write("so fibonasi: " + n3+ "<br>") ;
        n1=n2;
        n2=n3;
    }
}