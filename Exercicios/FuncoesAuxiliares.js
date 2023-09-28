const input = [5500, 250];

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