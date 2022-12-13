//variable to hold selected answer
let ans = ['Accra', 'Tovalds'];

let check = function(){

 let svall = document.querySelector("input[name=capital]:checked").value;

 if(svall ==ans[0])
 alert('correct');
 else{
  alert('wrong');
  answers.innerHTML = 'Accra';
 }

}