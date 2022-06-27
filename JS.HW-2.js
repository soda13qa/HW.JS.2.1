/////////////// 1 тз

let a = prompt("number");
let b = prompt("grade");
let result
function calculator(){
if (a >= 1){
    result = a ** b
    alert(result)
    a= result;
    
} else {
    return
    }
}
calculator()




///////////// 2 тз

let line = prompt();
let str = "";
function printSmile(){
for (let i = 0; i < line; i++){
    str += ":)";
    console.log(str)
}
}
printSmile();



//////////////// 3 тз

function getWordStructure(word){
    let count = 0;
    let count2 = 0;
    const vowels = ["a", "e", "i","o","u"];
    const consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","w","x","y","z"]
    for(let char of word.toLowerCase()){
        if(vowels.includes(char)){
            count +=1;
        }
        if(consonants.includes(char)){
            count2 +=1;
        }
    }
    return {count2, count}
    }
    console.log(getWordStructure(""))



////////////// 4 тз
function palindrom(str){
    str = str.toLowerCase();
    return str == str.split("").reverse().join("")
}
console.log(palindrom("abba1"))
