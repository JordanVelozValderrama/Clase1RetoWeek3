for (let i = 0; i <= 20; i++) {
    if (i % 2 === 1) {
        console.log(`${i} es par`);
    } else {
        console.log(`${i} es impar`);
    }
}
console.log("==========");
for (let i = 0; i <= 10; i++) {
    var rs = i * 9;
    console.log(`${i} * 9 = ${rs}`);
}
console.log("==========");
for (let i = 1; i <= 10; i++) {
    for (let i2 = 1; i2 <= 10; i2++) {
        var rs = i * i2;
        console.log(`${i} * ${i2} = ${rs}`);
    }
}
console.log("==========");