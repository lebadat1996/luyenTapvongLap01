function result() {
    let i=1;
    let count=0;
    let sum =0;
while (count<30){
    if (i%7===0){
        document.write("so chia het cho 7 la:" +i+ "<br>");
        count+=1;
        sum+=i;
    }
    i++;

    }
    document.write(sum);
}