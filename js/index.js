// const numBtn1 = document.querySelector('.numBtn1');
// const numBtn2 = document.querySelector('.numBtn2');
// const numBtn3 = document.querySelector('.numBtn3');
// const numBtn4 = document.querySelector('.numBtn4');
// const numBtn5 = document.querySelector('.numBtn5');
// const numBtn6 = document.querySelector('.numBtn6');
// const numBtn7 = document.querySelector('.numBtn7');
// const numBtn8 = document.querySelector('.numBtn8');
// const numBtn9 = document.querySelector('.numBtn9');
const calcBtn = document.querySelector('.calcBtn');
// const resetBtn = document.querySelector('.resetBtn');
// const button = document.querySelectorAll('.button');




// numBtn1.addEventListener('click', onCalcBtn1);
// numBtn2.addEventListener('click', onCalcBtn2);
// numBtn3.addEventListener('click', onCalcBtn3);
// numBtn4.addEventListener('click', onCalcBtn4);
// numBtn5.addEventListener('click', onCalcBtn5);
// numBtn6.addEventListener('click', onCalcBtn6);
// numBtn7.addEventListener('click', onCalcBtn7);
// numBtn8.addEventListener('click', onCalcBtn8);
// numBtn9.addEventListener('click', onCalcBtn9);
calcBtn.addEventListener('click', calculation);




function calculation() {
  
  let result=0
 
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  switch (op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }
  console.log(result)
 
  document.getElementById("result").innerHTML = result;
}