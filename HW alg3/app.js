//Task екурсивный подход для решения задачи с подсчётом согласных букв в строке.

function countConsonantRecursion(str, strLength) {
   if (strLength === 0) {
     return 0;
   }
   
let lastChar = str.charAt(strLength - 1);
let isConsonant = /[bcdfghjklmnpqrstvwxyz]/i.test(lastChar);
   
   return countConsonantRecursion(str, strLength - 1) + (isConsonant ? 1 : 0);
 }
 
 
 let str = "Hello, Teacher!";
 let result = countConsonantRecursion(str, str.length);
 console.log(result); 