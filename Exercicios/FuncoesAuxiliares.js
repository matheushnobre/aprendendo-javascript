const input = [3, 8, 8, 7];

let count = 0;
function gets(){
    const value = input[count];
    count++;
    return value;
}

function print(text){
    console.log(text);
}

module.exports= {gets, print};