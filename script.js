// Selecting UI variables
const formData = document.querySelector('#form');
const inputData = document.querySelector('.form-control');
let result = document.querySelector('.result');


const resultData = (e)=>{

if(inputData.value !==''){
let word = inputData.value;
// let count = word.length;
 word = word.replace(/[^a-zA-Z ]/g, '');
  let count = word.split(/[^\s]+/).length - 1;
result.innerText = ` Count: ${count} 💠
Words: ${word} 💠

`;
inputData.value = '';
}
else{

alert( 'Please enter alphabet characters only 😀')
}
e.preventDefault();
}

// adding event listeners
formData.addEventListener('submit', resultData);