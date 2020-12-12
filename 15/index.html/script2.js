let symbols = "hbjokpnjnh";
let result = "";



for (let i = 0; i<symbols.length; i++){
   result += i*2+symbols[i];
}



console.log(result);

let a = symbols[symbols.length -1]

for (let i = 0; i<symbols.length; i++){
    if(symbols[i] == a){
        console.log(i);
    }
}






