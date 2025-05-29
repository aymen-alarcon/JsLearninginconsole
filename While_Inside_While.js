
function showalltablesofmultiplicationtillten(){
    let i = 1;
    let result = "";
    while (i <= 10) {
        console.log(`Multiplication Table for ${i}:`);
        i++;

        let a = 1;
        while (a <= 10) {
            result = `${i} x ${a} = ${i * a}`;
            a++;
            console.log(result);
        }
    }
}
showalltablesofmultiplicationtillten();
