function checkVowels(){

let inputText = document.getElementById("inputText").value
let errorDiv = document.getElementById("error");
let resultDiv = document.getElementById("result");
errorDiv.textContent = "";
resultDiv.textContent = "";

if(!inputText){
    error.textContent = " Please Enter Some Text "
    return;
}

let vowels = [ 'a' , 'e' , 'i' , 'o' , 'u' , 'A' , 'I' , 'O' , 'U'];
let count = 0 ;

for(let i = 0 ; i < vowels.length ; i++){
    if(vowels.includes(inputText[i])){
        count++
    }

}
 resultDiv.textContent = "Number of Vowels : " + count ;
}
   