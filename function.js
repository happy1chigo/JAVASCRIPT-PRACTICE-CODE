// // console.log('hello world!');
// // function fruitProcess(mango ,orange){
// //     console.log(`${mango} mango and ${orange} oranges.`);
// // }
// // fruitProcess(2, 3);

// // function juice(mango, orange){
// //     const mangoJuice = ` ${mango} mango and ${orange} oranges juice.`;
// //     return mangoJuice;
// // }
// // const mangoJuice =juice(2, 3);
// // console.log(mangoJuice);
// // let num = Number('23');
// // console.log(num);

// // calculate age using function declaration
// // declarative function can call before declaration it means can call the function above it
// const age1 = calAge1(2002);
// console.log(age1);
// function calAge1(birthYear){
//  return 2023 - birthYear;
// }
// // calculate age using expression function
// // expression function can call it only under the or u can say after the function is ready....so expression function only can be call under that function.
// const calAge2 = function(birthYear){
//     return 2023 - birthYear;
// }
// const age2 = calAge2(2002);
// console.log(age2);

// ARROW FUNCTION
const age1 = birthYear => console.log(2023 - birthYear);
age1(2002);
// calculate retirement
const yearUntilRetirement = (birthYear, firstName) =>{
    const age = 2023 - 2002;
    const retirement = 65 - age;
    return `${firstName} has ${retirement} years left.`;
}
const retirementOfHapi = yearUntilRetirement(2002 ,'hapi');
console.log(retirementOfHapi);