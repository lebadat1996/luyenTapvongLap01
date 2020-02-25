function plays() {
    for (let i = 1; i <= 3;) {
        let n1 = parseInt(prompt("nhap n1"));
        let n2 = parseInt(prompt("nhap n2"));
        let a = Math.floor(Math.random() * (n2 - n1)) + n1;
        alert(a);
        let n3 = parseInt(prompt("nhap gia tri doan"));
        if (n3 === a) {
            alert("chuc mung ban");
            break;
        } else {
            alert("sai roi nha' be' xin nhap lai di be'");
            i++;
        }
    }
}




