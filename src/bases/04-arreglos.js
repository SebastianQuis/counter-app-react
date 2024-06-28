
const arr1 = [1, 2, 3, 4, 5]

// MATIENE LA REFERENCIA
// let arr2 = arr1;

// PERDER LA REFERENCIA
let arr2 = [...arr1, 6];
// arr2.push(6);

// CON MAP TAMBIÉN SE ROMPE LA REFERENCIA
const arr3 = arr1.map( valor => {
   return valor * 2; 
});

arr1.push("mi valor");

console.log(arr1);
console.log(arr2);
console.log(arr3);








