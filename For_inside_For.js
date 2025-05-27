function showalltablesofmultiplicationtillten() {
let result = "";

    for (let i = 1; i <= 10; i++) {
        console.log(`Multiplication Table for ${i}:`);
        for (let a = 1; a <= 10; a++) {
            console.log(`${i} x ${a} = ${i * a}`);
        }
        console.log(result); 
    }
}

showalltablesofmultiplicationtillten();
