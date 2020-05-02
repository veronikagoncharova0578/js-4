const numeral = [100, -5, 20, -3, -20, 32, 10, 7];
let sum = 0;
for (let i = 0; i < 9; i += 1){
    if (numeral [i] > 0){
        sum += numeral[i];
    } else {
        continue;
    }
}
console.log(sum);
